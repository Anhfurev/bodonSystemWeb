"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDarkContext } from "./DarkContext";

export default function About({ isMenuOpen }: { isMenuOpen: boolean }) {
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

  return (
    <section
      id="about"
      ref={ref}
      className="pt-20 max-w-350 overflow-scroll mx-auto px-6 flex justify-center min-h-screen"
    >
      <div
        className="mx-auto my-auto"
        style={{
          width: isMenuOpen ? `calc(100% - ${menuWidth}px)` : "100%",
          transition: `width 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${
            isMenuOpen ? "0s" : "0.2s"
          }`,
        }}
      >
        <motion.div
          animate={{ x: isMenuOpen ? -menuWidth / 2 : 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: isMenuOpen ? 0 : 0.1,
          }}
          className="flex flex-col justify-center"
        >
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="uppercase tracking-[0.3em] text-foreground/70 mb-6 block text-[clamp(0.7rem,1.5vw,1rem)]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-4 min-h-[6rem] mt-0"
                  >
                    {lang === "en" ? "About Us" : "Бидний тухай"}
                  </motion.p>
                </AnimatePresence>
              </span>
              <h2 className="font-light tracking-tight leading-tight text-foreground text-[clamp(2.5rem,5vw,3.75rem)]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-4 min-h-[6rem] -mt-14"
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
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-4 min-h-[2rem]"
                >
                  <span className="block text-foreground/70 font-light leading-relaxed text-[clamp(1rem,2.5vw,1.2rem)]">
                    {lang === "en"
                      ? "At Bodon Systems, we specialize in creating robust and efficient systems that empower businesses to thrive in the digital age."
                      : "Бодон системсийн бид дижитал эрин үед бизнесүүдийг амжилттай хөгжихөд нь дэмжих найдвартай, үр ашигтай системүүдийг бүтээхэд мэргэшсэн хамт олон."}
                  </span>
                  <span className="block text-foreground/70 font-light leading-relaxed text-[clamp(1rem,2.5vw,1.2rem)]">
                    {lang === "en"
                      ? "Our approach is built on understanding your unique needs and developing custom systems that streamline operations, boost productivity, and drive success."
                      : "Бид таны онцлог хэрэгцээг гүнзгий ойлгож, үйл ажиллагааг хялбаршуулах, бүтээмжийг нэмэгдүүлэх, амжилтыг бий болгох системүүдийг хөгжүүлэхэд тулгуурлан ажилладаг."}
                  </span>
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mt-16 md:mt-10 grid md:grid-cols-3 gap-12">
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
                className="group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-4 min-h-[6rem]"
                  >
                    <span className="text-foreground/70 font-mono text-[clamp(0.875rem,1.5vw,1rem)]">
                      {value.number}
                    </span>
                    <h1 className="mt-4 font-light text-foreground text-[clamp(1rem,2.5vw,1.625rem)]">
                      {value.title}
                    </h1>
                    <span className="mt-3 text-foreground/70 font-light leading-relaxed text-[clamp(0.875rem,1.5vw,1rem)]">
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
