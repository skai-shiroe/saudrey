"use client";

import { Column, Row, Heading, Text, RevealFx, Grid } from "@once-ui-system/core";
import { whyMe } from "@/data";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

const IconComponent = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon size={24} /> : null;
};

export const WhyMeSection = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="l" fillWidth gap="xl">
        <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
          <RevealFx translateY="8">
            <Text variant="label-default-s" onBackground="brand-weak" className="badge-premium">
              Differentiation
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
              {whyMe.title}
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" delay={0.2}>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              {whyMe.description}
            </Text>
          </RevealFx>
        </Column>

        <Grid columns="2" s={{ columns: 1 }} gap="l">
          {whyMe.items.map((item, index) => (
            <RevealFx key={item.title} translateY="20" delay={0.3 + index * 0.15}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="card-premium glow-hover"
                style={{ padding: "36px", height: "100%" }}
              >
                <Row gap="20" vertical="center" s={{ direction: "column", align: "start" }}>
                  <Row
                    width="48"
                    height="48"
                    radius="l"
                    background="brand-alpha-weak"
                    horizontal="center"
                    vertical="center"
                    style={{
                      color: "var(--brand-on-background-strong)",
                      minWidth: "48px",
                    }}
                  >
                    <IconComponent name={item.icon} />
                  </Row>
                  <Column gap="12">
                    <Heading as="h3" variant="heading-strong-l">
                      {item.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  </Column>
                </Row>
              </motion.div>
            </RevealFx>
          ))}
        </Grid>
      </Column>
    </Column>
  );
};