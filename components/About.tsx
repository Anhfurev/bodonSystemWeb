"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useDarkContext } from "./DarkContext";
import { useMenuMetrics } from "../lib/utils";

export default function About({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const { menuWidth, isMobile } = useMenuMetrics();

  return (
    <section
      id="about"
      ref={ref}
      className="pt-0 sm:pt-6 md:pt-10 lg:pt-20 snap-start max-w-full sm:max-w-350 overflow-hidden mx-auto px-3 sm:px-4 md:px-6 flex items-start sm:items-center sm:justify-center h-dvh md:h-screen pb-2 sm:pb-0"
    >
      <div
        className="mx-auto sm:my-auto w-full sm:w-auto"
        style={{
          width: isMobile
            ? "100%"
            : isMenuOpen
              ? `calc(100% - ${menuWidth}px)`
              : "100%",
          transition: isMobile
            ? "none"
            : `width 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${
                isMenuOpen ? "0s" : "0.2s"
              }`,
        }}
      >
        <motion.div
          animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className="flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-8 lg:gap-16 items-start mt-20 sm:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-foreground/70 mb-0.5 sm:mb-2 md:mb-4 lg:mb-6 block text-[14px] sm:text-sm md:text-base">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-1 sm:space-y-2 min-h-fit sm:min-h-6 mt-0"
                  >
                    {lang === "en" ? "About Us" : "Бидний тухай"}
                  </motion.p>
                </AnimatePresence>
              </span>
              <h2 className="font-light tracking-tight leading-tight text-foreground text-2xl sm:text-2xl md:text-3xl lg:text-5xl mt-1 sm:mt-2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-1 sm:space-y-2 min-h-fit sm:min-h-8 mt-2 sm:-mt-3"
                  >
                    {lang === "en"
                      ? "We unlock powerful"
                      : "Бид хүчирхэг бизнесийн"}{" "}
                    <span className="italic">
                      {lang === "en"
                        ? "business potential"
                        : "боломжийг нээдэг"}
                    </span>
                  </motion.p>
                </AnimatePresence>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-2 sm:space-y-4 md:space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-1 sm:space-y-2 min-h-fit"
                >
                  <span className="block text-foreground/70 font-light leading-relaxed text-[15px] sm:text-sm md:text-[18px]">
                    {lang === "en"
                      ? "At Bodon Systems, we specialize in creating robust and efficient systems that empower businesses to thrive in the digital age."
                      : "Бодон системсийн бид дижитал эрин үед бизнесүүдийг амжилттай хөгжихөд нь дэмжих найдвартай, үр ашигтай системүүдийг бүтээхэд мэргэшсэн хамт олон."}
                  </span>
                  <span className="block text-foreground/70 font-light leading-relaxed text-[15px] sm:text-sm md:text-[18px]">
                    {lang === "en"
                      ? "Our approach is built on understanding your unique needs and developing custom systems that streamline operations, boost productivity, and drive success."
                      : "Бид таны онцлог хэрэгцээг гүнзгий ойлгож, үйл ажиллагааг хялбаршуулах, бүтээмжийг нэмэгдүүлэх, амжилтыг бий болгох системүүдийг хөгжүүлэхэд тулгуурлан ажилладаг."}
                  </span>
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 md:gap-6 lg:gap-12">
            {[
              {
                number: "01",
                title: lang === "en" ? "Innovation" : "Шинэлэг шийдэл",
                description:
                  lang === "en"
                    ? "Using the latest technologies to create systems that help businesses grow and improve."
                    : "Бид хамгийн сүүлийн үеийн технологийг ашиглан бизнесийг өсгөж, сайжруулахад туслах системүүдийг бүтээдэг.",
              },
              {
                number: "02",
                title: lang === "en" ? "Quality" : "Хийцлэл",
                description:
                  lang === "en"
                    ? "Making sure every system we build works perfectly and meets the highest standards."
                    : "Бидний бүтээсэн систем бүр өндөр чанарын шаардлагад нийцэж, найдвартай ажиллахыг баталгаажуулдаг.",
              },
              {
                number: "03",
                title: lang === "en" ? "Collaboration" : "Хамтын ажиллагаа",
                description:
                  lang === "en"
                    ? "Working closely with you to create systems that meet your needs and go beyond what you expect."
                    : "Бид таны хэрэгцээг бүрэн хангаж, хүлээлтээс давсан шийдлийг хамтран бүтээхийн тулд ойр хамтран ажилладаг.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group pb-1 sm:pb-2 md:pb-4"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-1 sm:space-y-2 min-h-fit"
                  >
                    <span className="text-foreground/70 font-mono text-[15px] sm:text-[16px]">
                      {value.number}
                    </span>
                    <h1 className="mt-1 sm:mt-2 font-light text-foreground text-[17px] sm:text-base md:text-lg">
                      {value.title}
                    </h1>
                    <span className="mt-1 sm:mt-2 text-foreground/70 font-light leading-relaxed text-[15px] sm:text-sm md:text-[18px]">
                      {value.description}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
