import { log } from "console";
import type { NextPage } from "next";
// import { disconnect } from "process";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance, useBlockNumber, useContractEvent} from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";



const ExampleUI: NextPage = () => {

  const { data: cahinData, connect, connectors, connectAsync } = useConnect();
  const { address, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({address: address});
  const {data: blockNumber} = useBlockNumber({chainId: 5});
  const [balance, setBalance] = useState(true);
  const {data: hookD , isLoading} = useScaffoldContract({contractName : "UniversalHookFactory"})
  useContractEvent({
    address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    abi: [1],
    eventName: 'HookCreated',
    listener(log) {
      console.log(log)
    },
  })

  // console.log(event)
//  for (const connector of connectors) {
//   console.log(connector.ready)
//  }


  
// console.log(cahinData?.chain.id)
// console.log(cahinData?.chain.unsupported)
//   console.log(connectAsync)


  // console.log(address)
  // console.log(connectors)
  // console.log(pendingConnector)
  // console.log(isDisconnected)
  // console.log(data)
 
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
        <button onClick={() => (connect({connector}))} key={connector.id}>
          {!cahinData?.chain.unsupported ? `connect wallet with ${connector.name}` : 'wrong chain'}
          </button>))) : 
        (<div>
        <button onClick={handledisconnect}>Disconnect</button>
        <p>{address}</p>
        <p>balance : {data?.formatted} {data?.symbol}</p>
        <div>
        {!isDisconnected && <button onClick={handleBalance}>click here to see ur balacnce</button>}
        {balance && <p>{data?.formatted}</p>}
        </div>
        </div>)}
       
        
        <ContractInteraction />
        <ContractData />
      </div> 
    </>
  );
};

export default ExampleUI;
