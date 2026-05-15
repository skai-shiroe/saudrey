"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  RevealFx,
  Grid,
} from "@once-ui-system/core";
import { expertise } from "@/data";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

const IconComponent = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon size={24} /> : null;
};

const levelBarConfig = (level: string) => {
  switch (level) {
    case "Expert":
      return {
        width: 100,
        background:
          "linear-gradient(90deg, rgba(139,92,246,0.95) 0%, rgba(168,85,247,0.75) 100%)",
      };

    case "Advanced":
      return {
        width: 66,
        background:
          "linear-gradient(90deg, rgba(139,92,246,0.75) 0%, rgba(124,58,237,0.55) 100%)",
      };

    default:
      return {
        width: 33,
        background:
          "linear-gradient(90deg, rgba(139,92,246,0.45) 0%, rgba(99,102,241,0.35) 100%)",
      };
  }
};

export const ExpertiseSection = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="l" fillWidth gap="xl">
        {/* HEADER */}
        <Column
          fillWidth
          gap="16"
          horizontal="center"
          align="center"
          maxWidth="m"
        >
          <RevealFx translateY="8">
            <Text
              variant="label-default-s"
              onBackground="brand-weak"
              className="badge-premium"
            >
              Tech Stack
            </Text>
          </RevealFx>

          <RevealFx translateY="12" delay={0.1}>
            <Heading
              as="h2"
              variant="display-strong-xs"
              wrap="balance"
              align="center"
            >
              {expertise.title}
            </Heading>
          </RevealFx>

          <RevealFx translateY="16" delay={0.2}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              {expertise.description}
            </Text>
          </RevealFx>
        </Column>

        {/* GRID */}
        <Grid
          columns="3"
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="l"
          style={{
            alignItems: "stretch",
          }}
        >
          {expertise.categories.map((category, index) => (
            <RevealFx
              key={category.title}
              translateY="20"
              delay={0.3 + index * 0.1}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="card-premium"
                style={{
                  padding: "28px",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  minHeight: "320px",
                  display: "flex",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <Column
                  gap="20"
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  {/* TOP */}
                  <Column gap="16">
                    <Row
                      width="48"
                      height="48"
                      radius="m"
                      background="brand-alpha-weak"
                      horizontal="center"
                      vertical="center"
                      style={{
                        color: "var(--brand-on-background-strong)",
                      }}
                    >
                      <IconComponent name={category.icon} />
                    </Row>

                    <Heading as="h3" variant="heading-strong-m">
                      {category.title}
                    </Heading>
                  </Column>

                  {/* SKILLS */}
                  <Column gap="12">
                    {category.skills.map((skill) => {
                      const bar = levelBarConfig(skill.level);

                      return (
                        <Column key={skill.name} gap="8">
                          <Row
                            horizontal="between"
                            vertical="center"
                            gap="12"
                          >
                            <Text
                              variant="body-default-s"
                              onBackground="neutral-weak"
                            >
                              {skill.name}
                            </Text>

                            <Text
                              variant="body-default-xs"
                              onBackground="neutral-medium"
                            >
                              {skill.level}
                            </Text>
                          </Row>

                          {/* BAR */}
                          <div
                            style={{
                              width: "100%",
                              height: "6px",
                              borderRadius: "999px",
                              background:
                                "rgba(255,255,255,0.08)",
                              overflow: "hidden",
                            }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${bar.width}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                ease: "easeOut",
                              }}
                              style={{
                                height: "100%",
                                borderRadius: "999px",
                                background: bar.background,
                                boxShadow: "0 0 12px rgba(139,92,246,0.25)",
                              }}
                            />
                          </div>
                        </Column>
                      );
                    })}
                  </Column>
                </Column>
              </motion.div>
            </RevealFx>
          ))}
        </Grid>
      </Column>
    </Column>
  );
};