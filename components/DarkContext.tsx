import { createContext, useContext, useState } from "react";

type DarkContextType = {
  isDark: boolean;
  lang: "en" | "mn";
};

const DarkContext = createContext<DarkContextType | undefined>(undefined);

export const useDarkContext = () => {
  const context = useContext(DarkContext);
  if (!context) {
    throw new Error("useDarkContext must be used within a DarkProvider");
  }
  return context;
};

export const DarkProvider = ({
  children,
  isDark,
  lang,
}: {
  children: any;
  isDark: boolean;
  lang: "en" | "mn";
}) => {
  return (
    <DarkContext.Provider value={{ isDark, lang }}>
      {children}
    </DarkContext.Provider>
  );
};
