'use client'

import { useEffect, useRef} from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


interface ContentPanelProps {
    children: React.ReactNode;
}
  

export default function ContentPanel({children}: ContentPanelProps){

    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            // gsap code here...
            gsap.to('.scrollArrow', { 
                y: -10,
                repeat: 7,
                yoyo: true,
                ease: 'power1.inOut(1.7)'

            }); // <-- automatically reverted
        }
    );

    return (<div className="contentPanelContainer absolute w-full top-85% z-20">
        <div className="scrollArrow relative w-4 h-4 mb-3 m-auto">
            <div className="w-1 h-3 bg-white rotate-45 absolute rounded-full"></div>
            <div className="w-1 h-3 bg-white -rotate-45 absolute left-[7px] rounded-full"></div>
        </div>
        <div className="contentPanel w-full flex flex-col items-center min-h-screen p-10 pb-20 backdrop-blur-md rounded-t-lg border-2 border-gray-900 bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 overflow-x-hidden">
            <div className="max-w-4xl w-full">
                {children}
            </div>
        </div>
    </div>)
}