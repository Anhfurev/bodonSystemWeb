"use client";

import React from "react";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useDarkContext } from "./DarkContext";

export function Contact({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useDarkContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      style={{
        transform: `translateX(${isMenuOpen ? "-0%" : "0"})`,
        width: `${isMenuOpen ? "69%" : "100%"}`,
        transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
      }}
      id="contact"
      className="py-32 md:py-48 px-6 h-screen transition-transform duration-500"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto mt-[-130]">
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
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
                {lang === "en" ? "Contact" : "Холбогдох"}
              </span>
              <h2 className="text-4xl md:text-5xl mt-4 font-light tracking-tight text-foreground">
                {lang === "en" ? "Let's work" : "Хамдтаа"}

                <span className="italic">
                  {lang === "en" ? " together" : " Ажиллацгаая"}
                </span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
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
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="space-y-2 ">
                    <label
                      htmlFor="name"
                      className="text-sm text-muted-foreground font-light mr-110"
                    >
                      {lang === "en" ? "Name" : "Нэр"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={`${lang === "en" ? "Your name" : "Таны нэр"}`}
                      className="rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors h-12"
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
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-muted-foreground font-light"
                  >
                    {lang === "en" ? "Email" : "Мэйл"}
                  </label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder={`${lang === "en" ? "your@email.com" : "Нэр@gmail.com"}`}
                    className="rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors h-12"
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
              className="mt-[-60]"
            >
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm text-muted-foreground font-light"
                >
                  {lang === "en" ? "Subject" : "Гарчиг"}
                </label>
                <Input
                  name="subject"
                  id="subject"
                  placeholder={`${lang === "en" ? "How can we help?" : "Таньд юугаар туслах вэ?"}`}
                  className="rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors h-12"
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
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm text-muted-foreground font-light"
                >
                  {lang === "en" ? "Message" : "Мессеж"}
                </label>
                <Textarea
                  name="message"
                  id="message"
                  placeholder={`${lang === "en" ? "Tell us about your project..." : "Төслийнхөө дэлгэрэнгүйг бичнэ үү..."}`}
                  rows={6}
                  className="rounded-xl border-border/50 bg-background/30 focus:border-foreground/50 transition-colors resize-none"
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
                  className="w-full md:w-auto rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group"
                >
                  {isSubmitting
                    ? lang === "en"
                      ? "Sending..."
                      : "Илгээж байна..."
                    : lang === "en"
                      ? "Send Message"
                      : "Илгээх"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
