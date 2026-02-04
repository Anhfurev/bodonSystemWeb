"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  console.log("About - isMenuOpen:", isMenuOpen);

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
      <div className="max-w-6xl mx-auto mt-[-90]">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
              We believe in the power of{" "}
              <span className="italic">simplicity</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              At Bodon Systems, we specialize in creating robust and efficient
              systems that empower businesses to thrive in the digital age.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Our approach is built on understanding your unique needs and
              developing custom systems that streamline operations, boost
              productivity, and drive success.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-12">
          {[
            {
              number: "01",
              title: "Innovation",
              description:
                "Using the latest technologies to create systems that help businesses grow and improve.",
            },
            {
              number: "02",
              title: "Quality",
              description:
                "Making sure every system we build works perfectly and meets the highest standards.",
            },
            {
              number: "03",
              title: "Collaboration",
              description:
                "Working closely with you to create systems that meet your needs and go beyond what you expect.",
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
              <span className="text-sm text-muted-foreground/50 font-mono">
                {value.number}
              </span>
              <h3 className="mt-4 text-xl font-light text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-muted-foreground font-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
