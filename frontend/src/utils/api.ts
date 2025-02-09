import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const buyMembership = (recipient: string, tokenId: string) =>
  API.post("/buyMembership", { recipient, tokenId });

export const bookUber = (pickup: string, dropoff: string) =>
  API.post("/bookUber", { pickup, dropoff });
