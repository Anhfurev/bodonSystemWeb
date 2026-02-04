"use client";
import React from "react";
import { StaggeredMenu } from "./StaggeredMenu";
const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export const Menu = () => {
  return (
    <div className="z-10" style={{ background: "#1a1a1a" }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#000 dark:#fff"
        openMenuButtonColor="#000 dark:#fff"
        changeMenuColorOnOpen={true}
        colors={["#35c9fb", "#006eff"]}
        logoUrl="/BODON-black.png"
        accentColor="#background"
        isFixed={true}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
};
