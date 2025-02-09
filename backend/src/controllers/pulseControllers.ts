import { Router, Request, Response } from "express";
import { authenticate, buyMembership, bookUberRide } from "../services/pulseaiAgent";
import { getUserProfile, getFestivalData } from "../services/gaiaService";

const router = Router();
let wallet: any; 

(async () => {
  wallet = await authenticate();
})();

// Membership Purchase - Coinbase
router.post("/buyMembership", async (req: Request, res: Response) => {
  try {
    const { recipient, tokenId } = req.body;
    await buyMembership(wallet, recipient, tokenId);
    res.json({ message: "Membership purchased successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to purchase membership." });
  }
});

// Uber Ride Booking - Coinbase
router.post("/bookUber", async (req: Request, res: Response) => {
  try {
    const { pickup, dropoff } = req.body;
    await bookUberRide(pickup, dropoff);
    res.json({ message: "Uber ride booked successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to book Uber ride." });
  }
});

// Gaia: Fetch User Profile (Spotify Integration)
router.post("/profile", async (req: Request, res: Response) => {
  try {
    const { spotifyToken } = req.body;
    const profile = await getUserProfile(spotifyToken);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile." });
  }
});

// Gaia: Fetch Festival Data
router.get("/festival", async (_req: Request, res: Response) => {
  try {
    const festivalData = await getFestivalData();
    res.json(festivalData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch festival data." });
  }
});

export default router;
