import React from "react";
import { Hero } from "./Hero";

import About from "./About";
import { Services } from "./Services";
import { Contact } from "./Contact";

export const ScrollStop = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      <div className="snap-start ">
        <Hero isMenuOpen={isMenuOpen} />
      </div>
      <div className="snap-start">
        <About isMenuOpen={isMenuOpen} />
      </div>
      <div className="snap-start">
        <Services isMenuOpen={isMenuOpen} />
      </div>
      <div className="snap-start">
        <Contact isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
};
