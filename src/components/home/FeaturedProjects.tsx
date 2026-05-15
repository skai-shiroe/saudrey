"use client";

import { Button, Column, Grid, Heading, Line, RevealFx, Row, Text } from "@once-ui-system/core";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TechStack } from "@/components/ui/TechBadge";
import { projects } from "@/data";

export const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="l" fillWidth gap="xl">
        <Column fillWidth gap="16" horizontal="center" align="center" maxWidth="m">
          <RevealFx translateY="8">
            <Text variant="label-default-s" onBackground="brand-weak" className="badge-premium">
              Featured Projects
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
              Solutions that speak for themselves
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" delay={0.2}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              Each project is a concrete answer to a real business problem.
            </Text>
          </RevealFx>
        </Column>

        {/* Featured Hero Project */}
        {featured.length > 0 && (
          <RevealFx translateY="20" delay={0.3}>
            <FeaturedHero project={featured[0]} />
          </RevealFx>
        )}

        {/* Other Featured Projects */}
        {featured.length > 1 && (
          <Grid columns="2" s={{ columns: 1 }} gap="l">
            {featured.slice(1, 3).map((project, index) => (
              <RevealFx key={project.slug} translateY="20" delay={0.4 + index * 0.15}>
                <FeaturedCard project={project} />
              </RevealFx>
            ))}
          </Grid>
        )}

        <RevealFx translateY="16" delay={0.6}>
          <Row horizontal="center" paddingTop="16">
            <Button
              data-border="rounded"
              href="/work"
              variant="secondary"
              size="l"
              weight="default"
              arrowIcon
            >
              View all projects
            </Button>
          </Row>
        </RevealFx>
      </Column>
    </Column>
  );
};

const FeaturedHero = ({ project }: { project: any }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-premium glow-indigo"
      style={{ padding: "48px", cursor: "pointer" }}
      onClick={() => router.push(`/work/${project.slug}`)}
    >
      <Row fillWidth gap="xl" s={{ direction: "column" }} vertical="center">
        <Column flex={1} gap="20">
          <span className="badge-premium" style={{ width: "fit-content" }}>
            {project.category}
          </span>
          <Heading as="h3" variant="display-strong-s">
            {project.title}
          </Heading>
          <Text variant="heading-default-m" onBackground="brand-weak">
            {project.tagline}
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {project.solution}
          </Text>
          <TechStack items={project.tech} />
          {project.metrics && (
            <Row gap="32" paddingTop="8">
              {project.metrics.map((metric: any) => (
                <Column key={metric.label} gap="4">
                  <Text variant="heading-strong-xl" className="gradient-text-subtle">
                    {metric.value}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {metric.label}
                  </Text>
                </Column>
              ))}
            </Row>
          )}
          <Row>
            <Button
              data-border="rounded"
              href={`/work/${project.slug}`}
              variant="primary"
              size="m"
              weight="default"
              arrowIcon
            >
              Discover the project
            </Button>
          </Row>
        </Column>
        {project.images[0] && (
          <Column flex={1} fillWidth>
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              width={800}
              height={450}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                border: "1px solid rgba(99, 102, 241, 0.1)",
              }}
            />
          </Column>
        )}
      </Row>
    </motion.div>
  );
};

const FeaturedCard = ({ project }: { project: any }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-premium glow-hover"
      style={{ padding: "36px", cursor: "pointer" }}
      onClick={() => router.push(`/work/${project.slug}`)}
    >
      <Column gap="16" style={{ height: "100%" }}>
        <span className="badge-premium" style={{ width: "fit-content" }}>
          {project.category}
        </span>
        <Heading as="h3" variant="heading-strong-l">
          {project.title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {project.problem.substring(0, 120)}...
        </Text>
        <TechStack items={project.tech} />
        <Row flex={1} vertical="end">
          <Button
            data-border="rounded"
            href={`/work/${project.slug}`}
            variant="secondary"
            size="s"
            weight="default"
            arrowIcon
          >
            Discover
          </Button>
        </Row>
      </Column>
    </motion.div>
  );
};
