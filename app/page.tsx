"use client";

import { useMenuContext } from "@/components/MenuContext";
import Scene3D from "@/components/Scene3D";
import { ScrollStop } from "@/components/ScrollStop";

export default function Home() {
  const { isMenuOpen } = useMenuContext();

  return (
    <div className="relative h-dvh overflow-hidden text-foreground z-10">
      <div>
        <Scene3D isMenuOpen={isMenuOpen} />
      </div>
      <main className="main-content overflow-x-hidden justify-center h-full  max-w-screen snap-mandatory snap-y overflow-y-auto scroll-smooth">
        <ScrollStop isMenuOpen={isMenuOpen} />
      </main>
    </div>
  );
}
