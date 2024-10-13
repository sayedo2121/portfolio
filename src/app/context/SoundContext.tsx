import { createContext, useContext } from "react"

export const SoundContext = createContext<()=>void | undefined>(()=>{});

export function useSoundContext(){
    const soundObject = useContext(SoundContext);

    if(soundObject === undefined){
        throw new Error('useSoundContext must be used with a SoundContext tag');
    }

    return soundObject;
}