"use client";

import { Column, Row, Heading, Text, RevealFx, Grid } from "@once-ui-system/core";
import { problems } from "@/data";
import { Icon } from "@/components/ui/Icon";

export const ProblemSection = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="80" className="section-premium-sm">
      <Column maxWidth="l" fillWidth gap="xl">
        <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
          <RevealFx translateY="8">
            <Text variant="label-default-s" onBackground="brand-weak" className="badge-premium">
              Common Problems
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
              {problems.title}
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" delay={0.2}>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              {problems.description}
            </Text>
          </RevealFx>
        </Column>

        <Grid columns="3" s={{ columns: 1 }} gap="l">
          {problems.items.map((item, index) => (
            <RevealFx key={item.title} translateY="20" delay={0.3 + index * 0.15}>
              <div
                className="card-premium card-hover-lift"
                style={{ padding: "32px", height: "100%" }}
              >
                <Column gap="16" style={{ height: "100%" }}>
                  <Row
                    width="48"
                    height="48"
                    radius="l"
                    background="brand-alpha-weak"
                    horizontal="center"
                    vertical="center"
                  >
                    <div style={{ color: "var(--brand-on-background-strong)" }}>
                      <Icon name={item.icon} size={24} />
                    </div>
                  </Row>
                  <Heading as="h3" variant="heading-strong-m">
                    {item.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item.description}
                  </Text>
                </Column>
              </div>
            </RevealFx>
          ))}
        </Grid>
      </Column>
    </Column>
  );
};