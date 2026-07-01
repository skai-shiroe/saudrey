"use client";

import { Column, Row, Heading, Text, RevealFx, Grid } from "@once-ui-system/core";
import { whyMe } from "@/data";
import { Icon } from "@/components/ui/Icon";

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
              <div
                className="card-premium glow-hover card-hover-scale"
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
                    <Icon name={item.icon} size={24} />
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
              </div>
            </RevealFx>
          ))}
        </Grid>
      </Column>
    </Column>
  );
};