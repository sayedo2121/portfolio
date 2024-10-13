"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface soundObject {
  playSound: ()=>void;
  stopSound: ()=>void;
  soundOn: Boolean;
}

const Sound: React.FC<soundObject> = ({playSound, stopSound, soundOn}) => {

  const path = usePathname();


  let toggleSound = () => {
    if (soundOn) {stopSound();}
    else {
      try{
        playSound();
      } catch{
        console.log('Sound is off. User is yet to interact with the webpage');
      }
      
    }
  };

  return (
    <>
      {path != '/' && <button
        onClick={toggleSound}
        className="soundButton fixed flex flex-col items-center justify-center bottom-5 right-5 rounded-full w-10 h-10 backdrop-blur-lg bg-gradient-to-tr from-sky-800/50 to-indigo-900/50 border-2 border-sky-800/20 z-50"
      >
        {!soundOn && (
          <img className="waveDisabled w-3/4" src="./images/sound-waves.png" />
        )}
        {soundOn && (
          <img
            className="waveEnabled w-3/4"
            src="./images/sound-waves-enabled.png"
          />
        )}
      </button>}
    </>
  );
}

export default Sound;
