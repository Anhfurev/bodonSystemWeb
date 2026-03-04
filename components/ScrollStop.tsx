import React from "react";
import { Hero } from "./Hero";

import About from "./About";
import { Services } from "./Services";
import { Contact } from "./Contact";
import { Journey } from "./Experience";
import { TechStack } from "./TechStack";

export const ScrollStop = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      <Hero isMenuOpen={isMenuOpen} />

      <About isMenuOpen={isMenuOpen} />

      <Services isMenuOpen={isMenuOpen} />

      <TechStack isMenuOpen={isMenuOpen} />

      <Journey isMenuOpen={isMenuOpen} />

      <Contact isMenuOpen={isMenuOpen} />
    </>
  );
};
