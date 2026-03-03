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
      className=" min-h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl xl:max-w-4xl my-auto mx-auto px-4 sm:px-6">
        <motion.div
          animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className="min-h-screen flex flex-col justify-center pt-10 sm:pt-0"
        >
          <div className="max-w-5xl text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
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
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className=""
                  >
                    {lang === "en"
                      ? "BODON SYSTEMS SOFTWARE DEVELOPMENT AGENCY"
                      : "БОДОН СИСТЕМС ПРОГРАМ ХАНГАМЖИЙН АГЕНТЛАГ"}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[0.95]">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={lang}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className=""
                    >
                      {lang === "en" ? "We build" : "Бид дижитал"}
                    </motion.p>
                  </AnimatePresence>
                </motion.span>
                <motion.span
                  className="block mt-2"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={lang}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className=""
                    >
                      {lang === "en" ? "digital" : "шийдлийг"}
                      <span className="italic font-normal">
                        {lang === "en" ? " experience" : " бүтээдэг"}
                      </span>
                    </motion.p>
                  </AnimatePresence>
                </motion.span>
              </h1>

              <motion.div
                className="mt-6 sm:mt-8 md:mt-12 text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className=""
                  >
                    {lang === "en"
                      ? "Crafting innovative software solutions that transform ideas into elegant, high-performing digital products."
                      : "Шинэлэг программ хангамжийн шийдлүүдийг бүтээж, санааг гоёмсог, өндөр гүйцэтгэлтэй дижитал бүтээгдэхүүн болгон хувиргадаг."}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="mt-8 sm:mt-12 flex flex-col gap-2 sm:gap-4 sm:flex-row justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className=""
                  >
                    <Button
                      size="lg"
                      className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                    >
                      <a href={"#contact"}>
                        {lang === "en" ? "Contact Us" : "Холбогдох"}
                      </a>
                    </Button>
                  </motion.p>
                </AnimatePresence>{" "}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5 transition-all duration-300 bg-transparent cursor-pointer"
                    >
                      <a href="#experience">
                        {lang === "en" ? "View Our Work" : "Хийсэн ажилууд"}
                      </a>
                    </Button>
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </motion.div>{" "}
            <motion.div
              className="bottom-10 left-3/3 z-50 relative -translate-x-1/2 mt-20 sm:mt-40"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
