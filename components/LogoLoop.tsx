"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface LogoLoopProps {
  logos: { node: React.ReactNode; title: string; href: string }[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  className?: string;
  hoverSpeed?: number;
  fadeOutColor?: string;
  ariaLabel?: string;
  useCustomRender?: boolean;
}

export default function LogoLoop({
  logos,
  speed = 30,
  direction = "left",
  logoHeight = 40,
  gap = 40,
  scaleOnHover = true,
  fadeOut = true,
  className,
}: LogoLoopProps) {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className={cn("relative w-full overflow-hidden py-4", className)}>
      {fadeOut && (
        <>
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </>
      )}

      <motion.div
        className="flex w-max items-center"
        animate={{
          x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ gap: `${gap}px` }}
      >
        {repeatedLogos.map((logo, i) => (
          <a
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-foreground",
              scaleOnHover && "hover:scale-110",
            )}
            title={logo.title}
            aria-label={logo.title}
          >
            <div
              style={{
                height: logoHeight,
                width: "auto",
                fontSize: logoHeight,
                display: "flex",
                alignItems: "center",
              }}
            >
              {logo.node}
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
