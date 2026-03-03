"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDarkContext } from "./DarkContext";
import LogoLoop from "./LogoLoop";
import {
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiNextdotjs,
  SiFlutter,
  SiReact,
  SiSwift,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const technologies = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <SiDotnet />,
    title: "ASP.NET Core",
    href: "https://dotnet.microsoft.com",
  },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiReact />, title: "React Native", href: "https://reactnative.dev" },
  {
    node: <SiSwift />,
    title: "Swift",
    href: "https://developer.apple.com/swift/",
  },
  { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },

  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  {
    node: <SiKubernetes />,
    title: "Kubernetes",
    href: "https://kubernetes.io",
  },
];

export function TechStack({ isMenuOpen }: { isMenuOpen: boolean }) {
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
      id="techstack"
      ref={ref}
      className=" px-6 min-h-screen flex flex-col justify-center"
    >
      <div
        className="mx-auto w-full"
        style={{
          width: isMenuOpen ? `calc(100% - ${menuWidth}px)` : "100%",
          transition: "width 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
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
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-20"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="text-sm uppercase tracking-[0.3em] text-foreground/70 mb-6 block">
                    {lang === "en" ? "Technologies" : "Технологиуд"}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-light mt-6 tracking-tight text-foreground">
                    {lang === "en" ? "Our " : "Бидний "}{" "}
                    <span className="italic">
                      {lang === "en" ? "Tech Stack" : "Ашигладаг технологиуд"}
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
              {technologies.map((tech, i) => (
                <motion.a
                  key={i}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-background/40 border border-border/40 hover:border-foreground/20 hover:bg-background/60 transition-all duration-300"
                >
                  <div className="text-2xl text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {tech.node}
                  </div>
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {tech.title}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="w-full">
              <LogoLoop
                logos={technologies}
                speed={40}
                direction="left"
                logoHeight={60}
                gap={80}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
