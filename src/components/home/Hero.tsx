"use client";

import { Column, Row, Text, Button, Badge, RevealFx, Avatar } from "@once-ui-system/core";
import { site, heroStats } from "@/data";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <Column
      fillWidth
      horizontal="center"
      paddingTop="80"
      paddingBottom="40"
      s={{ paddingTop: "40", paddingBottom: "20" }}
    >
      <Column maxWidth="s" horizontal="center" align="center" gap="m" className="hero-content-wrapper">
        {/* Badges */}
        <RevealFx translateY="8" delay={0}>
          <Row gap="8" wrap horizontal="center">
            {site.badges.map((badge) => (
              <span
                key={badge.label}
                className={
                  badge.variant === "premium-outline"
                    ? "badge-premium-outline"
                    : "badge-premium"
                }
              >
                {badge.label}
              </span>
            ))}
          </Row>
        </RevealFx>

        {/* Avatar with glow */}
        <RevealFx translateY="12" delay={0.1}>
          <div className="hero-avatar-container">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Row position="relative" marginBottom="m" horizontal="center">
                {/* Glow effect - centered behind the avatar */}
                <Row
                  position="absolute"
                  background="brand-alpha-medium"
                  radius="full"
                  className="hero-avatar-glow"
                  style={{
                    filter: "blur(48px)",
                    opacity: 0.5,
                  }}
                />
                <Row padding="12" radius="full">
                  <Avatar
                    className="floating"
                    src="/images/skai.jpg"
                    size="xl"
                  />
                </Row>
              </Row>
            </motion.div>
          </div>
        </RevealFx>

        {/* Main Title */}
        <RevealFx translateY="16" delay={0.2}>
          <Text
            variant="display-strong-xl"
            align="center"
            wrap="balance"
            className="gradient-text"
            as="h1"
          >
            {site.tagline}
          </Text>
        </RevealFx>

        {/* Subtitle */}
        <RevealFx translateY="16" delay={0.3}>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
          >
            {site.subtitle}
          </Text>
        </RevealFx>

        {/* Stats */}
        <RevealFx translateY="16" delay={0.4}>
          <Row gap="24" paddingTop="20" horizontal="center" wrap>
            {heroStats.map((stat) => (
              <Column key={stat.label} horizontal="center" gap="4">
                <Text
                  variant="heading-strong-xl"
                  className="hero-stat-value"
                >
                  {stat.value}
                </Text>
                <Text
                  variant="body-default-xs"
                  onBackground="neutral-weak"
                  className="hero-stat-label"
                >
                  {stat.label}
                </Text>
              </Column>
            ))}
          </Row>
        </RevealFx>

        {/* CTAs */}
        <RevealFx translateY="16" delay={0.5}>
          <Row gap="12" paddingTop="24" horizontal="center" wrap>
            <Button
              data-border="rounded"
              href={site.cta.primary.href}
              variant="primary"
              size="l"
              weight="default"
              arrowIcon
            >
              {site.cta.primary.label}
            </Button>
            <Button
              data-border="rounded"
              href={site.cta.secondary.href}
              variant="secondary"
              size="l"
              weight="default"
            >
              {site.cta.secondary.label}
            </Button>
          </Row>
        </RevealFx>
      </Column>
    </Column>
  );
};