"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import StaggeredMenu from "@/components/StaggeredMenu";
import "./globals.css";
import React from "react";
import { MenuProvider } from "@/components/MenuContext";
import { socialItems } from "@/lib/mock";
import { menuItems } from "@/lib/mock";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenuProvider(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {showMenuProvider && (
          <MenuProvider value={{ isMenuOpen, setIsMenuOpen }}>
            <div>
              <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#000 dark:#fff"
                openMenuButtonColor="#000 dark:#fff"
                changeMenuColorOnOpen={true}
                colors={["#fff", "#000"]}
                logoUrl="/BODON-black.png"
                accentColor="#background"
                isFixed={true}
                onMenuOpen={() => setIsMenuOpen(true)}
                onMenuClose={() => setIsMenuOpen(false)}
              />
            </div>
            <div className="content-wrapper">{children}</div>
          </MenuProvider>
        )}
      </body>
    </html>
  );
}
