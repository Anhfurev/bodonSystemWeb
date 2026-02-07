"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useDarkContext } from "./DarkContext";
import { ScanLine, MapPin, Globe, Scale, QrCode, Monitor } from "lucide-react";
interface TimelineItem {
  year: string;
  title: { en: string; mn: string };
  desc: { en: string; mn: string };
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface JourneyProps {
  isMenuOpen: boolean;
}

function TimelineNode({
  item,
  index,
  lang,
}: {
  item: TimelineItem;
  index: number;
  lang: "en" | "mn";
  isInView: boolean;
}) {
  const isEven = index % 2 === 0;
  const nodeRef = useRef(null);
  const nodeInView = useInView(nodeRef, { once: true, margin: "-60px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 50 }}
      animate={nodeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex items-center gap-6 md:gap-10 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      <div
        className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left`}
      >
        <motion.div className="group relative p-8 md:p-10 bg-background/30 border border-border/50 rounded-2xl hover:border-foreground/20 transition-all duration-500">
          <div className="flex items-start gap-6">
            <div className="p-3 rounded-xl bg-muted group-hover:bg-foreground group-hover:text-background transition-all duration-500 shrink-0">
              <Icon />
            </div>
            <div className="flex-1">
              <div className="text-sm text-left font-mono text-muted-foreground mb-2">
                {item.year}
              </div>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={item.title[lang] + lang}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl text-left font-light text-foreground mb-3"
                >
                  {item.title[lang]}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={item.desc[lang] + lang}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-muted-foreground text-left font-light leading-relaxed"
                >
                  {item.desc[lang]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center z-10 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={nodeInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.08 + 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-3 h-3 rounded-full bg-foreground ring-4 ring-background"
        ></motion.div>
      </div>

      {/* Empty spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Journey({ isMenuOpen }: JourneyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const [menuWidth, setMenuWidth] = useState(0);

  useEffect(() => {
    const updateMenuWidth = () => {
      const menuEl = document.querySelector(
        ".staggered-menu-panel",
      ) as HTMLElement | null;
      if (menuEl) setMenuWidth(menuEl.offsetWidth);
    };

    updateMenuWidth();
    window.addEventListener("resize", updateMenuWidth);
    return () => window.removeEventListener("resize", updateMenuWidth);
  }, []);

  const timeline: TimelineItem[] = [
    {
      year: "2018",
      title: { en: "Smart Gate", mn: "Смарт хаалга" },
      desc: {
        en: "Automatic gate for export coal transport with customs clearance. System with entry report and internal flow information",
        mn: "Экспорт нүүрсний тээвэрт зориулсан автомат хаалга. Систем нь орлогын тайлан, дотоод урсгалын мэдээлэлтэй.",
      },
      icon: ScanLine,
    },
    {
      year: "2023",
      title: { en: "GPS Tracking System", mn: "GPS хяналтын систем" },
      desc: {
        en: "Vehicle location and route. Container temperature, humidity, sealing information, zoning, transit zones information. Distance traveled, average speed.",
        mn: "Тээврийн хэрэгслийн байршил, маршрут. Контейнерийн температур, чийгшил, битүүмжлэх мэдээлэл, бүсийн мэдээлэл, дамжин өнгөрөх бүсийн мэдээлэл. Замд туулсан зай, дундаж хурд.",
      },
      icon: MapPin,
    },
    {
      year: "2024",
      title: { en: "Ai-tos.mn", mn: "Ai-tos.mn" },
      desc: {
        en: "Border port internal transit, ordering, weighing, transshipment, import, and export control system.",
        mn: "Гаалийн боомтын дотоод дамжуулалт, захиалга, жинлэх, ачих/буулгах, импорт экспортын хяналтын систем.",
      },
      icon: Globe,
    },
    {
      year: "2025",
      title: { en: "Auto Weighbridge", mn: "Авто жинлүүр" },
      desc: {
        en: "Automated truck weighing system with real-time data, license plate recognition, and system integration.",
        mn: "Бодит цагийн өгөгдөл, улсын дугаар танилт, системийн уялдаатай автомат ачааны машин жинлэх шийдэл.",
      },
      icon: Scale,
    },
    {
      year: "2026",
      title: { en: "Smart gate v2", mn: "Смарт хаалга v2" },
      desc: {
        en: "Automatic gate that opens with customs clearance for imported cargo. System with entry report and internal flow information",
        mn: "Импортын ачаанд зориулсан гаалийн зөвшөөрөлтэй автомат хаалга. Систем нь орлогын тайлан, дотоод урсгалын мэдээлэлтэй.",
      },
      icon: QrCode,
    },
    {
      year: "2026",
      title: { en: "KIOSK", mn: "КИОСК" },
      desc: {
        en: "Self-service kiosk for import freight payments with real-time system integration.",
        mn: "Импортын ачааны төлбөрийг өөрөө гүйцэтгэх, системтэй уялдсан киоск шийдэл.",
      },
      icon: Monitor,
    },
  ];

  return (
    <section
      id="journey"
      ref={ref}
      className="min-h-screen flex flex-col justify-center overflow-auto transition-transform duration-500"
    >
      <div
        style={{
          width: isMenuOpen ? `calc(100% - ${menuWidth}px)` : "100%",
          transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="max-w-7xl xl:max-w-5xl mx-auto px-6"
      >
        <motion.div
          animate={{ x: isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className="min-h-screen flex flex-col justify-center py-20"
        >
          <div className="mx-auto text-center mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
                  {lang === "en" ? "Timeline" : "Цаг хугацаа"}
                </span>
                <h2 className="text-4xl md:text-5xl font-light mt-6 tracking-tight mb-0 text-foreground">
                  {lang === "en" ? "Our " : "Бидний "}
                  <span className="italic">
                    {lang === "en" ? "Experience" : "Туршлага"}
                  </span>
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Timeline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Vertical center line (desktop) */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full origin-top bg-border/50"
                />
              </div>

              {/* Timeline items */}
              <div className="flex flex-col gap-10 md:gap-14">
                {timeline.map((item, index) => (
                  <TimelineNode
                    key={index}
                    item={item}
                    index={index}
                    lang={lang}
                    isInView={isInView}
                  />
                ))}
              </div>

              {/* End cap */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hidden md:flex justify-center mt-10"
              >
                <div className="w-2 h-2 rounded-full bg-border" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;
