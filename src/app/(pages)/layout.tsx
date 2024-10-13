'use client'

import useSound from "use-sound";
import { SoundContext } from "../context/SoundContext";
import Sound, { soundObject } from "../components/Sound";
import { useState } from "react";

export default function PagesLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [play, { stop }] = useSound("./audio/ambient.wav", {loop:true});
    const [soundOn, setSoundOn] = useState(false);

    const playSound = ()=>{
        play();
        setSoundOn(true);
    }

    const stopSound = ()=>{
        stop();
        setSoundOn(false);
    }

    return (<>
        <Sound playSound={playSound} stopSound={stopSound} soundOn={soundOn}/>
        <SoundContext.Provider value={playSound}>
            {children}
        </SoundContext.Provider>
        </>)
}