// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import {UniversalHookFactory} from "../contracts/UniversalHookFactory.sol";
// import {PoolManager} from "../contracts/v4-core/PoolManager.sol";
// import {Test, console} from "forge-std/Test.sol";

// contract UniversalHookFactoryTest is Test {
//     UniversalHookFactory factory;

//     address randAccount = vm.addr(1);

//     function setUp() public {
//         factory = new UniversalHookFactory(PoolManager(payable(randAccount)));
//         factory.setHashedKey(keccak256(bytes("ETH-NYC")));
//     }

//     // test all functions for hackathon PoC
//     function testAllImportantFunctions() public {
//         uint256[] memory availableSalts = new uint256[](34);
//         for (uint256 i = 0; i < 34; i++) {
//             availableSalts[i] = i;
//         }
//         factory.addSalts(availableSalts);
//         bytes32[] memory salts = factory.getAvailableSalts();
//         assertEq(salts.length, 34);
//         for (uint256 i = 0; i < 34; i++) {
//             assertEq(salts[i], bytes32(i));
//         }

//         salts = factory.getAvailableSalts();
//         assertEq(salts.length, 33);
//         require(salts[0] == bytes32(availableSalts[33]));
//         for (uint256 i = 0; i < 33; i++) {}

//         salts = factory.getAvailableSalts();
//         assertEq(salts.length, 0);

//         vm.expectRevert("No salts available");
//     }
// }
