"use client";

import { useRef, useState } from "react";

type Reel = {
  id: number;
  src: string;
};

const reels: Reel[] = [
  { id: 1, src: "/videos/reel-01.mp4" },
  { id: 2, src: "/videos/reel-02.mp4" },
];

export default function ReelStack() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [soundOnId, setSoundOnId] = useState<number | null>(null);
  const videoRefs = useRef(new Map<number, HTMLVideoElement>());

  const pauseAllExcept = (id: number) => {
    videoRefs.current.forEach((video, reelId) => {
      if (reelId !== id) video.pause();
    });
  };

  const playReel = (id: number) => {
    const video = videoRefs.current.get(id);
    if (!video) return;

    pauseAllExcept(id);
    video.muted = true;
    setSoundOnId(null);
    void video.play();
  };

  const pauseReel = (id: number) => {
    const video = videoRefs.current.get(id);
    if (!video) return;

    video.pause();
    video.muted = true;
    setSoundOnId((currentId) => (currentId === id ? null : currentId));
  };

  const toggleSound = (id: number) => {
    const video = videoRefs.current.get(id);
    if (!video || video.paused) return;

    const shouldTurnSoundOn = soundOnId !== id;
    videoRefs.current.forEach((currentVideo) => {
      currentVideo.muted = true;
    });
    video.muted = !shouldTurnSoundOn;
    setSoundOnId(shouldTurnSoundOn ? id : null);
  };

  return (
    <figure className="reel-stack">
      <div
        className="reel-stack__stage"
        onMouseLeave={() => {
          setHoveredId(null);
          setSoundOnId(null);
          videoRefs.current.forEach((video) => {
            video.pause();
            video.muted = true;
          });
        }}
      >
        {reels.map((reel, index) => (
          <div
            className={`reel-stack__item reel-stack__item--${index}${hoveredId === reel.id ? " reel-stack__item--hovered" : ""}`}
            key={reel.id}
            role="button"
            tabIndex={0}
            aria-label={`Reel ${reel.id}. Hover to play. Click to toggle sound.`}
            onMouseEnter={() => {
              setHoveredId(reel.id);
              playReel(reel.id);
            }}
            onMouseLeave={() => pauseReel(reel.id)}
            onClick={() => toggleSound(reel.id)}
            onKeyDown={(event) => {
              if (event.key !== "Enter" && event.key !== " ") return;
              event.preventDefault();
              toggleSound(reel.id);
            }}
          >
            <video
              ref={(node) => {
                if (node) videoRefs.current.set(reel.id, node);
                else videoRefs.current.delete(reel.id);
              }}
              className="reel-stack__video"
              src={reel.src}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={(event) => {
                event.currentTarget.currentTime = Math.min(0.2, event.currentTarget.duration);
              }}
            />
          </div>
        ))}
      </div>
    </figure>
  );
}