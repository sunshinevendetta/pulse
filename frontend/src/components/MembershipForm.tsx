import { useState } from "react";
import { buyMembership } from "../utils/api";
import PurchaseStatus from "./PurchaseStatus";

export default function MembershipForm() {
  const [recipient, setRecipient] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    try {
      await buyMembership(recipient, tokenId);
      setStatus("Membership purchased successfully!");
    } catch {
      setStatus("Failed to purchase membership.");
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-accent">Buy Membership</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-dark text-white border border-accent"
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-dark text-white border border-accent"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-accent hover:bg-purple-700 text-white py-3 rounded-xl font-semibold"
      >
        Purchase Membership
      </button>
      <PurchaseStatus status={status} />
    </div>
  );
}
