"use client";

import { Column, Heading, Text, RevealFx } from "@once-ui-system/core";
import type { SpacingToken } from "@once-ui-system/core";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  maxWidth?: "xs" | "s" | "m" | "l" | "xl";
  className?: string;
  delay?: number;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
}

export const Section = ({
  id,
  title,
  subtitle,
  description,
  children,
  maxWidth = "l",
  className = "",
  delay = 0,
  paddingTop = "80" as SpacingToken,
  paddingBottom = "80" as SpacingToken,
}: SectionProps) => {
  return (
    <Column
      id={id}
      fillWidth
      horizontal="center"
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      className={className}
    >
      <Column maxWidth={maxWidth} fillWidth gap="xl">
        {(title || subtitle) && (
          <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
            {subtitle && (
              <RevealFx translateY="8" delay={delay}>
                <Text variant="label-default-s" onBackground="brand-weak" className="badge-premium">
                  {subtitle}
                </Text>
              </RevealFx>
            )}
            {title && (
              <RevealFx translateY="12" delay={delay + 0.1}>
                <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
                  {title}
                </Heading>
              </RevealFx>
            )}
            {description && (
              <RevealFx translateY="16" delay={delay + 0.2}>
                <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
                  {description}
                </Text>
              </RevealFx>
            )}
          </Column>
        )}
        <RevealFx translateY="20" delay={delay + 0.3}>
          {children}
        </RevealFx>
      </Column>
    </Column>
  );
};