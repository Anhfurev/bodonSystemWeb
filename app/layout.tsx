"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import StaggeredMenu from "@/components/StaggeredMenu";
import "./globals.css";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import React from "react";
import { MenuProvider } from "@/components/MenuContext";
import { socialItems } from "@/lib/mock";
import { menuItems } from "@/lib/mock";
import { DarkProvider } from "@/components/DarkContext";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuProvider, setShowMenuProvider] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [textColor, setTextColor] = useState("#000");
  const [textColorSc, setTextColorSc] = useState("#000");
  const [lang, setLang] = useState<"en" | "mn">("en");
  function isItDark(dark: boolean) {
    localStorage.setItem("isDark", dark ? "true" : "false");
    setIsDark(dark);
    setTextColor(dark ? "#fff" : "muted-foreground");
    setTextColorSc(dark ? "muted-foreground" : "#000");
  }
  function Changelanguage() {
    setLang(lang === "en" ? "mn" : "en");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenuProvider(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Bodon Systems</title>
        <meta name="description" content="Bodon Systems" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {showMenuProvider && (
          <DarkProvider lang={lang} isDark={isDark}>
            <MenuProvider value={{ isMenuOpen, setIsMenuOpen }}>
              <div className="flex">
                <AnimatedThemeToggler
                  isItDark={isItDark}
                  className="z-10 fixed right-28 top-10"
                  color="#000"
                />
                <Button
                  onClick={Changelanguage}
                  className="z-10 fixed right-36 top-8.5 bg-foreground "
                >
                  <Languages size={40} strokeWidth={1.75} />
                </Button>

                <StaggeredMenu
                  isDark={isDark}
                  position="right"
                  items={menuItems}
                  socialItems={socialItems}
                  displaySocials={true}
                  displayItemNumbering={true}
                  menuButtonColor="foreground"
                  openMenuButtonColor="#000 dark:#fff"
                  changeMenuColorOnOpen={true}
                  colors={[`${textColor}`, `${textColorSc}`]}
                  logoUrl={"/BODON-black.png"}
                  accentColor="#background"
                  isFixed={true}
                  onMenuOpen={() => setIsMenuOpen(true)}
                  onMenuClose={() => setIsMenuOpen(false)}
                />
              </div>
              <div className="content-wrapper">{children}</div>
            </MenuProvider>
          </DarkProvider>
        )}
      </body>
    </html>
  );
}
