"use client";

import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TechStack } from "@/components/ui/TechBadge";
import type { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const coverImage = project.images[0];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-premium glow-hover"
      style={{ height: "100%", cursor: "pointer", overflow: "hidden" }}
      onClick={() => router.push(`/work/${project.slug}`)}
    >
      {/* Cover Image */}
      {coverImage && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            overflow: "hidden",
          }}
        >
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              transition: "transform 0.3s ease",
            }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, var(--surface-card) 0%, transparent 60%)",
            }}
          />
        </div>
      )}

      <Column gap="16" style={{ padding: coverImage ? "20px 24px 24px" : "36px", height: coverImage ? "auto" : "100%" }}>
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
