"use client"

import Image from "next/image";
import Orb from "@/jsrepo/Backgrounds/Orb/Orb";
// import Navbar from "@/components/navbar/navbar"; //Improve this

export default function Home() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
    <Orb
      hoverIntensity={0.2 }
      rotateOnHover={true}
      hue={0}
      forceHoverState={false}
    />
    </div>
  );
}