"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, about, blog, work, gallery, truths } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-US" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "8px 16px",
        transition: "all 0.3s ease",
      }}
    >
      <Row fillWidth horizontal="center">
        <Row
          className={`header-glass ${scrolled ? "header-glass-scrolled" : ""}`}
          border="neutral-alpha-weak"
          radius="m-4"
          shadow="l"
          padding="4"
          horizontal="center"
          style={{
            width: "fit-content",
            borderRadius: "100px",
            padding: "6px",
            transition: "all 0.3s ease",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
            {routes["/"] && (
              <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} aria-label="Home" />
            )}
            {routes["/about"] && (
              <>
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <Row s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                    aria-label="About"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <ToggleButton
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                    aria-label="About"
                  />
                </Row>
              </>
            )}
            {routes["/work"] && (
              <>
                <Row s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                    aria-label="Projects"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <ToggleButton
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                    aria-label="Projects"
                  />
                </Row>
              </>
            )}
            {routes["/blog"] && (
              <>
                <Row s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                    aria-label="Blog"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <ToggleButton
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                    aria-label="Blog"
                  />
                </Row>
              </>
            )}
            {routes["/truths"] && (
              <>
                <Row s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="sparkles"
                    href="/truths"
                    label={truths.label}
                    selected={pathname.startsWith("/truths")}
                    aria-label="Truths"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <ToggleButton
                    prefixIcon="sparkles"
                    href="/truths"
                    selected={pathname.startsWith("/truths")}
                    aria-label="Truths"
                  />
                </Row>
              </>
            )}
            {routes["/gallery"] && (
              <>
                <Row s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                    aria-label="Gallery"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <ToggleButton
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                    aria-label="Gallery"
                  />
                </Row>
              </>
            )}
            {display.themeSwitcher && (
              <>
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <ThemeToggle />
              </>
            )}
          </Row>
        </Row>
      </Row>
    </motion.header>
  );
};