// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import {IPoolManager} from "./v4-core/interfaces/IPoolManager.sol";
import {UniversalHook} from "./UniversalHook.sol";
import {Ownable} from "openzeppelin-contracts/access/Ownable.sol";
import {EnumerableSet} from "openzeppelin-contracts/utils/structs/EnumerableSet.sol";

interface IOwnable {
    function transferOwnership(address newOwner) external;
}

contract UniversalHookFactory is Ownable {
    struct Hook {
        address owner;
        address hookAddr;
        string name;
        string symbol;
        uint256 creationTime;
    }
    event HookCreated(Hook hook);

    IPoolManager public immutable manager;
    mapping(uint256 => bool) public usedNonces;
    mapping(uint256 => Hook) public deployedHooks;
    uint256 public lastNonce;
    uint256 public hookCount;

    constructor(IPoolManager _manager) {
        manager = _manager;
    }

    // use next available salt
    function deploy(
        uint256 nonce,
        string memory name,
        string memory symbol
    ) external returns (address contractDeployed) {
        require(!usedNonces[nonce], "nonce has already been used");
        address precomputedAddr = getPrecomputedHookAddress(nonce);
        require(bytes1(bytes20(precomputedAddr)) == 0xff, "Invalid address");
        usedNonces[nonce] = true;
        lastNonce = uint256(nonce);
        contractDeployed = address(
            new UniversalHook{salt: bytes32(nonce)}(manager)
        );
        IOwnable(contractDeployed).transferOwnership(msg.sender);
        hookCount++;
        Hook memory newHook = Hook({
            owner: msg.sender,
            hookAddr: contractDeployed,
            name: name,
            symbol: symbol,
            creationTime: block.timestamp
        });
        deployedHooks[hookCount] = newHook;
        emit HookCreated(newHook);
    }

    function getBulkPrecomputeHookAddresses(
        uint256 startNonce,
        uint256 endNonce
    ) external view returns (address[] memory addresses) {
        addresses = new address[](endNonce - startNonce);
        for (uint256 i = startNonce; i < endNonce; i++) {
            addresses[i - startNonce] = getPrecomputedHookAddress(i);
        }
    }

    function getPrecomputedHookAddress(
        uint256 nonce
    ) public view returns (address) {
        bytes32 bytecodeHash = keccak256(
            abi.encodePacked(
                type(UniversalHook).creationCode,
                abi.encode(manager)
            )
        );
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                bytes32(nonce),
                bytecodeHash
            )
        );
        return address(uint160(uint256(hash)));
    }

    function getHookInfo(
        uint256 hookId
    ) external view returns (Hook memory hook) {
        return deployedHooks[hookId];
    }
}
