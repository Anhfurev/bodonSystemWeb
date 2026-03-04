"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useDarkContext } from "./DarkContext";
import {
  ScanLine,
  MapPin,
  Globe,
  Scale,
  QrCode,
  Monitor,
  X,
} from "lucide-react";
import { useMenuMetrics } from "@/lib/utils";
interface TimelineItem {
  year: string;
  title: { en: string; mn: string };
  desc: { en: string; mn: string };
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  details?: { en: string; mn: string };
  photos?: string[];
}

interface JourneyProps {
  isMenuOpen: boolean;
}

function TimelineNode({
  item,
  index,
  lang,
  onClick,
  isMobile,
}: {
  item: TimelineItem;
  index: number;
  lang: "en" | "mn";
  isInView: boolean;
  onClick: (item: TimelineItem) => void;
  isMobile: boolean;
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
        delay: isMobile ? index * 0.02 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex items-center gap-6 md:gap-10 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      <div
        className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left`}
      >
        <motion.div
          layoutId={isMobile ? undefined : `card-container-${index}`}
          onClick={() => onClick(item)}
          className="group relative p-3 sm:p-4 md:p-6 lg:p-8 bg-background/30 border border-border/50 rounded-lg sm:rounded-xl md:rounded-2xl hover:border-foreground/20 cursor-pointer hover:bg-background/50 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row">
            <motion.div
              layoutId={isMobile ? undefined : `card-icon-${index}`}
              className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-muted group-hover:bg-foreground group-hover:text-background transition-colors duration-500 shrink-0 flex-shrink-0"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.div>
            <div className="flex-1">
              <div className="text-xs sm:text-xs md:text-sm text-left font-mono text-foreground/70 mb-1 sm:mb-2">
                {item.year}
              </div>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={item.title[lang] + lang}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[14px] sm:text-base md:text-lg text-left font-light text-foreground mb-1 sm:mb-2"
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
                  className="text-xs sm:text-xs md:text-sm text-foreground/70 text-left font-light leading-relaxed"
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

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Journey({ isMenuOpen }: JourneyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const { menuWidth, isMobile } = useMenuMetrics();
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const timeline: TimelineItem[] = React.useMemo(
    () => [
      {
        year: "2018",
        title: { en: "Smart Gate", mn: "Смарт хаалга" },
        desc: {
          en: "Automatic gate for export coal transport with customs clearance. System with entry report and internal flow information",
          mn: "Экспорт нүүрсний тээвэрт зориулсан автомат хаалга. Систем нь орлогын тайлан, дотоод урсгалын мэдээлэлтэй.",
        },
        icon: ScanLine,
        details: {
          en: "A comprehensive automated gate system designed for high-volume coal export terminals. Features include license plate recognition, RFID integration for cargo tracking, and seamless synchronization with customs databases to ensure rapid clearance and accurate reporting.",
          mn: "Экспортын нүүрс тээвэрлэлтийн терминалуудад зориулсан бүрэн автоматжуулсан хаалганы систем. Улсын дугаар таних, ачааг хянах RFID интеграцчлал, гаалийн мэдээллийн сантай шууд холбогдож бүрдүүлэлтийг хурдасгах, тайланг нарийвчлалтай гаргах боломжуудтай.",
        },
        photos: ["smartGate1.png", "smartGate2.png"],
      },
      {
        year: "2023",
        title: { en: "GPS Tracking System", mn: "GPS хяналтын систем" },
        desc: {
          en: "Vehicle location and route. Container temperature, humidity, sealing information, zoning, transit zones information. Distance traveled, average speed.",
          mn: "Тээврийн хэрэгслийн байршил, маршрут. Контейнерийн температур, чийгшил, битүүмжлэх мэдээлэл, бүсийн мэдээлэл, дамжин өнгөрөх бүсийн мэдээлэл. Замд туулсан зай, дундаж хурд.",
        },
        icon: MapPin,
        details: {
          en: "Advanced GPS tracking solution for logistics management. Monitors real-time vehicle location, route adherence, and cargo conditions including temperature and humidity. Features automated alerts for sealing breaches and zone entry/exit.",
          mn: "Ложистикийн менежментэд зориулсан дэвшилтэт GPS хяналтын шийдэл. Тээврийн хэрэгслийн байршил, маршрут, ачааны температур, чийгшил зэргийг бодит цаг хугацаанд хянана. Лацны бүрэн бүтэн байдал болон бүсэд нэвтрэх/гарах үеийн автомат дохиололтой.",
        },
        photos: ["gps1.png", "gps2.png"],
      },
      {
        year: "2024",
        title: { en: "Ai-tos.mn", mn: "Ai-tos.mn" },
        desc: {
          en: "Border port internal transit, ordering, weighing, transshipment, import, and export control system.",
          mn: "Гаалийн боомтын дотоод дамжуулалт, захиалга, жинлэх, ачих/буулгах, импорт экспортын хяналтын систем.",
        },
        icon: Globe,
        details: {
          en: "A comprehensive digital platform for border port management. It handles internal transit logistics, order processing, automated weighing integration, transshipment coordination, and full import/export control workflows, ensuring transparency and efficiency in cross-border trade.",
          mn: "Хилийн боомтын менежментийн цогц дижитал платформ. Дотоод тээвэр ложистик, захиалга боловсруулалт, автомат жинлэлтийн интеграцчлал, шилжүүлэн ачилт болон импорт/экспортын хяналтын урсгалыг бүрэн хангаж, хил дамнасан худалдааны ил тод, үр ашигтай байдлыг бүрдүүлдэг.",
        },
        photos: [
          "https://english.news.cn/20230804/62a26378922548dcb177272122cf29b3/e3d47d79ae6b4f1a8efaa3080f003c44.jpg",
          "aitos.png",
        ],
      },
      {
        year: "2025",
        title: { en: "Auto Weighbridge", mn: "Авто жинлүүр" },
        desc: {
          en: "Automated truck weighing system with real-time data, license plate recognition, and system integration.",
          mn: "Бодит цагийн өгөгдөл, улсын дугаар танилт, системийн уялдаатай автомат ачааны машин жинлэх шийдэл.",
        },
        icon: Scale,
        details: {
          en: "State-of-the-art automated weighbridge system designed for industrial applications. Features include high-precision sensors, automatic license plate recognition (ANPR) for truck identification, and real-time data synchronization with central ERP systems to prevent fraud and streamline logistics.",
          mn: "Аж үйлдвэрийн зориулалттай орчин үеийн автомат жинлүүрийн систем. Өндөр нарийвчлалтай мэдрэгч, ачааны машиныг таних автомат улсын дугаар танигч (ANPR) болон төв ERP системтэй бодит цагийн өгөгдөл солилцох боломжтой бөгөөд энэ нь залилангаас сэргийлж, ложистикийг хялбарчилдаг.",
        },
        photos: [
          "https://www.weigh-more.com.au/wp-content/uploads/2020/09/orange-truck-with-grain-is-wei.jpg",
          "smartGate.png",
        ],
      },
      {
        year: "2026",
        title: { en: "Smart gate v2", mn: "Смарт хаалга v2" },
        desc: {
          en: "Automatic gate that opens with customs clearance for imported cargo. System with entry report and internal flow information",
          mn: "Импортын ачаанд зориулсан гаалийн зөвшөөрөлтэй автомат хаалга. Систем нь орлогын тайлан, дотоод урсгалын мэдээлэлтэй.",
        },
        icon: QrCode,
        details: {
          en: "The next generation of our Smart Gate technology, specifically optimized for import cargo flows. It integrates directly with customs clearance APIs to automatically grant access upon release. Includes advanced reporting on entry times and internal traffic flow analytics.",
          mn: "Импортын ачааны урсгалд тусгайлан оновчлогдсон манай Смарт Хаалга технологийн дараагийн үе. Гаалийн бүрдүүлэлтийн API-тай шууд холбогдож, зөвшөөрөл олгогдмогц автоматаар нэвтрэх эрх олгоно. Нэвтрэх цаг болон дотоод хөдөлгөөний урсгалын нарийвчилсан тайлан аналитиктай.",
        },
        photos: [
          "https://minato.global/assets/smart-gate-Minato.jpg",
          "zza.png",
        ],
      },
      {
        year: "2026",
        title: { en: "KIOSK", mn: "КИОСК" },
        desc: {
          en: "Self-service kiosk for import freight payments with real-time system integration.",
          mn: "Импортын ачааны төлбөрийг өөрөө гүйцэтгэх, системтэй уялдсан киоск шийдэл.",
        },
        icon: Monitor,
        details: {
          en: "A user-friendly self-service kiosk solution for freight terminals. Allows drivers and agents to pay import freight charges, print permits, and check cargo status without queuing at counters. Fully integrated with banking systems and the terminal operating system.",
          mn: "Ачаа тээврийн терминалуудад зориулсан хэрэглэгчдэд ээлтэй өөртөө үйлчлэх киоск шийдэл. Жолооч болон зуучлагчдад импортын тээврийн төлбөр төлөх, зөвшөөрөл хэвлэх, ачааны төлөвийг шалгах боломжийг олгож, дараалал үүсгэхгүй. Банкны систем болон терминалын үйл ажиллагааны системтэй бүрэн уялдсан.",
        },
        photos: [
          "https://kiosk.com/wp-content/uploads/2022/01/Comcast-Store-scaled.jpg.webp",
          "kiosk1.png",
        ],
      },
    ],
    [],
  );

  return (
    <section
      id="experience"
      ref={ref}
      className="h-auto sm:h-dvh snap-start flex flex-col justify-start sm:justify-center overflow-x-hidden transition-transform duration-500 pt-2 sm:pt-0 pb-4 sm:pb-0"
    >
      <div
        style={{
          width: isMobile
            ? "100%"
            : isMenuOpen
              ? `calc(100% - ${menuWidth}px)`
              : "100%",
          transition: isMobile
            ? "none"
            : "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="max-w-7xl xl:max-w-7x xl mx-auto px-3 sm:px-4 md:px-6 mt-15 sm:mt-0 w-full"
      >
        <motion.div
          animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className="min-h-auto sm:min-h-screen flex flex-col justify-start sm:justify-center py-4 sm:py-8 md:py-12 lg:py-16 w-full"
        >
          <div className="mx-auto text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-foreground/70 mb-2 sm:mb-3 md:mb-4 block">
                  {lang === "en" ? "Timeline" : "Цаг хугацаа"}
                </span>
                <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light mt-2 sm:mt-3 md:mt-4 tracking-tight mb-0 text-foreground">
                  {lang === "en" ? "Our " : "Бидний "}
                  <span className="italic">
                    {lang === "en" ? "Experience" : "Туршлага"}
                  </span>
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full"
            >
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full origin-top bg-border/50"
                />
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-10 w-full">
                {timeline.map((item, index) => (
                  <TimelineNode
                    key={index}
                    item={item}
                    index={index}
                    lang={lang}
                    isInView={isInView}
                    isMobile={isMobile}
                    onClick={setSelectedItem}
                  />
                ))}
              </div>

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

        <AnimatePresence mode="popLayout">
          {selectedItem && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: isMobile ? 0.15 : 0.3 }}
                className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm pointer-events-auto"
                onClick={() => setSelectedItem(null)}
              />
              <motion.div
                key="modal-wrapper"
                className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: isMobile ? 0.15 : 0.3 }}
              >
                <motion.div
                  layoutId={
                    !isMobile
                      ? `card-container-${timeline.indexOf(selectedItem)}`
                      : undefined
                  }
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: isMobile ? 0.95 : 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: isMobile ? 0.95 : 1 }}
                  transition={
                    isMobile
                      ? { duration: 0.2, ease: "easeOut" }
                      : {
                          duration: 0.4,
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }
                  }
                  style={{
                    touchAction: "auto",
                    overflowY: "auto",
                    overscrollBehavior: "contain",
                  }}
                  className="bg-background border border-border/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 max-w-5xl w-full max-h-[85vh] shadow-2xl relative pointer-events-auto"
                >
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/80 transition-colors text-foreground/70 hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 pr-6 sm:pr-8">
                    <motion.div
                      layoutId={
                        !isMobile
                          ? `card-icon-${timeline.indexOf(selectedItem)}`
                          : undefined
                      }
                      className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-muted shrink-0 text-foreground"
                    >
                      <selectedItem.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </motion.div>
                    <div>
                      <div className="text-xs sm:text-xs md:text-sm font-mono text-foreground/70 mb-0.5 sm:mb-1">
                        {selectedItem.year}
                      </div>
                      <h3 className="text-[14px] sm:text-lg md:text-2xl font-light text-foreground">
                        {selectedItem.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: isMobile ? 0.05 : 0.2,
                        duration: 0.4,
                      }}
                      className="prose dark:prose-invert max-w-none"
                    >
                      <p className="text-foreground/70 leading-relaxed text-[16px] sm:text-[18px] font-light">
                        {selectedItem.details
                          ? selectedItem.details[lang]
                          : selectedItem.desc[lang]}
                      </p>
                    </motion.div>

                    {selectedItem.photos && selectedItem.photos.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: isMobile ? 0.08 : 0.3,
                          duration: 0.4,
                        }}
                        className="flex flex-row gap-4"
                      >
                        {selectedItem.photos.map((photo, i) => (
                          <motion.div
                            layoutId={`photo-${photo}`}
                            key={i}
                            onClick={() => setSelectedPhoto(photo)}
                            className="relative aspect-video flex-1 rounded-lg overflow-hidden bg-muted border border-border/50 group cursor-zoom-in"
                          >
                            <img
                              src={photo}
                              alt={selectedItem.title[lang]}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 flex items-center justify-center bg-white/80 dark:bg-black/90 backdrop-blur-md p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                layoutId={`photo-${selectedPhoto}`}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto}
                  alt="Full view"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-12 right-0 p-2 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <X className="w-8 h-8 " />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Journey;
