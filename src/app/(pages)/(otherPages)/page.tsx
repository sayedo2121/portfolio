"use client";

import { useSoundContext } from "@/app/context/SoundContext";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export default function rootPage() {
  const soundOnFunction = useSoundContext();

  const [loadingFinished, setLoadingFinished] = useState(false);

  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const onLoadingFinished = () => {
        setLoadingFinished(true);
      };

      if (!loadingFinished) {
        gsap.to(".loadingBar > div", {
          width: "100%",
          duration: 4,
          ease: "power3.inOut(1.7)",
          onComplete: onLoadingFinished,
        });
      } else {
        gsap.to(".startButton", {
          opacity: 1,
          ease: "power3.inOut(1.7)",
        });
      }
    },
    { dependencies: [loadingFinished] }
  );

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black bg-gradient-to-tr from-sky-800/50 to-indigo-900/50 relative">
        <p className="text-xs text-sky-500 font-light font-helvetica pointer-none">
          {loadingFinished
            ? "SPACE SUIT PRESSURISED"
            : "PRESSURISING YOUR SPACE SUIT..."}
        </p>
        <div className="loadingBar w-1/2 h-[1.5px] rounded-full bg-black mt-4 flex flex-row items-center justify-center">
          <div className={`${loadingFinished?'w-full': 'w-5'} h-full rounded-full bg-sky-800`}></div>
        </div>
          <Link href={"/home"} prefetch={true} className="absolute bottom-10 mt-32">
            <button
              onClick={soundOnFunction}
              className="startButton opacity-0 rounded-lg text-white px-10 py-2 border-2 border-sky-800/20 bg-gradient-to-tr from-sky-800/50 to-indigo-900/50"
            >
              Explore
            </button>
          </Link>
      </div>
    </>
  );
}
