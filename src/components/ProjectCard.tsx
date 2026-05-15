"use client";

import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { TechStack } from "@/components/ui/TechBadge";
import type { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-premium glow-hover"
      style={{ padding: "36px", height: "100%", cursor: "pointer" }}
      onClick={() => router.push(`/work/${project.slug}`)}
    >
      <Column gap="16" style={{ height: "100%" }}>
        <Row horizontal="between" vertical="center">
          <span className="badge-premium">{project.category}</span>
        </Row>
        <Heading as="h3" variant="heading-strong-xl">
          {project.title}
        </Heading>
        <Text variant="heading-default-s" onBackground="brand-weak">
          {project.tagline}
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {project.problem.substring(0, 120)}...
        </Text>
        <TechStack items={project.tech} />
        {project.metrics && (
          <Row gap="24" wrap paddingTop="8">
            {project.metrics.map((metric) => (
              <Column key={metric.label} gap="2">
                <Text variant="heading-strong-m" className="gradient-text-subtle">
                  {metric.value}
                </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {metric.label}
                </Text>
              </Column>
            ))}
          </Row>
        )}
        <Row flex={1} vertical="end">
          <Button
            data-border="rounded"
            href={`/work/${project.slug}`}
            variant="secondary"
            size="s"
            weight="default"
            arrowIcon
          >
            View case study
          </Button>
        </Row>
      </Column>
    </motion.div>
  );
};
