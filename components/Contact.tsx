"use client";

import React, { useEffect } from "react";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useDarkContext } from "./DarkContext";
import { Footer } from "./Footer";
import { useMenuMetrics } from "../lib/utils";

export function Contact({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { menuWidth, isMobile } = useMenuMetrics();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    setIsSubmitting(false);

    if (res.ok) {
      form.reset();
      alert("Message sent");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="flex justify-center snap-start items-start sm:items-center h-dvh px-3 sm:px-4 md:px-6 transition-all duration-500 pt-2 sm:pt-0 pb-4 sm:pb-0"
    >
      <motion.div
        animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 500 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col justify-center mx-auto mt-16 sm:mt-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" mx-auto"
          >
            <div
              style={{
                width: isMobile
                  ? "100%"
                  : isMenuOpen
                    ? `calc(140% - ${menuWidth}px)`
                    : "100%",
                transition: isMobile
                  ? "none"
                  : "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              className="mx-auto h-fit flex-1 justify-center items-center"
            >
              <motion.div
                animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: isMenuOpen ? 0 : 0.1,
                }}
                className=" flex flex-col justify-center items-center"
              >
                <div className="lg:max-w-4xl max-w-3xl m-auto justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
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
                        <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-foreground/70 mb-2 sm:mb-3 md:mb-4 pt-0 block">
                          {lang === "en" ? "Contact" : "Холбогдох"}
                        </span>
                        <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 md:mt-4 font-light tracking-tight text-foreground">
                          {lang === "en" ? "Let's work" : "Хамтдаа"}

                          <span className="italic">
                            {lang === "en" ? " together" : " Ажиллацгаая"}
                          </span>
                        </h2>
                        <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 text-xs sm:text-sm md:text-base text-foreground/70 font-light max-w-xl mx-auto">
                          {lang === "en"
                            ? "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                            : "Төслийн санаа байна уу? Бид таныг сонсохыг хүсэж байна. Мессежээ илгээхэд бид аль болох хурдан хариу өгнө."}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onSubmit={handleSubmit}
                    className="space-y-2 sm:space-y-3 md:space-y-4 -mt-4 sm:-mt-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-xl mx-auto text-left"
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={lang}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full"
                          >
                            <div className="space-y-2">
                              <label
                                htmlFor="name"
                                className="text-xs sm:text-sm text-foreground/70 font-light block"
                              >
                                {lang === "en" ? "Name" : "Нэр"}
                              </label>

                              <Input
                                id="name"
                                name="name"
                                placeholder={
                                  lang === "en" ? "Your name" : "Таны нэр"
                                }
                                className="rounded-lg sm:rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors h-10 sm:h-12 text-xs sm:text-sm w-full"
                                required
                              />
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={lang}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className=""
                        >
                          <div className="space-y-1 sm:space-y-2">
                            <label
                              htmlFor="email"
                              className="text-xs sm:text-xs md:text-sm text-foreground/70 font-light block"
                            >
                              {lang === "en" ? "Email" : "Мэйл"}
                            </label>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              placeholder={`${lang === "en" ? "your@email.com" : "Нэр@gmail.com"}`}
                              className="rounded-lg sm:rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors h-10 sm:h-12 text-xs sm:text-sm"
                              required
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={lang}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mt-0 sm:mt-2"
                      >
                        <div className="space-y-1 sm:space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-xs sm:text-xs md:text-sm text-foreground/70 font-light block"
                          >
                            {lang === "en" ? "Subject" : "Гарчиг"}
                          </label>
                          <Input
                            name="subject"
                            id="subject"
                            placeholder={`${lang === "en" ? "How can we help?" : "Таньд юугаар туслах вэ?"}`}
                            className="rounded-lg sm:rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors h-10 sm:h-12 text-xs sm:text-sm"
                            required
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={lang}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className=""
                      >
                        <div className="space-y-1 sm:space-y-2">
                          <label
                            htmlFor="message"
                            className="text-xs sm:text-xs md:text-sm text-foreground/70 font-light block"
                          >
                            {lang === "en" ? "Message" : "Мессеж"}
                          </label>
                          <Textarea
                            name="message"
                            id="message"
                            placeholder={`${lang === "en" ? "Tell us about your project..." : "Төслийнхөө дэлгэрэнгүйг бичнэ үү..."}`}
                            rows={4}
                            className="rounded-lg sm:rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors resize-none text-xs sm:text-sm"
                            required
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 }}
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
                            type="submit"
                            size="lg"
                            onClick={() => handleSubmit}
                            disabled={isSubmitting}
                            className="w-full md:w-auto rounded-lg sm:rounded-xl border border-border/50 bg-background/30 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-foreground transition-colors hover:bg-background/50 hover:border-foreground focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            {isSubmitting
                              ? lang === "en"
                                ? "Sending..."
                                : "Илгээж байна..."
                              : lang === "en"
                                ? "Send Message"
                                : "Илгээх"}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </motion.p>
                      </AnimatePresence>
                    </motion.div>
                  </motion.form>
                </div>
              </motion.div>
            </div>
            <Footer isMenuOpen={isMenuOpen} lang={lang} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
