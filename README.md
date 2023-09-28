# **Scaffold x Uniswap v4**

_Available in Base & Mumbai_

Learn more about [Scaffold](https://github.com/scaffold-eth/scaffold-eth-2) and [Uniswap v4](https://blog.uniswap.org/uniswap-v4).

### TODOs

- more intuitive param parsing in /debug page, specially for complex functions such as `initialize`, `modifyPosition` or `swap`
- add more test coverage to the solidity contracts
- add an interactive UI that shows balances of different pools deployed by a user
- add better logging for addresses

### Objectives

- provide an interface where users can interact with uniswap v4, routers and hooks.
- provide a developer tool that allows users to design new hooks
- provide to users a hook factory a.k.a. hook minter, which mints hooks with the desired flags 0xff and 0xfc
- provide a template testing setup for hooks and uniswap v4

### Usage => _/debug_

1. Go to `UniversalHookFactory` tab and _`deploy`_ your first hook.
2. Copy the hook address and paste it in the address section of `UniversalHook` tab.
3. Start customizing your hook.
4. learn more about [Uniswap v4](https://blog.uniswap.org/uniswap-v4) and start playing with the router.
