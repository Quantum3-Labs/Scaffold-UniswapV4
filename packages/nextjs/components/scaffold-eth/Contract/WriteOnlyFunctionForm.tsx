import { useEffect, useState } from "react";
import { Abi, AbiFunction } from "abitype";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Address, TransactionReceipt } from "viem";
import { useContractWrite, useNetwork, useWaitForTransaction } from "wagmi";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import {
  ContractInput,
  IntegerInput,
  TxReceipt,
  getFunctionInputKey,
  getInitialFormState,
  getParsedContractFunctionArgs,
  getParsedError,
} from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";

type WriteOnlyFunctionFormProps = {
  abiFunction: AbiFunction;
  onChange: () => void;
  contractAddress: Address;
};

export const WriteOnlyFunctionForm = ({ abiFunction, onChange, contractAddress }: WriteOnlyFunctionFormProps) => {
  const [form, setForm] = useState<Record<string, any>>(() => getInitialFormState(abiFunction));
  const [txValue, setTxValue] = useState<string | bigint>("");
  const { chain } = useNetwork();
  const writeTxn = useTransactor();
  const currentChain = chain ?? getTargetNetwork();

  const writeDisabled = !currentChain;

  const {
    data: result,
    isLoading,
    writeAsync,
  } = useContractWrite({
    chainId: currentChain.id,
    address: contractAddress,
    functionName: abiFunction.name,
    abi: [abiFunction] as Abi,
    args: getParsedContractFunctionArgs(form),
  });

  const handleWrite = async () => {
    if (writeAsync) {
      try {
        const makeWriteWithParams = () => writeAsync({ value: BigInt(txValue) });
        await writeTxn(makeWriteWithParams);
        onChange();
      } catch (e: any) {
        const message = getParsedError(e);
        notification.error(message);
      }
    }
  };

  const [displayedTxResult, setDisplayedTxResult] = useState<TransactionReceipt>();
  const { data: txResult } = useWaitForTransaction({
    hash: result?.hash,
  });
  useEffect(() => {
    setDisplayedTxResult(txResult);
  }, [txResult]);

  // TODO use `useMemo` to optimize also update in ReadOnlyFunctionForm
  const inputs = abiFunction.inputs.map((input, inputIndex) => {
    const key = getFunctionInputKey(abiFunction.name, input, inputIndex);
    return (
      <ContractInput
        key={key}
        setForm={updatedFormValue => {
          setDisplayedTxResult(undefined);
          setForm(updatedFormValue);
        }}
        form={form}
        stateObjectKey={key}
        paramType={input}
      />
    );
  });
  const zeroInputs = inputs.length === 0 && abiFunction.stateMutability !== "payable";

  //capturing event address

  const getAdressHook = (txResult: TransactionReceipt) => {
    const { logs } = txResult;
    const { data: lastData } = logs[logs.length - 1];
    return lastData.slice(-64);
  };

  return (
    <div className="py-5 space-y-3 first:pt-0 last:pb-1">
      <div className={`flex gap-3 ${zeroInputs ? "flex-row justify-between items-center" : "flex-col"}`}>
        <p className="font-medium my-0 break-words">{abiFunction.name}</p>
        {inputs}
        {abiFunction.stateMutability === "payable" ? (
          <IntegerInput
            value={txValue}
            onChange={updatedTxValue => {
              setDisplayedTxResult(undefined);
              setTxValue(updatedTxValue);
            }}
            placeholder="value (wei)"
          />
        ) : null}
        <div className="flex justify-between gap-2">
          {!zeroInputs && (
            <div className="flex-grow basis-0">
              {displayedTxResult ? (
                <div>
                  {abiFunction.name === "deploy" ? (
                    <div className="overflow-auto bg-secondary overflow-auto bg-secondary rounded rounded-[20px] tex-center mb-[15px] flex items-center p-[7px]">
                      <pre className="text-xs ">{getAdressHook(displayedTxResult)} </pre>
                      <CopyToClipboard text={getAdressHook(displayedTxResult)}>
                        <DocumentDuplicateIcon
                          className="text-xl font-normal text-sky-600 h-5 w-5 cursor-pointer"
                          aria-hidden="true"
                        />
                      </CopyToClipboard>
                    </div>
                  ) : null}

                  <TxReceipt txResult={displayedTxResult} />
                </div>
              ) : null}
            </div>
          )}
          <div
            className={`flex ${
              writeDisabled &&
              "tooltip before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
            }`}
            data-tip={`${writeDisabled && "Wallet not connected or in the wrong network"}`}
          >
            <button className="btn btn-secondary btn-sm" disabled={writeDisabled || isLoading} onClick={handleWrite}>
              {isLoading && <span className="loading loading-spinner loading-xs"></span>}
              Send 💸
            </button>
          </div>
        </div>
      </div>

      {zeroInputs && txResult ? (
        <div className="flex-grow basis-0">
          <TxReceipt txResult={txResult} />
        </div>
      ) : null}
    </div>
  );
};
