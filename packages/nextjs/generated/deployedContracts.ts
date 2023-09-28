const contracts = {
  5: [
    {
      name: "Goerli",
      chainId: "5",
      contracts: {
        currency0: {
          address: "0x6c7aC0Ad807F881332E326dAA8e5e184c96c5ecC",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        currency1: {
          address: "0xC4ecF0712154c97069d05E74e9f41a4A551bf7Cd",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        PoolManager: {
          address: "0x963663a86D85903A0A95079dFa1EdF21D812B8Fb",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "controllerGasLimit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "CannotUpdateEmptyPosition",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrenciesInitializedOutOfOrder",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrencyNotSettled",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "FeeTooLarge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "HookAddressNotValid",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCaller",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidHookResponse",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSqrtRatio",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTick",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              name: "LockedBy",
              type: "error",
            },
            {
              inputs: [],
              name: "MaxCurrenciesTouched",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPoolManagerToken",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolAlreadyInitialized",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolNotInitialized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitAlreadyExceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitOutOfBounds",
              type: "error",
            },
            {
              inputs: [],
              name: "ProtocolFeeCannotBeFetched",
              type: "error",
            },
            {
              inputs: [],
              name: "SwapAmountCannotBeZero",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              name: "TickLiquidityOverflow",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
              ],
              name: "TickLowerOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
              ],
              name: "TickMisaligned",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooLarge",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooSmall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TickUpperOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TicksMisordered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              name: "HookFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency0",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "contract IHooks",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "Initialize",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int256",
                  name: "liquidityDelta",
                  type: "int256",
                },
              ],
              name: "ModifyPosition",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "protocolFeeController",
                  type: "address",
                },
              ],
              name: "ProtocolFeeControllerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
              ],
              name: "ProtocolFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount0",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount1",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  indexed: false,
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              name: "Swap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [],
              name: "MAX_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectHookFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectProtocolFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "currencyDelta",
              outputs: [
                {
                  internalType: "int256",
                  name: "currencyDelta",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "i",
                  type: "uint256",
                },
              ],
              name: "getLock",
              outputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getPosition",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint128",
                      name: "liquidity",
                      type: "uint128",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Position.Info",
                  name: "position",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSlot0",
              outputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hookAddress",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "hookFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "initialize",
              outputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lock",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockData",
              outputs: [
                {
                  internalType: "uint128",
                  name: "length",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "nonzeroDeltaCount",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "pools",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint160",
                      name: "sqrtPriceX96",
                      type: "uint160",
                    },
                    {
                      internalType: "int24",
                      name: "tick",
                      type: "int24",
                    },
                    {
                      internalType: "uint24",
                      name: "protocolFees",
                      type: "uint24",
                    },
                    {
                      internalType: "uint24",
                      name: "hookFees",
                      type: "uint24",
                    },
                  ],
                  internalType: "struct Pool.Slot0",
                  name: "slot0",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "protocolFeeController",
              outputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "protocolFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "reservesOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setHookFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "controller",
                  type: "address",
                },
              ],
              name: "setProtocolFeeController",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setProtocolFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "settle",
              outputs: [
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "take",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        UniversalHookFactory: {
          address: "0x7a2c9B5fEe2d67f76556F799b55651863D973014",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "hookAddr",
                  type: "address",
                },
              ],
              name: "HookCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256[]",
                  name: "saltsUints",
                  type: "uint256[]",
                },
              ],
              name: "addSalts",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "availableSalts",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
              ],
              name: "deploy",
              outputs: [
                {
                  internalType: "address",
                  name: "contractDeployed",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAvailableSalts",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "end",
                  type: "uint256",
                },
              ],
              name: "getBulkPrecomputeHookAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
              ],
              name: "getPrecomputedHookAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hashedKey",
                  type: "bytes32",
                },
              ],
              name: "setHashedKey",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Router04: {
          address: "0xa11d3F9d306305886c84A39EA3cFdc84cEACDf23",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "LockFailure",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lockAcquired",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "int24",
                          name: "tickLower",
                          type: "int24",
                        },
                        {
                          internalType: "int24",
                          name: "tickUpper",
                          type: "int24",
                        },
                        {
                          internalType: "int256",
                          name: "liquidityDelta",
                          type: "int256",
                        },
                      ],
                      internalType: "struct IPoolManager.ModifyPositionParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataModifyPosition",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredModifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "zeroForOne",
                          type: "bool",
                        },
                        {
                          internalType: "int256",
                          name: "amountSpecified",
                          type: "int256",
                        },
                        {
                          internalType: "uint160",
                          name: "sqrtPriceLimitX96",
                          type: "uint160",
                        },
                      ],
                      internalType: "struct IPoolManager.SwapParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataSwap",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredSwap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        UniversalHook: {
          address: "0x775938C3af38f634cd9d3e2CB96e073920ff9eF9",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "FunctionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              name: "InvalidFee",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "volume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8",
                      name: "discountPts",
                      type: "uint8",
                    },
                  ],
                  internalType:
                    "struct IUniversalHook.TradingVolumeDiscountThreshold",
                  name: "_tradingVolumeDiscountThreshold",
                  type: "tuple",
                },
              ],
              name: "addTradingVolumeDiscountThresholds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "clearTradingVolumeDiscountThresholds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "day_of_the_week_before_swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getFee",
              outputs: [
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "getHookFees",
              outputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "PoolId",
                  name: "poolId",
                  type: "bytes32",
                },
              ],
              name: "getUserTradingVolumeByPool",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "not_blacklisted_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "only_owner_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bool[8]",
                  name: "allowedDaysOfTheWeek",
                  type: "bool[8]",
                },
              ],
              name: "setAllowedDaysOfTheWeek",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "blacklisted",
                  type: "bool",
                },
              ],
              name: "setBlacklistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functions",
                  type: "bytes4[]",
                },
              ],
              name: "setFunctionsForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFeeForPool",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_tradingHoursStart",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "_tradingHoursEnd",
                  type: "uint8",
                },
              ],
              name: "setTradingHours",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "whitelisted",
                  type: "bool",
                },
              ],
              name: "setWhitelistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "trading_hours_before_Swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "user_trading_volume_dynamic_fee",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      name: "Polygon Mumbai",
      chainId: "80001",
      contracts: {
        currency1: {
          address: "0xdC50679b9F25FE378d8Cfab010Eb1B2a56f62b87",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        currency0: {
          address: "0x33306F824823E15CFc2AD6e8cCb26011B30e6190",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        PoolManager: {
          address: "0xeb6b1e93f474419423D3c9C75f65DcB1705231E9",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "controllerGasLimit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "CannotUpdateEmptyPosition",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrenciesInitializedOutOfOrder",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrencyNotSettled",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "FeeTooLarge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "HookAddressNotValid",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCaller",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidHookResponse",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSqrtRatio",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTick",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              name: "LockedBy",
              type: "error",
            },
            {
              inputs: [],
              name: "MaxCurrenciesTouched",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPoolManagerToken",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolAlreadyInitialized",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolNotInitialized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitAlreadyExceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitOutOfBounds",
              type: "error",
            },
            {
              inputs: [],
              name: "ProtocolFeeCannotBeFetched",
              type: "error",
            },
            {
              inputs: [],
              name: "SwapAmountCannotBeZero",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              name: "TickLiquidityOverflow",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
              ],
              name: "TickLowerOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
              ],
              name: "TickMisaligned",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooLarge",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooSmall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TickUpperOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TicksMisordered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              name: "HookFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency0",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "contract IHooks",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "Initialize",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int256",
                  name: "liquidityDelta",
                  type: "int256",
                },
              ],
              name: "ModifyPosition",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "protocolFeeController",
                  type: "address",
                },
              ],
              name: "ProtocolFeeControllerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
              ],
              name: "ProtocolFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount0",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount1",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  indexed: false,
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              name: "Swap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [],
              name: "MAX_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectHookFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectProtocolFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "currencyDelta",
              outputs: [
                {
                  internalType: "int256",
                  name: "currencyDelta",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "i",
                  type: "uint256",
                },
              ],
              name: "getLock",
              outputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getPosition",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint128",
                      name: "liquidity",
                      type: "uint128",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Position.Info",
                  name: "position",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSlot0",
              outputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hookAddress",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "hookFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "initialize",
              outputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lock",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockData",
              outputs: [
                {
                  internalType: "uint128",
                  name: "length",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "nonzeroDeltaCount",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "pools",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint160",
                      name: "sqrtPriceX96",
                      type: "uint160",
                    },
                    {
                      internalType: "int24",
                      name: "tick",
                      type: "int24",
                    },
                    {
                      internalType: "uint24",
                      name: "protocolFees",
                      type: "uint24",
                    },
                    {
                      internalType: "uint24",
                      name: "hookFees",
                      type: "uint24",
                    },
                  ],
                  internalType: "struct Pool.Slot0",
                  name: "slot0",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "protocolFeeController",
              outputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "protocolFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "reservesOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setHookFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "controller",
                  type: "address",
                },
              ],
              name: "setProtocolFeeController",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setProtocolFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "settle",
              outputs: [
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "take",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        UniversalHookFactory: {
          address: "0x8b19D244210eE0d0031cCa1E566F2d771228144c",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "hookAddr",
                  type: "address",
                },
              ],
              name: "HookCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256[]",
                  name: "saltsUints",
                  type: "uint256[]",
                },
              ],
              name: "addSalts",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "availableSalts",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
              ],
              name: "deploy",
              outputs: [
                {
                  internalType: "address",
                  name: "contractDeployed",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAvailableSalts",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "end",
                  type: "uint256",
                },
              ],
              name: "getBulkPrecomputeHookAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
              ],
              name: "getPrecomputedHookAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hashedKey",
                  type: "bytes32",
                },
              ],
              name: "setHashedKey",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Router04: {
          address: "0x10f87094277E283F13fc4dd49C17767734ef40E8",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "LockFailure",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lockAcquired",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "int24",
                          name: "tickLower",
                          type: "int24",
                        },
                        {
                          internalType: "int24",
                          name: "tickUpper",
                          type: "int24",
                        },
                        {
                          internalType: "int256",
                          name: "liquidityDelta",
                          type: "int256",
                        },
                      ],
                      internalType: "struct IPoolManager.ModifyPositionParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataModifyPosition",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredModifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "zeroForOne",
                          type: "bool",
                        },
                        {
                          internalType: "int256",
                          name: "amountSpecified",
                          type: "int256",
                        },
                        {
                          internalType: "uint160",
                          name: "sqrtPriceLimitX96",
                          type: "uint160",
                        },
                      ],
                      internalType: "struct IPoolManager.SwapParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataSwap",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredSwap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        UniversalHook: {
          address: "0xEd1185c8a36EA1eAE169fEFa755259E67fE0B7A6",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "FunctionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              name: "InvalidFee",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "volume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8",
                      name: "discountPts",
                      type: "uint8",
                    },
                  ],
                  internalType:
                    "struct IUniversalHook.TradingVolumeDiscountThreshold",
                  name: "_tradingVolumeDiscountThreshold",
                  type: "tuple",
                },
              ],
              name: "addTradingVolumeDiscountThresholds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "clearTradingVolumeDiscountThresholds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "day_of_the_week_before_swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getFee",
              outputs: [
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "getHookFees",
              outputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "PoolId",
                  name: "poolId",
                  type: "bytes32",
                },
              ],
              name: "getUserTradingVolumeByPool",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "not_blacklisted_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "only_owner_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bool[8]",
                  name: "allowedDaysOfTheWeek",
                  type: "bool[8]",
                },
              ],
              name: "setAllowedDaysOfTheWeek",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "blacklisted",
                  type: "bool",
                },
              ],
              name: "setBlacklistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functions",
                  type: "bytes4[]",
                },
              ],
              name: "setFunctionsForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFeeForPool",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_tradingHoursStart",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "_tradingHoursEnd",
                  type: "uint8",
                },
              ],
              name: "setTradingHours",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "whitelisted",
                  type: "bool",
                },
              ],
              name: "setWhitelistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "trading_hours_before_Swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "user_trading_volume_dynamic_fee",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  84531: [
    {
      name: "Base Goerli",
      chainId: "84531",
      contracts: {
        currency1: {
          address: "0xE61E0d7d13E79ba5950520B4b587aEFd0023A0b8",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        currency0: {
          address: "0xbC21eaE18eAd4f168F2A5646Ae16c2a8988860Bc",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "amountToMint",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forceApprove",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "nonces",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "permit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        PoolManager: {
          address: "0x8d48c62d029e082F0376f5Be47A8d8096eE8856b",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "controllerGasLimit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "CannotUpdateEmptyPosition",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrenciesInitializedOutOfOrder",
              type: "error",
            },
            {
              inputs: [],
              name: "CurrencyNotSettled",
              type: "error",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "FeeTooLarge",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "HookAddressNotValid",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidCaller",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidHookResponse",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSqrtRatio",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidTick",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              name: "LockedBy",
              type: "error",
            },
            {
              inputs: [],
              name: "MaxCurrenciesTouched",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPoolManagerToken",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolAlreadyInitialized",
              type: "error",
            },
            {
              inputs: [],
              name: "PoolNotInitialized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitAlreadyExceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              name: "PriceLimitOutOfBounds",
              type: "error",
            },
            {
              inputs: [],
              name: "ProtocolFeeCannotBeFetched",
              type: "error",
            },
            {
              inputs: [],
              name: "SwapAmountCannotBeZero",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              name: "TickLiquidityOverflow",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
              ],
              name: "TickLowerOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
              ],
              name: "TickMisaligned",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooLarge",
              type: "error",
            },
            {
              inputs: [],
              name: "TickSpacingTooSmall",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TickUpperOutOfBounds",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "TicksMisordered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              name: "HookFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency0",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "Currency",
                  name: "currency1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "contract IHooks",
                  name: "hooks",
                  type: "address",
                },
              ],
              name: "Initialize",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "int256",
                  name: "liquidityDelta",
                  type: "int256",
                },
              ],
              name: "ModifyPosition",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "oldOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnerChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "protocolFeeController",
                  type: "address",
                },
              ],
              name: "ProtocolFeeControllerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
              ],
              name: "ProtocolFeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount0",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "int128",
                  name: "amount1",
                  type: "int128",
                },
                {
                  indexed: false,
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  indexed: false,
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
                {
                  indexed: false,
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  indexed: false,
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              name: "Swap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "TransferBatch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "TransferSingle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "value",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "URI",
              type: "event",
            },
            {
              inputs: [],
              name: "MAX_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MIN_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "accounts",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
              ],
              name: "balanceOfBatch",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectHookFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "collectProtocolFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "currencyDelta",
              outputs: [
                {
                  internalType: "int256",
                  name: "currencyDelta",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "i",
                  type: "uint256",
                },
              ],
              name: "getLock",
              outputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              name: "getPosition",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint128",
                      name: "liquidity",
                      type: "uint128",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Position.Info",
                  name: "position",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSlot0",
              outputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "uint24",
                  name: "protocolFees",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "hookFees",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hookAddress",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "hookFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "initialize",
              outputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lock",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockData",
              outputs: [
                {
                  internalType: "uint128",
                  name: "length",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "nonzeroDeltaCount",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "pools",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint160",
                      name: "sqrtPriceX96",
                      type: "uint160",
                    },
                    {
                      internalType: "int24",
                      name: "tick",
                      type: "int24",
                    },
                    {
                      internalType: "uint24",
                      name: "protocolFees",
                      type: "uint24",
                    },
                    {
                      internalType: "uint24",
                      name: "hookFees",
                      type: "uint24",
                    },
                  ],
                  internalType: "struct Pool.Slot0",
                  name: "slot0",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "protocolFeeController",
              outputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "protocolFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "reservesOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "ids",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeBatchTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setHookFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "setOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "controller",
                  type: "address",
                },
              ],
              name: "setProtocolFeeController",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "setProtocolFees",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              name: "settle",
              outputs: [
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "take",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uri",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        UniversalHookFactory: {
          address: "0x04a13EE89c34e630117fFc778f66df280D1f9401",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "hookAddr",
                  type: "address",
                },
              ],
              name: "HookCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256[]",
                  name: "saltsUints",
                  type: "uint256[]",
                },
              ],
              name: "addSalts",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "availableSalts",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
              ],
              name: "deploy",
              outputs: [
                {
                  internalType: "address",
                  name: "contractDeployed",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAvailableSalts",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "start",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "end",
                  type: "uint256",
                },
              ],
              name: "getBulkPrecomputeHookAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
              ],
              name: "getPrecomputedHookAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_hashedKey",
                  type: "bytes32",
                },
              ],
              name: "setHashedKey",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Router04: {
          address: "0x302f875A11edFA1c90c86A4bD877Dbc7C4040BF9",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC20TransferFailed",
              type: "error",
            },
            {
              inputs: [],
              name: "LockFailure",
              type: "error",
            },
            {
              inputs: [],
              name: "NativeTransferFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "lockAcquired",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "int24",
                          name: "tickLower",
                          type: "int24",
                        },
                        {
                          internalType: "int24",
                          name: "tickUpper",
                          type: "int24",
                        },
                        {
                          internalType: "int256",
                          name: "liquidityDelta",
                          type: "int256",
                        },
                      ],
                      internalType: "struct IPoolManager.ModifyPositionParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataModifyPosition",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredModifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "Currency",
                          name: "currency0",
                          type: "address",
                        },
                        {
                          internalType: "Currency",
                          name: "currency1",
                          type: "address",
                        },
                        {
                          internalType: "uint24",
                          name: "fee",
                          type: "uint24",
                        },
                        {
                          internalType: "int24",
                          name: "tickSpacing",
                          type: "int24",
                        },
                        {
                          internalType: "contract IHooks",
                          name: "hooks",
                          type: "address",
                        },
                      ],
                      internalType: "struct PoolKey",
                      name: "key",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "zeroForOne",
                          type: "bool",
                        },
                        {
                          internalType: "int256",
                          name: "amountSpecified",
                          type: "int256",
                        },
                        {
                          internalType: "uint160",
                          name: "sqrtPriceLimitX96",
                          type: "uint160",
                        },
                      ],
                      internalType: "struct IPoolManager.SwapParams",
                      name: "params",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Router04.CallbackDataSwap",
                  name: "data",
                  type: "tuple",
                },
              ],
              name: "lockAcquiredSwap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "modifyPosition",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        UniversalHook: {
          address: "0x3DD9c81dc05c2a5a7a6F75aCCee0e671EE353Ef9",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "_manager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "",
                  type: "uint8",
                },
              ],
              name: "FunctionFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              name: "InvalidFee",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "volume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8",
                      name: "discountPts",
                      type: "uint8",
                    },
                  ],
                  internalType:
                    "struct IUniversalHook.TradingVolumeDiscountThreshold",
                  name: "_tradingVolumeDiscountThreshold",
                  type: "tuple",
                },
              ],
              name: "addTradingVolumeDiscountThresholds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "afterSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                  internalType: "struct IPoolManager.ModifyPositionParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeModifyPosition",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              name: "beforeSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "clearTradingVolumeDiscountThresholds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "day_of_the_week_before_swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                  internalType: "struct IPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "getFee",
              outputs: [
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
              ],
              name: "getHookFees",
              outputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "PoolId",
                  name: "poolId",
                  type: "bytes32",
                },
              ],
              name: "getUserTradingVolumeByPool",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "manager",
              outputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "not_blacklisted_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "only_owner_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bool[8]",
                  name: "allowedDaysOfTheWeek",
                  type: "bool[8]",
                },
              ],
              name: "setAllowedDaysOfTheWeek",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "blacklisted",
                  type: "bool",
                },
              ],
              name: "setBlacklistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functions",
                  type: "bytes4[]",
                },
              ],
              name: "setFunctionsForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "int24",
                      name: "tickSpacing",
                      type: "int24",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                  ],
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                },
                {
                  internalType: "uint24",
                  name: "hookFee",
                  type: "uint24",
                },
              ],
              name: "setHookFeeForPool",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_tradingHoursStart",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "_tradingHoursEnd",
                  type: "uint8",
                },
              ],
              name: "setTradingHours",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "enum IUniversalHook.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bool",
                  name: "whitelisted",
                  type: "bool",
                },
              ],
              name: "setWhitelistedForAction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "trading_hours_before_Swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "user_trading_volume_dynamic_fee",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_before_initialize",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "whitelist_swap",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
