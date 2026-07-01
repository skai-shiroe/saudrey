"use client";

import { Column, Row, Heading, Text, RevealFx, Grid } from "@once-ui-system/core";
import { services } from "@/data";
import { Icon } from "@/components/ui/Icon";

export const ServicesSection = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="l" fillWidth gap="xl">
        <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
          <RevealFx translateY="8">
            <Text variant="label-default-s" onBackground="brand-weak" className="badge-premium">
              Services
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
              {services.title}
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" delay={0.2}>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              {services.description}
            </Text>
          </RevealFx>
        </Column>

        <Grid columns="2" s={{ columns: 1 }} gap="l">
          {services.items.map((service, index) => (
            <RevealFx key={service.title} translateY="20" delay={0.3 + index * 0.15}>
              <div
                className="card-premium glow-hover card-hover-lift"
                style={{ padding: "40px", height: "100%" }}
              >
                <Column gap="20" style={{ height: "100%" }}>
                  <Row
                    width="56"
                    height="56"
                    radius="l"
                    background="brand-alpha-weak"
                    horizontal="center"
                    vertical="center"
                    style={{ color: "var(--brand-on-background-strong)" }}
                  >
                    <Icon name={service.icon} size={28} />
                  </Row>
                  <Heading as="h3" variant="heading-strong-l">
                    {service.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {service.description}
                  </Text>
                  <Row gap="8" wrap>
                    {service.features.map((feature) => (
                      <span key={feature} className="tech-badge">
                        {feature}
                      </span>
                    ))}
                  </Row>
                </Column>
              </div>
            </RevealFx>
          ))}
        </Grid>
      </Column>
    </Column>
  );
};