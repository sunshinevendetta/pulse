"use client";
import React, { useState } from "react";
import { getUserProfileFromGaia, getFestivalDataFromGaia } from "../utils/api";

const UserProfile = () => {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [profile, setProfile] = useState<any>(null);
  const [festivalData, setFestivalData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchProfile = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getUserProfileFromGaia(spotifyToken);
      setProfile(data);
    } catch (err) {
      setError("Failed to fetch profile. Please check your Spotify token.");
    } finally {
      setLoading(false);
    }
  };

  const handleFetchFestivalData = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getFestivalDataFromGaia();
      setFestivalData(data);
    } catch (err) {
      setError("Failed to fetch festival data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">🎵 Gaia User Profile</h2>
      <input
        type="text"
        placeholder="Enter Spotify Token"
        value={spotifyToken}
        onChange={(e) => setSpotifyToken(e.target.value)}
        className="w-full p-2 mb-4 text-black rounded"
      />
      <button
        onClick={handleFetchProfile}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Profile"}
      </button>

      <button
        onClick={handleFetchFestivalData}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full mt-2"
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Festival Data"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {profile && (
        <div className="mt-4 bg-gray-700 p-4 rounded">
          <h3 className="text-xl font-semibold">Hello, {profile.name}!</h3>
          <p>Email: {profile.email}</p>
          <p>Favorite Artist: {profile.favoriteArtist}</p>
          <p>Recent Activity: {profile.recentActivity}</p>
        </div>
      )}

      {festivalData && (
        <div className="mt-4 bg-gray-700 p-4 rounded">
          <h3 className="text-xl font-semibold">🎤 Festival Info:</h3>
          <p>Name: {festivalData.name}</p>
          <p>Date: {festivalData.date}</p>
          <p>Location: {festivalData.location}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
