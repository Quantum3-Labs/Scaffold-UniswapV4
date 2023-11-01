// import { metaMaskWallet } from "@rainbow-me/rainbowkit/dist/wallets/walletConnectors";
import { createConfig, mainnet } from "wagmi";
import { appChains} from "~~/services/web3/wagmiConnectors";
import  {MetaMaskConnector} from 'wagmi/connectors/metaMask';
// import { goerli, optimism } from "wagmi/dist/chains";

const connector = new MetaMaskConnector({ 
  options: {
    shimDisconnect: true,
    UNSTABLE_shimOnConnectSelectAccount: true,
  }
})

export const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: [connector],
  publicClient: appChains.publicClient,
});
