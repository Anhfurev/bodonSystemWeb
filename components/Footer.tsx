import { MapPin, Phone, Building2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useMenuMetrics } from "../lib/utils";
import { useDarkContext } from "./DarkContext";

export function Footer({
  isMenuOpen,
  lang: propLang,
}: {
  isMenuOpen: boolean;
  lang?: "en" | "mn";
}) {
  const { lang: contextLang } = useDarkContext();
  const lang = propLang || contextLang;
  const { menuWidth, isMobile } = useMenuMetrics();
  return (
    <motion.div
      animate={{ x: isMobile ? 0 : isMenuOpen ? -menuWidth / 2 : 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: isMenuOpen ? 0 : 0.1,
      }}
      className="flex flex-col justify-center"
    >
      <footer
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
        className="relative overflow-hidden border-t border-border/40 mx-auto mt-2 sm:mt-5"
      >
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.03] text-foreground"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="100,50 250,120 180,280 50,200"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <polygon
              points="400,80 550,30 600,180 480,220 380,150"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <polygon
              points="700,100 850,60 900,200 780,260 680,180"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <polygon
              points="950,50 1100,100 1080,250 950,280 880,160"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-muted/50 flex-shrink-0">
                <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {lang === "en" ? "Company" : "Компани"}
                </span>
                <span className="text-xs sm:text-sm text-foreground">
                  {lang === "en" ? "Bodon Systems LLC" : "“Бодон системс” ХХК"}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-muted/50 flex-shrink-0">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {lang === "en" ? "Address" : "Хаяг"}
                </span>
                <span className="text-xs sm:text-sm text-foreground">
                  {lang === "en"
                    ? "UB Tower, Bayanzurkh district"
                    : "UB Tower, Баянзүрх дүүрэг"}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-muted/50 flex-shrink-0">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5" />
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {lang === "en" ? "Contact" : "Холбоо барих"}
                </span>
                <a
                  href="tel:+97699343599"
                  className="text-xs sm:text-sm text-foreground hover:underline"
                >
                  +976 9934 3599
                </a>
              </div>
            </div>
          </div>

          <div className="my-3 sm:my-4 md:my-5 h-px bg-linear-to-r from-transparent via-border to-transparent" />

          <div className="flex flex-col gap-2 text-xs sm:text-sm md:flex-row md:items-center md:justify-between">
            <span className="text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              {lang === "en" ? "Bodon Systems LLC" : "“Бодон системс” ХХК"}
            </span>

            <a
              href="mailto:info@bodon.mn"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              bodonsystem@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
