import { useState } from "react";
import { bookUber } from "../utils/api";
import PurchaseStatus from "./PurchaseStatus";

export default function UberBookingForm() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    try {
      await bookUber(pickup, dropoff);
      setStatus("Uber ride booked successfully!");
    } catch {
      setStatus("Failed to book Uber ride.");
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-accent">Book Uber Ride</h2>
      <input
        type="text"
        placeholder="Pickup Location (lat,lng)"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-dark text-white border border-accent"
      />
      <input
        type="text"
        placeholder="Dropoff Location (lat,lng)"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-dark text-white border border-accent"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-accent hover:bg-purple-700 text-white py-3 rounded-xl font-semibold"
      >
        Book Ride
      </button>
      <PurchaseStatus status={status} />
    </div>
  );
}
