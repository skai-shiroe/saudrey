"use client";

import { Button, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { TechStack } from "@/components/ui/TechBadge";
import { projects } from "@/data";

export const CaseStudyHighlight = () => {
  // Use the "allcontrol" project as a case study
  const caseStudy = projects.find((p) => p.slug === "allcontrol");

  if (!caseStudy) return null;

  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="l" fillWidth gap="xl">
        <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
          <RevealFx translateY="8">
            <Text variant="label-default-s" onBackground="brand-weak" className="badge-premium">
              Case Study
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
              How to transform manual management into an automated system
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" delay={0.2}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              The {caseStudy.title} case: from a fragmented process to an intelligent platform.
            </Text>
          </RevealFx>
        </Column>

        <RevealFx translateY="20" delay={0.3}>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="card-premium glow-indigo"
            style={{ padding: "48px" }}
          >
            <Row fillWidth gap="xl" s={{ direction: "column" }} vertical="center">
              {/* Problem & Solution */}
              <Column flex={1} gap="24">
                {/* Problem */}
                <Column gap="12">
                  <Row gap="8" vertical="center">
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#EF4444",
                      }}
                    />
                    <Text variant="label-default-s" style={{ color: "#EF4444", fontWeight: 600 }}>
                      PROBLEM
                    </Text>
                  </Row>
                  <Text variant="body-default-l" onBackground="neutral-weak">
                    {caseStudy.problem}
                  </Text>
                </Column>

                {/* Solution */}
                <Column gap="12">
                  <Row gap="8" vertical="center">
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#10B981",
                      }}
                    />
                    <Text variant="label-default-s" style={{ color: "#10B981", fontWeight: 600 }}>
                      SOLUTION
                    </Text>
                  </Row>
                  <Text variant="body-default-l" onBackground="neutral-weak">
                    {caseStudy.solution}
                  </Text>
                </Column>

                {/* Impact Metrics */}
                {caseStudy.metrics && (
                  <Column gap="16">
                    <Row gap="8" vertical="center">
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#6366F1",
                        }}
                      />
                      <Text variant="label-default-s" style={{ color: "#6366F1", fontWeight: 600 }}>
                        IMPACT
                      </Text>
                    </Row>
                    <Row gap="32" wrap>
                      {caseStudy.metrics.map((metric) => (
                        <Column key={metric.label} gap="4">
                          <Text variant="display-strong-xs" className="gradient-text-subtle">
                            {metric.value}
                          </Text>
                          <Text variant="body-default-s" onBackground="neutral-weak">
                            {metric.label}
                          </Text>
                        </Column>
                      ))}
                    </Row>
                  </Column>
                )}

                {/* Tech */}
                <Column gap="12">
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    TECHNOLOGIES
                  </Text>
                  <TechStack items={caseStudy.tech} />
                </Column>

                <Row>
                  <Button
                    data-border="rounded"
                    href={`/work/${caseStudy.slug}`}
                    variant="primary"
                    size="l"
                    weight="default"
                    arrowIcon
                  >
                    Read the full case study
                  </Button>
                </Row>
              </Column>
            </Row>
          </motion.div>
        </RevealFx>
      </Column>
    </Column>
  );
};
