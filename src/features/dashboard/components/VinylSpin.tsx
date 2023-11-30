import React, { useRef, useState, MouseEvent } from "react";
import RedSquare from "./RedSquare";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";

const VinylSpin = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioUrl = "/song.mp3";
  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => {
      const audio = audioRef.current;
      if (audio) {
        if (prevIsPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
      }
      return !prevIsPlaying;
    });
  };

  return (
    <div>
      <div id="album">
        <div id="cover">
          <div id="print"></div>
        </div>

        <div onClick={() => togglePlay()} className="absolute -top-12 left-0">
          <audio ref={audioRef} src={audioUrl} />
          <PrimaryButton
            buttonType="FADED"
            title="Play/Pause"
            className="max-w-[100px]"
          />
        </div>
        <RedSquare isSpinning={isPlaying} />
      </div>
    </div>
  );
};

export default VinylSpin;
