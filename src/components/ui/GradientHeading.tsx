"use client";

import { Heading, RevealFx } from "@once-ui-system/core";
import { ReactNode } from "react";

interface GradientHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  variant: "display-strong-xl" | "display-strong-l" | "display-strong-m" | "display-strong-s" | "display-strong-xs" | "heading-strong-xl" | "heading-strong-l" | "heading-strong-m";
  children: ReactNode;
  align?: "center" | "left" | "right";
  delay?: number;
  className?: string;
  wrap?: boolean;
}

export const GradientHeading = ({
  as = "h1",
  variant = "display-strong-xl",
  children,
  align = "center",
  delay = 0,
  className = "",
  wrap = true,
}: GradientHeadingProps) => {
  return (
    <RevealFx translateY="16" delay={delay}>
      <Heading
        as={as}
        variant={variant}
        align={align}
        wrap={wrap ? "balance" : undefined}
        className={`gradient-text ${className}`}
      >
        {children}
      </Heading>
    </RevealFx>
  );
};