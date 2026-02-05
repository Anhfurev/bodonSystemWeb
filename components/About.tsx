"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useDarkContext } from "./DarkContext";

export default function About({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();

  return (
    <section
      style={{
        width: `${isMenuOpen ? "70%" : "100%"}`,
        transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
      }}
      id="about"
      className={`py-32 md:py-48 pt-10 px-6 h-screen transition-transform duration-500`}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto mt-[-30]">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className=""
                >
                  {lang === "en" ? "About Us" : "Бидний тухай"}
                </motion.p>
              </AnimatePresence>
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
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
                    ? "We believe in the power of"
                    : "Бид зөв шийдлийг"}
                  <span className="italic">
                    {lang === "en" ? " the right solutions" : " эрхэмлэнэ"}
                  </span>
                </motion.p>
              </AnimatePresence>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
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
                <span className="text-lg text-muted-foreground font-light leading-relaxed">
                  {lang === "en"
                    ? "At Bodon Systems, we specialize in creating robust and efficient systems that empower businesses to thrive in the digital age."
                    : "Бодон системсийн бид дижитал эрин үед бизнесүүдийг амжилттай хөгжихөд нь дэмжих найдвартай, үр ашигтай системүүдийг бүтээхэд мэргэшсэн хамт олон."}
                </span>
                <span className="text-lg text-muted-foreground font-light leading-relaxed">
                  {lang === "en"
                    ? "Our approach is built on understanding your unique needs and developing custom systems that streamline operations, boost productivity, and drive success."
                    : "Бид таны онцлог хэрэгцээг гүнзгий ойлгож, үйл ажиллагааг хялбаршуулах, бүтээмжийг нэмэгдүүлэх, амжилтыг бий болгох системүүдийг хөгжүүлэхэд тулгуурлан ажилладаг."}
                </span>
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-15 md:mt-17 grid md:grid-cols-3 gap-12">
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className=""
                >
                  <span className="text-sm text-muted-foreground/50 font-mono">
                    {value.number}
                  </span>
                  <h1 className="mt-4 text-xl font-light text-foreground ">
                    {value.title}
                  </h1>
                  <span className="mt-3 text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
