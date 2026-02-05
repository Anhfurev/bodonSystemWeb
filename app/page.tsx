"use client";

import LightRays from "@/components/LightRays";
import { useMenuContext } from "@/components/MenuContext";
import Scene3D from "@/components/Scene3D";
import { ScrollStop } from "@/components/ScrollStop";
import { useEffect, useState } from "react";

export default function Home() {
  const { isMenuOpen } = useMenuContext();

  return (
    <div className="text-foreground z-10">
      <div>
        <Scene3D isMenuOpen={isMenuOpen} />
      </div>
      <main className="main-content h-screen w-full snap-mandatory snap-y overflow-y-auto scroll-smooth pt-20">
        <ScrollStop isMenuOpen={isMenuOpen} />
      </main>
    </div>
  );
}
