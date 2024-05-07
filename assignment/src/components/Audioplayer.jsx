import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = ({ src }) => {
  return (
    <div>
      <ReactAudioPlayer
        src={src}
        controls
        autoPlay={false} // Set to true if you want the audio to start playing automatically
      />
    </div>
  );
};

export default AudioPlayer;
