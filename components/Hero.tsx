"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDarkContext } from "./DarkContext";

export function Hero({ isMenuOpen }: { isMenuOpen: boolean }) {
  const { lang } = useDarkContext();

  return (
    <section
      id="home"
      style={{
        transform: `translateX(${isMenuOpen ? "-0%" : "0"})`,
        width: `${isMenuOpen ? "70%" : "100%"}`,
        transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
      }}
      className="min-h-screen snap-start w-full pt-20 flex-col items-center  flex justify-center px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
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

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[0.95]">
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
                  {lang === "en" ? "digital" : "шиидлийг"}
                  <span className="italic font-normal">
                    {lang === "en" ? " experience" : " бүтээдэг"}
                  </span>
                </motion.p>
              </AnimatePresence>
            </motion.span>
          </h1>

          <motion.div
            className="mt-8 md:mt-12 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light leading-relaxed"
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
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
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
                <a href={"#contact"}>
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                  >
                    {lang === "en" ? "Contact Us" : "Холбогдох"}
                  </Button>
                </a>
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className=""
              >
                <Link href={"https://ochko-turshilt-anqw.vercel.app/home"}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5 transition-all duration-300 bg-transparent"
                  >
                    {lang === "en" ? "View Our Work" : "Хийсэн ажилууд"}{" "}
                  </Button>
                </Link>
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="bottom-0 left-1/2 -translate-x-1/2 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
