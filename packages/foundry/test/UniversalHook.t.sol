// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console, Vm} from "forge-std/Test.sol";
import {TokenFixture} from "./utils/TokenFixture.sol";
import {PoolManager, IPoolManager} from "../contracts/v4-core/PoolManager.sol";
import {PoolManager} from "../contracts/v4-core/PoolManager.sol";
import {TestERC20} from "../contracts/v4-core/test/TestERC20.sol";
import {CurrencyLibrary, Currency} from "../contracts/v4-core/types/Currency.sol";
import {PoolKey} from "../contracts/v4-core/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "../contracts/v4-core/types/PoolId.sol";
import {IHooks} from "../contracts/v4-core/interfaces/IHooks.sol";
import {UniversalFactoryDeployHook} from "../contracts/v4-core/libraries/UniversalFactoryDeployHook.sol";
import {Router04} from "../contracts/Router04.sol";
import {TickMath} from "../contracts/v4-core/libraries/TickMath.sol";
import {UniversalHook} from "../contracts/UniversalHook.sol";
import {UniversalHookFactory} from "../contracts/UniversalHookFactory.sol";
import {IUniversalHook} from "../contracts/interfaces/IUniversalHook.sol";

import {PoolId} from "../contracts/v4-core/types/PoolId.sol";
import {FeeLibrary} from "../contracts/v4-core/libraries/FeeLibrary.sol";

contract TestRouterUniV4 is Test, TokenFixture {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    uint160 public constant SQRT_RATIO_1_1 = 79228162514264337593543950336;
    uint160 public constant SQRT_RATIO_1_2 = 56022770974786139918731938227;
    uint160 public constant SQRT_RATIO_1_4 = 39614081257132168796771975168;
    uint160 public constant SQRT_RATIO_2_1 = 112045541949572279837463876454;
    uint160 public constant SQRT_RATIO_4_1 = 158456325028528675187087900672;

    TestERC20 token0;
    TestERC20 token1;
    PoolManager manager;
    UniversalHook universalHook;
    UniversalHookFactory universalHookFactory;
    address payable allHooksAddress = payable(
        address(
            uint160(
                UniversalFactoryDeployHook.BEFORE_INITIALIZE_FLAG | UniversalFactoryDeployHook.BEFORE_SWAP_FLAG | UniversalFactoryDeployHook.AFTER_SWAP_FLAG
                    | UniversalFactoryDeployHook.AFTER_INITIALIZE_FLAG | UniversalFactoryDeployHook.BEFORE_MODIFY_POSITION_FLAG | UniversalFactoryDeployHook.AFTER_MODIFY_POSITION_FLAG
            )
        )
    );

    PoolKey key;
    PoolId id;

    Router04 router;

    address account1 = vm.addr(2);
    address account2 = vm.addr(3);
    address account3 = vm.addr(4);

    function setUp() public {
        initializeTokens();
        token0 = TestERC20(Currency.unwrap(currency0));
        token1 = TestERC20(Currency.unwrap(currency1));

        _mintTokensForAllAccounts();

        manager = new PoolManager(500000);

        vm.record();
        UniversalHook universalHookImpl = new UniversalHook(manager);
        (, bytes32[] memory writes) = vm.accesses(address(universalHookImpl));
        vm.etch(address(allHooksAddress), address(universalHookImpl).code);
        unchecked {
            for (uint256 i = 0; i < writes.length; i++) {
                bytes32 slot = writes[i];
                vm.store(allHooksAddress, slot, vm.load(address(universalHookImpl), slot));
            }
        }

        universalHook = UniversalHook(allHooksAddress);

        uint24 fee = 3000 | FeeLibrary.DYNAMIC_FEE_FLAG;

        console.logString("FEEEEEE");
        console.logUint(fee);

        // params to initalize pool
        key = PoolKey(currency0, currency1, fee, 2, IHooks(address(universalHook)));

        console.logString("KEYYY");
        console.logBytes32(PoolId.unwrap(key.toId()));

        router = new Router04(manager);

        _approveAllTokensToRouter(address(router));
    }

    function testOwnerOfHooks() public {
        require(universalHook.owner() == address(this), "owner of universal hook is not this contract");
    }

    function test_hook_only_owner_before_initialize() public {
        bytes4[] memory selectors = new bytes4[](1);
        selectors[0] = UniversalHook.only_owner_before_initialize.selector;
        universalHook.setFunctionsForAction(IUniversalHook.Action.BeforeInitialize, selectors);

        // should fail if not called by owner
        vm.expectRevert();
        vm.prank(account1);
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        // should succeed if called by owner
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));
    }

    function test_hook_whitelist_before_initialize() public {
        bytes4[] memory selectors = new bytes4[](1);
        selectors[0] = UniversalHook.whitelist_before_initialize.selector;
        universalHook.setFunctionsForAction(IUniversalHook.Action.BeforeInitialize, selectors);

        // should fail if not called by owner
        vm.expectRevert();
        vm.prank(account1);
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        //whitelist the account
        universalHook.setWhitelistedForAction(account1, IUniversalHook.Action.BeforeInitialize, true);

        // should succeed if called by whitelisted
        vm.prank(account1);
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));
    }

    function test_hook_not_blacklisted_before_initialize() public {
        bytes4[] memory selectors = new bytes4[](1);
        selectors[0] = UniversalHook.not_blacklisted_before_initialize.selector;
        universalHook.setFunctionsForAction(IUniversalHook.Action.BeforeInitialize, selectors);

        //blacklist the account
        universalHook.setBlacklistedForAction(account1, IUniversalHook.Action.BeforeInitialize, true);

        // should revert if blacklisted
        vm.expectRevert();
        vm.prank(account1);
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        // remove from blacklist
        universalHook.setBlacklistedForAction(account1, IUniversalHook.Action.BeforeInitialize, false);
        // should succeed if not blacklisted
        vm.prank(account1);
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));
    }

    function test_hooks_multiple_before_initialize() public {
        bytes4[] memory selectors = new bytes4[](2);
        selectors[0] = UniversalHook.not_blacklisted_before_initialize.selector;
        selectors[1] = UniversalHook.whitelist_before_initialize.selector;
        universalHook.setFunctionsForAction(IUniversalHook.Action.BeforeInitialize, selectors);

        vm.expectRevert();
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        //whitelist this contract
        universalHook.setWhitelistedForAction(address(this), IUniversalHook.Action.BeforeInitialize, true);

        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        //blacklist the account
        universalHook.setBlacklistedForAction(address(this), IUniversalHook.Action.BeforeInitialize, true);

        vm.expectRevert();
        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));
    }

    function test_user_trading_volume_dynamic_fee() public {
        bytes4[] memory selectors = new bytes4[](1);
        selectors[0] = UniversalHook.user_trading_volume_dynamic_fee.selector;
        universalHook.setFunctionsForAction(IUniversalHook.Action.DynamicFee, selectors);
        console.log("IMPORTANT");
        console.logBytes4(selectors[0]);
        console.logUint(uint8(IUniversalHook.Action.DynamicFee));
        selectors[0] = UniversalHook.whitelist_swap.selector;
        universalHook.setFunctionsForAction(IUniversalHook.Action.BeforeSwap, selectors);
        //whitelist this contract
        universalHook.setWhitelistedForAction(address(router), IUniversalHook.Action.BeforeSwap, true);

        manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        // add liquidity ==>  1000 ETH
        router.modifyPosition(key, IPoolManager.ModifyPositionParams(-100000, 100000, 1000 ether));

        // add thresholds for swap
        universalHook.addTradingVolumeDiscountThresholds(IUniversalHook.TradingVolumeDiscountThreshold(200 ether, 3));

        uint160 sqrtPriceLimit = TickMath.getSqrtRatioAtTick(-100);
        console.logString("CHECKPOIINT 1 SWAP");
        console.logUint(sqrtPriceLimit);
        vm.recordLogs();
        // swap 100 ETH
        router.swap(key, IPoolManager.SwapParams(true, 100 ether, sqrtPriceLimit));

        Vm.Log[] memory logs = vm.getRecordedLogs();

        (int128 amount0, int128 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick, uint24 fee) =
            abi.decode(logs[0].data, (int128, int128, uint160, uint128, int24, uint24));
        console.logString("performed swap");
        console.logInt(amount0);
        console.logInt(amount1);
        console.logUint(sqrtPriceX96);
        console.logUint(liquidity);
        console.logInt(tick);
        console.logUint(fee);

        // SECOND SWAP - REVERSE

        sqrtPriceLimit = TickMath.getSqrtRatioAtTick(20);
        vm.recordLogs();
        router.swap(key, IPoolManager.SwapParams(false, 100 ether, sqrtPriceLimit));

        logs = vm.getRecordedLogs();

        (amount0, amount1, sqrtPriceX96, liquidity, tick, fee) =
            abi.decode(logs[0].data, (int128, int128, uint160, uint128, int24, uint24));
        console.logString("performed swap");
        console.logInt(amount0);
        console.logInt(amount1);
        console.logUint(sqrtPriceX96);
        console.logUint(liquidity);
        console.logInt(tick);
        console.logUint(fee);

        console.log("user trading volume");
        require(
            universalHook.getUserTradingVolumeByPool(address(this), key.toId()) > 100 ether,
            "user trading volume is not 200"
        );

        // SWAP MUST HAVE FEE

        sqrtPriceLimit = TickMath.getSqrtRatioAtTick(20);
        vm.recordLogs();
        router.swap(key, IPoolManager.SwapParams(false, 100 ether, sqrtPriceLimit));

        logs = vm.getRecordedLogs();

        (amount0, amount1, sqrtPriceX96, liquidity, tick, fee) =
            abi.decode(logs[0].data, (int128, int128, uint160, uint128, int24, uint24));
        console.logString("performed swap");
        console.logInt(amount0);
        console.logInt(amount1);
        console.logUint(sqrtPriceX96);
        console.logUint(liquidity);
        console.logInt(tick);
        console.logUint(fee);
    }

    function testUniversalFactory() public {
        universalHookFactory = new UniversalHookFactory(manager);
        address testAddr = address(uint160(0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF));
        require(_addressStartsWithPrefix(testAddr));
        testAddr = address(uint160(0xFf0000000000000120000000000000010000000F));
        require(_addressStartsWithPrefix(testAddr));
        testAddr = address(uint160(0xAF0000000000000120000000000000010000000F));
        require(!_addressStartsWithPrefix(testAddr));
        testAddr = address(uint160(0xfF00000000000000000000000000000000000000));
        require(_addressStartsWithPrefix(testAddr));

        console.logString("parse bytes");
        console.logBytes32(bytes32(uint256(53)));
    }

    function testBulkPrecomputeAddresses() public {
        universalHookFactory = new UniversalHookFactory(manager);
        uint256 gasUsed = gasleft();
        address[] memory addresses = universalHookFactory.getBulkPrecomputeHookAddresses(0, 390);
        gasUsed = gasUsed - gasleft();
        console.logUint(gasUsed);
    }

    function _addressStartsWithPrefix(address _address) internal view returns (bool) {
        address universalHookAddressPrefix = address(0xff);
        address universalHookAddressPrefixAlt = address(allHooksAddress);

        return uint160(_address) / (2 ** (8 * (19))) == uint160(universalHookAddressPrefix)
            || uint160(_address) / (2 ** (8 * (19))) == uint160(universalHookAddressPrefixAlt);
    }

    function _mintTokensForAllAccounts() internal {
        token0.mint(address(this), 100000 ether);
        token1.mint(address(this), 100000 ether);
        token0.mint(account1, 100000 ether);
        token0.mint(account2, 100000 ether);
        token0.mint(account3, 100000 ether);
        token1.mint(account1, 100000 ether);
        token1.mint(account2, 100000 ether);
        token1.mint(account3, 100000 ether);
    }

    function _approveAllTokensToRouter(address _router) internal {
        token0.approve(_router, type(uint256).max);
        token1.approve(_router, type(uint256).max);

        vm.prank(address(account1));
        token0.approve(_router, type(uint256).max);
        vm.prank(address(account1));
        token1.approve(_router, type(uint256).max);

        vm.prank(address(account2));
        token0.approve(_router, type(uint256).max);
        vm.prank(address(account2));
        token1.approve(_router, type(uint256).max);

        vm.prank(address(account3));
        token0.approve(_router, type(uint256).max);
        vm.prank(address(account3));
        token1.approve(_router, type(uint256).max);
    }

    function printSlot0() internal {
        (uint160 sqrtPriceX96, int24 tick, uint24 protocolFees, uint24 hookFees) = manager.getSlot0(key.toId());

        console.log("variables of this pool");
        console.logUint(sqrtPriceX96);
        console.logInt(tick);
        console.logUint(protocolFees);
        console.logUint(hookFees);
    }

    function printLiquidity() internal {
        uint128 liquidity = manager.getLiquidity(key.toId());
        console.log("liquidity of this pool");
        console.logUint(liquidity);
    }

    function testFork() external {
        vm.createSelectFork("https://base-goerli.g.alchemy.com/v2/JsSsdQeYjg9VZK7Dp2kjAxtFM2Dwa4dv");
        token0 = TestERC20(0x14fC0CB561caE7d22312Bf3A95C0fe6648E366E4);
        token1 = TestERC20(0xE7EC7F742040752b1bd15ED7eb83D2c9762EEDbd);
        universalHook = UniversalHook(0xfCf5AB405d646b3Ba00AD87180Ee8fc848783cc6);
        key = PoolKey(
            Currency.wrap(address(token0)), Currency.wrap(address(token1)), 8391608, 2, IHooks(address(universalHook))
        );

        manager = PoolManager(payable(0x2b7C01904C5D84EEF811d4D557F08edd89016F92));
        router = Router04(payable(0xa469458A8De06c6433407DD9c1e82A18126e451f));
        vm.startPrank(0xDe3089d40F3491De794fBb1ECA109fAc36F889d0);

        // token0.approve(address(router), type(uint256).max);
        // token1.approve(address(router), type(uint256).max);
        // bytes4[] memory selectors = new bytes4[](1);
        // selectors[0] = UniversalHook.user_trading_volume_dynamic_fee.selector;
        // universalHook.setFunctionsForAction(
        //     IUniversalHook.Action.DynamicFee,
        //     selectors
        // );
        // console.log("IMPORTANT");
        // console.logBytes4(selectors[0]);
        // console.logUint(uint8(IUniversalHook.Action.DynamicFee));
        // // add thresholds for swap
        // universalHook.addTradingVolumeDiscountThresholds(
        //     IUniversalHook.TradingVolumeDiscountThreshold(200 ether, 3)
        // );

        // manager.initialize(key, SQRT_RATIO_1_1, bytes(""));

        // // add liquidity ==>  1000 ETH
        // router.modifyPosition(
        //     key,
        //     IPoolManager.ModifyPositionParams(-100000, 100000, 10000 ether)
        // );

        uint160 sqrtPriceLimit = TickMath.getSqrtRatioAtTick(0);
        console.logString("CHECKPOIINT 1 SWAP");
        console.logUint(sqrtPriceLimit);
        vm.recordLogs();
        // swap 100 ETH
        router.swap(key, IPoolManager.SwapParams(false, 100 ether, sqrtPriceLimit));

        Vm.Log[] memory logs = vm.getRecordedLogs();

        (int128 amount0, int128 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick, uint24 fee) =
            abi.decode(logs[0].data, (int128, int128, uint160, uint128, int24, uint24));
        console.logString("performed swap");
        console.logInt(amount0);
        console.logInt(amount1);
        console.logUint(sqrtPriceX96);
        console.logUint(liquidity);
        console.logInt(tick);
        console.logUint(fee);

        // SECOND SWAP - REVERSE

        // sqrtPriceLimit = TickMath.getSqrtRatioAtTick(20);
        // console.logString("Checkpioint 2");
        // console.logUint(sqrtPriceLimit);
        // vm.recordLogs();
        // router.swap(
        //     key,
        //     IPoolManager.SwapParams(false, 100 ether, sqrtPriceLimit)
        // );

        // logs = vm.getRecordedLogs();

        // (amount0, amount1, sqrtPriceX96, liquidity, tick, fee) = abi.decode(
        //     logs[0].data,
        //     (int128, int128, uint160, uint128, int24, uint24)
        // );
        // console.logString("performed swap");
        // console.logInt(amount0);
        // console.logInt(amount1);
        // console.logUint(sqrtPriceX96);
        // console.logUint(liquidity);
        // console.logInt(tick);
        // console.logUint(fee);

        // // SWAP MUST HAVE FEE

        // sqrtPriceLimit = TickMath.getSqrtRatioAtTick(-100);
        // console.logString("Checkpioint 2");
        // console.logUint(sqrtPriceLimit);
        // vm.recordLogs();
        // router.swap(
        //     key,
        //     IPoolManager.SwapParams(true, 100 ether, sqrtPriceLimit)
        // );

        // logs = vm.getRecordedLogs();

        // (amount0, amount1, sqrtPriceX96, liquidity, tick, fee) = abi.decode(
        //     logs[0].data,
        //     (int128, int128, uint160, uint128, int24, uint24)
        // );
        // console.logString("performed swap");
        // console.logInt(amount0);
        // console.logInt(amount1);
        // console.logUint(sqrtPriceX96);
        // console.logUint(liquidity);
        // console.logInt(tick);
        // console.logUint(fee);

        vm.stopPrank();
    }
}
