"use client";

import React from "react";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export function Contact({ isMenuOpen }: { isMenuOpen: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      alert("Message sent ✅");
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section
      style={{
        transform: `translateX(${isMenuOpen ? "-0%" : "0"})`,
        width: `${isMenuOpen ? "70%" : "100%"}`,
        transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
      }}
      id="contact"
      className="py-32 md:py-48 px-6 bg-muted/30 h-screen transition-transform duration-500"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto mt-[-130]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Let&apos;s work <span className="italic">together</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Send us a
            message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm text-muted-foreground font-light"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="rounded-xl border-border/50 bg-background focus:border-foreground/50 transition-colors h-12"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm text-muted-foreground font-light"
              >
                Email
              </label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="your@email.com"
                className="rounded-xl border-border/50 bg-background focus:border-foreground/50 transition-colors h-12"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm text-muted-foreground font-light"
            >
              Subject
            </label>
            <Input
              name="subject"
              id="subject"
              placeholder="How can we help?"
              className="rounded-xl border-border/50 bg-background focus:border-foreground/50 transition-colors h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm text-muted-foreground font-light"
            >
              Message
            </label>
            <Textarea
              name="message"
              id="message"
              placeholder="Tell us about your project..."
              rows={6}
              className="rounded-xl border-border/50 bg-background focus:border-foreground/50 transition-colors resize-none"
              required
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="submit"
              size="lg"
              onClick={() => handleSubmit}
              disabled={isSubmitting}
              className="w-full md:w-auto rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
