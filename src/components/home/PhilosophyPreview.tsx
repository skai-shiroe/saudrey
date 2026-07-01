"use client";

import { Column, Row, Heading, Text, Button, RevealFx, Avatar } from "@once-ui-system/core";
import { site } from "@/data";
export const PhilosophyPreview = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="l" fillWidth gap="xl">
        <RevealFx translateY="20" delay={0.3}>
          <div
            className="card-premium glow-hover card-hover-lift-sm"
            style={{ padding: "48px" }}
          >
            <Row gap="xl" s={{ direction: "column" }} vertical="center">
              <Column flex={1} gap="20">
                <span className="badge-premium" style={{ width: "fit-content" }}>
                  About
                </span>
                <Heading as="h2" variant="display-strong-s" wrap="balance">
                  Data as a lever, code as a tool, impact as a goal.
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  Every project I build starts from a simple conviction: technology should serve business,
                  not the other way around. Between system architect and product builder, I design digital solutions
                  that transform complexity into competitive advantage.
                </Text>
                <Row>
                  <Button
                    data-border="rounded"
                    href="/about"
                    variant="secondary"
                    size="l"
                    weight="default"
                    arrowIcon
                  >
                    Learn more
                  </Button>
                </Row>
              </Column>
              <Column flex={1} horizontal="center" gap="20">
                <Row position="relative" padding="12" radius="full">
                  <Row
                    position="absolute"
                    fill
                    background="brand-alpha-medium"
                    radius="full"
                    style={{ filter: "blur(48px)", opacity: 0.5 }}
                  />
                  <Avatar
                    className="floating"
                    src="/images/skai.jpg"
                    size="xl"
                  />
                </Row>
              </Column>
            </Row>
          </div>
        </RevealFx>
      </Column>
    </Column>
  );
};