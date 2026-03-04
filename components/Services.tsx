"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Smartphone, Shield } from "lucide-react";
import { useDarkContext } from "./DarkContext";
import { useMenuMetrics } from "../lib/utils";

export function Services({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const { menuWidth, isMobile } = useMenuMetrics();
  const services = [
    {
      icon: Code2,
      title: lang === "en" ? "Web Development" : "Вэб хөгжүүлэлт",
      description:
        lang === "en"
          ? "Building custom websites and apps with modern tools and good practices."
          : "Орчин үеийн хэрэгсэл, шилдэг практик ашиглан захиалгат вэб сайт болон апп хөгжүүлдэг.",
    },
    {
      icon: Cloud,
      title: lang === "en" ? "Automation" : "Автоматжуулалт",

      description:
        lang === "en"
          ? "Implementing automated systems that optimize workflows and reduce manual work."
          : "Ажил үүргийг хялбарчилж, гар ажиллагааг багасгах автоматжуулсан системүүдийг хэрэгжүүлдэг.",
    },
    {
      icon: Smartphone,
      title: lang === "en" ? "Mobile Apps" : "Гар утасны аппликейшн",
      description:
        lang === "en"
          ? "Creating mobile apps that work well on all devices and are easy to use."
          : "Бүх төхөөрөмж дээр сайн ажиллах, хэрэглээнд ээлтэй гар утасны апп бүтээдэг.",
    },
    {
      icon: Shield,
      title: lang === "en" ? "Security & QA" : "Аюулгүй байдал & QA",
      description:
        lang === "en"
          ? "Testing and security to keep your data safe and your systems running smoothly."
          : "Таны өгөгдлийг хамгаалж, системүүдийг найдвартай ажиллуулах тест ба аюулгүй байдал.",
    },
  ];

  return (
    <section
      id="services"
      className="px-4 sm:px-6 snap-start z-10  h-dvh md:h-screen bg-transparent flex justify-center items-center"
      ref={ref}
    >
      <div
        className="mx-auto"
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
      >
        <motion.div
          animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className=" flex flex-col justify-center"
        >
          <div className="max-w-6xl mx-auto mt-0 sm:mt-[-50] md:mt-0 2xl:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
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
                  <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-foreground/70 mb-6">
                    {lang === "en" ? "Services" : "Үйл ажиллагаа"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mt-6 tracking-tight mb-0 text-foreground">
                    {lang === "en" ? "What we" : "Бид юу"}
                    <span className="italic">
                      {lang === "en" ? " Do" : " Хийдэг вэ?"}
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-0 sm:mt-[-25] md:mt-[-50]">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative p-6 sm:p-8 md:p-12 bg-background/30 border border-border/50 rounded-2xl hover:border-foreground/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-6 flex-col sm:flex-row">
                    <div className="p-3 rounded-xl bg-muted group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={lang}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className=""
                        >
                          <h3 className="text-xl font-light text-foreground mb-3">
                            {service.title}
                          </h3>
                          <span className="text-foreground/70 font-light leading-relaxed">
                            {service.description}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-8 right-8 text-foreground/50 group-hover:text-muted-foreground/60 transition-colors duration-500"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-mono">0{i + 1}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
