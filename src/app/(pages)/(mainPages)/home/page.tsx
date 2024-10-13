'use client';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function Page() {

  gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            gsap.to('.scrollIcon > div > div', { 
                y: 5,
                repeat: 7,
                yoyo: true,
                ease: 'power1.inOut(1.7)'

            });
        }
    );

  return (
      <span className="scrollIcon max-sm:hidden absolute">
        <div className="fixed flex justify-center bottom-10 border-2 w-5 h-7 rounded-full">
          <div className="relative top-1 bg-gray-200 w-1 h-2 rounded-full "></div>
          </div>
      </span>

  );
}

