import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const GAIA_API_URL = process.env.GAIA_API_URL || "https://api.gaianet.ai";

// Authenticate with Gaia if needed (optional based on API)
async function getUserProfile(spotifyToken: string) {
  try {
    const response = await axios.post(`${GAIA_API_URL}/profile`, {
      token: spotifyToken,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Gaia User Profile Error:", error);
    throw new Error("Failed to fetch user profile from Gaia.");
  }
}

async function getFestivalData() {
  try {
    const response = await axios.get(`${GAIA_API_URL}/festival`);
    return response.data;
  } catch (error) {
    console.error("❌ Gaia Festival Data Error:", error);
    throw new Error("Failed to fetch festival data from Gaia.");
  }
}

export { getUserProfile, getFestivalData };
