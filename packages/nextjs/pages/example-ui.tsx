import type { NextPage } from "next";
// import { disconnect } from "process";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance} from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";



const ExampleUI: NextPage = () => {

  const { connect, connectors, pendingConnector } = useConnect();
  const { address, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({address: address});
  const [balance, setBalance] = useState(true);

  console.log(address)
  console.log(connectors)
  console.log(pendingConnector)
  console.log(isDisconnected)
  console.log(data)
 
  // if (isConnecting) return <div>Connecting…</div>
  // if (isDisconnected) return console.log("disconected")
  // return <div>{address}</div>
const handledisconnect =  () => {
  disconnect()
}

const handleBalance = () => {
  setBalance(((prev) => !prev))
}

  
  return (
    <>
      <MetaHeader
        title="Example UI | Scaffold-ETH 2"
        description="Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features."
      >

        
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
        
        {isDisconnected ? (connectors.map((connector) => (
        <button onClick={() => (connect({connector}))} key={connector.id}>connect wallet with metamask {connector.name}</button>))) : 
        (<div><button onClick={handledisconnect}>Disconnect</button>
        <p>{address}</p>
        <p>balance : {data?.formatted} {data?.symbol}</p>
        </div>)}
       
        {!isDisconnected && <button onClick={handleBalance}>click here to see ur balacnce</button>}
        {balance && <p>{data?.formatted}</p>}
        
        <ContractInteraction />
        <ContractData />
      </div>
    </>
  );
};

export default ExampleUI;
