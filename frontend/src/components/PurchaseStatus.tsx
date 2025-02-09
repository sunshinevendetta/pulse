import React from "react";

interface PurchaseStatusProps {
  status: string;
}

const PurchaseStatus: React.FC<PurchaseStatusProps> = ({ status }) => {
  if (!status) return null; 

  const isSuccess = status.toLowerCase().includes("success");

  return (
    <div
      className={`mt-4 p-4 rounded-xl ${
        isSuccess ? "bg-green-600" : "bg-red-600"
      } text-white text-center font-semibold`}
    >
      {status}
    </div>
  );
};

export default PurchaseStatus;
