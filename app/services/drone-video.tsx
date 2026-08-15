"use client";

import { useRef, useState } from "react";

export default function DroneVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const nextMuted = !muted;
    setMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      void videoRef.current.play();
    }
  }

  return (
    <video
      ref={videoRef}
      className="drone-feature__video"
      src="/videos/dronefootage.mp4"
      autoPlay
      loop
      muted={muted}
      playsInline
      preload="metadata"
      tabIndex={0}
      onClick={toggleSound}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleSound();
        }
      }}
      aria-label={muted ? "Afspil dronevideo med lyd" : "Slå lyden fra på dronevideoen"}
    />
  );
}