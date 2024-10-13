'use client';

import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react';

interface linksInterface {
  manikinClicked?: Boolean;
  setManikinClicked?: Dispatch<SetStateAction<boolean>>;
}

const Links: React.FC<linksInterface> = ({ manikinClicked, setManikinClicked }) => {
  return (
    <>
        <div
        onClick={()=>{setManikinClicked?.(false)}}
        className={`navLinks flex flex-row gap-14 items-center juastify-center fixed place-self-center translate-x-9 top-1/2 ease-in-out transition-all duration-1000 ${
          manikinClicked ? "opacity-100 z-10" : "opacity-0 z-0"
        } max-lg:flex-col max-lg:gap-10 max-lg:translate-x-0 max-lg:-translate-y-1/2`}
      >
        <>
        <Link href="/home" className={`${manikinClicked ? "pointer-events-auto" : "pointer-events-none"}`}>
          <span className="text-[45px] font-light">HOME</span>
        </Link>
        <Link href="/about" className={`${manikinClicked ? "pointer-events-auto" : "pointer-events-none"}`}>
          <span className="text-[45px] font-light">ABOUT</span>
        </Link>
        <div className="w-12 max-lg:hidden"></div>
        <Link href="/myWork" className={`${manikinClicked ? "pointer-events-auto" : "pointer-events-none"}`}>
          <span className="text-[45px] font-light">WORK</span>
        </Link>
        <Link href="/contact" className={`${manikinClicked ? "pointer-events-auto" : "pointer-events-none"}`}>
          <span className="text-[45px] font-light">CONTACT</span>
        </Link>
        </>
      </div>
    </>
  );
};

export default Links;
