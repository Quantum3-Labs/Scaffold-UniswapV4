// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {UniversalHookFactory} from "../contracts/UniversalHookFactory.sol";
import {UniversalHook} from "../contracts/UniversalHook.sol";
import {PoolManager} from "../contracts/v4-core/PoolManager.sol";
import {Test, console} from "forge-std/Test.sol";

contract UniversalHookFactoryTest is Test {
    UniversalHookFactory factory;

    address randAddr = vm.addr(1);
    address owner = vm.addr(2);

    function setUp() public {
        factory = new UniversalHookFactory(PoolManager(payable(randAddr)));
    }

    // test all functions for hackathon PoC
    function testDeployNewHooks() public {
        console.log(block.timestamp);
        vm.startPrank(owner);
        skip(1 days);
        console.log(block.timestamp);
        vm.expectRevert("Invalid address");
        factory.deploy(1, "TestHook", "TST");

        uint256 lastNonce = factory.lastNonce();

        address[] memory listOfAddresses = factory
            .getBulkPrecomputeHookAddresses(lastNonce, 1000);
        uint256 index;
        for (uint256 i = 0; i < listOfAddresses.length; i++) {
            if (bytes1(bytes20(listOfAddresses[i])) == 0xff) {
                index = i;
                break;
            }
        }

        // deploy a hook with that nonce
        address newHook = factory.deploy(index, "TestHook", "TST");
        require(newHook != address(0), "Invalid address");

        // try to use it again
        vm.expectRevert("nonce has already been used");
        factory.deploy(index, "TestHook", "TST");

        require(index == factory.lastNonce(), "Invalid nonce");

        // check hookInfo
        UniversalHookFactory.Hook memory hookInfo = factory.getHookInfo(1);
        require(hookInfo.owner == owner, "Invalid owner");
        require(hookInfo.hookAddr == newHook, "Invalid hook address");
        require(
            keccak256(bytes(hookInfo.name)) == keccak256(bytes("TestHook")),
            "Invalid name"
        );
        require(
            keccak256(bytes(hookInfo.symbol)) == keccak256(bytes("TST")),
            "Invalid symbol"
        );
        require(
            hookInfo.creationTime == block.timestamp,
            "Invalid creation time"
        );

        // check owner of the hook
        UniversalHook(newHook).transferOwnership(randAddr);
        require(UniversalHook(newHook).owner() == randAddr, "Invalid owner");
    }
}
