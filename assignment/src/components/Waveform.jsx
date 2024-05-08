import React, { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const Waveform = ({ audioFile }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    const initializeWaveSurfer = async () => {
      try {
        wavesurferRef.current = await WaveSurfer.create({
          container: waveformRef.current,
          waveColor: "violet",
          progressColor: "purple",
          height: 100,
          width: 340,
          responsive: true,
        });

        await wavesurferRef.current.load(audioFile);
      } catch (error) {
        console.error("Error initializing WaveSurfer:", error);
      }
    };

    return () => {
      initializeWaveSurfer();
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioFile]);

  return <div ref={waveformRef}></div>;
};

export default Waveform;
