'use client';

import ThreeScene from "../../components/ThreeScene";

export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <div className="mainPageContent flex flex-col items-center h-full">
      <ThreeScene />
      {children}
    </div>
  );
}
