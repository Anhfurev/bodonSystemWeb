"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkContext } from "./DarkContext";
import { useRef } from "react";
import { useMenuMetrics } from "@/lib/utils";

export function Hero({ isMenuOpen }: { isMenuOpen: boolean }) {
  const { lang } = useDarkContext();
  const ref = useRef(null);
  const { menuWidth, isMobile } = useMenuMetrics();

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl xl:max-w-4xl px-4 sm:px-6">
        <motion.div
          animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Agency Label */}
            <motion.div
              className="text-sm uppercase tracking-[0.3em] text-foreground/70 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {lang === "en"
                    ? "BODON SYSTEMS SOFTWARE DEVELOPMENT AGENCY"
                    : "БОДОН СИСТЕМС ПРОГРАМ ХАНГАМЖИЙН АГЕНТЛАГ"}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + "-1"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {lang === "en" ? "We build" : "Бид дижитал"}
                  </motion.span>
                </AnimatePresence>
              </motion.span>

              <motion.span
                className="block mt-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + "-2"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {lang === "en" ? "digital" : "шийдлийг"}
                    <span className="italic font-normal">
                      {lang === "en" ? " experience" : " бүтээдэг"}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </h1>

            {/* Description */}
            <motion.div
              className="mt-6 sm:mt-8 md:mt-12 text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang + "-desc"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {lang === "en"
                    ? "Crafting innovative software solutions that transform ideas into elegant, high-performing digital products."
                    : "Шинэлэг программ хангамжийн шийдлүүдийг бүтээж, санааг гоёмсог, өндөр гүйцэтгэлтэй дижитал бүтээгдэхүүн болгон хувиргадаг."}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-8 sm:mt-12 flex flex-col gap-3 sm:flex-row justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                <a href="#contact">
                  {lang === "en" ? "Contact Us" : "Холбогдох"}
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5 transition-all duration-300 bg-transparent"
              >
                <a href="#experience">
                  {lang === "en" ? "View Our Work" : "Хийсэн ажилууд"}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 text-foreground/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
