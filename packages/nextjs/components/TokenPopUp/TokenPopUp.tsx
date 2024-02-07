import React, { useState } from "react";
import ApproveTokenForm from "~~/components/TokenPopUp/ApproveTokenForm";
import TransferTokenForm from "~~/components/TokenPopUp/TransferTokenForm";

export enum ModalStep {
  Approve = "approve",
  Transfer = "transfer",
}

interface TokenPopUpProps {
  startStep: ModalStep;
}

const TokenPopUp: React.FC<TokenPopUpProps> = ({ startStep }) => {
  const [currentStep, setCurrentStep] = useState(startStep);

  const handleApprove = () => {
    setCurrentStep(ModalStep.Transfer);
  };

  if (currentStep === ModalStep.Approve) {
    return <ApproveTokenForm onApprove={handleApprove} />;
  } else {
    return <TransferTokenForm onTransfer={() => {}} />;
  }
};

export default TokenPopUp;
