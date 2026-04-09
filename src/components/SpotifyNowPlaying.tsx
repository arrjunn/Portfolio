"use client";

import { motion } from "framer-motion";

// Static vibes — no Spotify Premium needed
// To customize: change the song/artist, or link to your Spotify profile/playlist
const vibes = {
  title: "Lo-fi Beats",
  artist: "Coding Playlist",
  spotifyUrl: "https://open.spotify.com/",
};

export default function SpotifyNowPlaying() {
  return (
    <a
      href={vibes.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-tertiary/50 border border-border-subtle w-fit hover:border-border-hover transition-all duration-200"
    >
      {/* Animated bars */}
      <div className="flex gap-[2px] items-end h-3">
        {[0.6, 1, 0.4, 0.8, 0.5].map((h, i) => (
          <motion.div
            key={i}
            className="w-[3px] bg-accent-green rounded-full"
            animate={{
              height: [`${h * 12}px`, `${h * 4}px`, `${h * 12}px`],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8 + i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="text-xs">
        <p className="text-text-primary font-medium">{vibes.title}</p>
        <p className="text-text-tertiary">{vibes.artist}</p>
      </div>
    </a>
  );
}
