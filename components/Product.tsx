"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useDarkContext } from "./DarkContext";

export function Product({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const products = [
    {
      number: "01",
      title: { en: "Web Development", mn: "Вэб хөгжүүлэлт" },
      description: {
        en: "Building modern, fast, and responsive websites tailored to your business needs.",
        mn: "Таны бизнесийн хэрэгцээнд тохирсон орчин үеийн, хурдан, уян хатан вэб сайтуудыг бүтээдэг.",
      },
    },
    {
      number: "02",
      title: { en: "Automation Systems", mn: "Автоматжуулалт" },
      description: {
        en: "Developing systems that automate processes and streamline operations for efficiency.",
        mn: "Үйл ажиллагааг автоматжуулж, бүтээмжийг нэмэгдүүлэх системүүдийг хөгжүүлдэг.",
      },
    },
    {
      number: "03",
      title: { en: "Data Analytics", mn: "Өгөгдлийн шинжилгээ" },
      description: {
        en: "Analyzing data to provide actionable insights that drive business decisions.",
        mn: "Бизнесийн шийдвэр гаргахад хэрэгтэй үр дүнтэй дүн шинжилгээг өгдөг.",
      },
    },
  ];
  return (
    <section
      id="product"
      ref={ref}
      style={{
        width: `${isMenuOpen ? "68.8%" : "100%"}`,
        transform: `translateX(${isMenuOpen ? "-0%" : "0"})`,
        transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
      }}
      className="py-32 md:py-48 !important px-6 h-screen transition-transform duration-500"
    >
      <div className="max-w-6xl mx-auto pt-[-40] mt-[-100]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
            {lang === "en" ? "Our Products" : "Бүтээгдэхүүнүүд"}
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {lang === "en" ? "Discover our" : "Манай"}{" "}
            <span className="italic">
              {lang === "en" ? "products" : "бүтээгдэхүүнүүд"}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            {lang === "en"
              ? "Explore our range of products designed to make your business smarter and faster."
              : "Бизнесээ илүү ухаалаг, хурдан болгох зориулалттай бүтээгдэхүүнүүдийг судлаарай."}
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-8 md:p-12 bg-background/30 border border-border/50 rounded-2xl hover:border-foreground/20 transition-all duration-500"
            >
              <span className="text-sm text-muted-foreground/50 font-mono">
                {product.number}
              </span>
              <h3 className="mt-4 text-xl font-light text-foreground">
                {product.title[lang]}
              </h3>
              <p className="mt-3 text-muted-foreground font-light leading-relaxed">
                {product.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
