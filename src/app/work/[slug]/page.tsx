import { notFound } from "next/navigation";
import {
  Meta,
  Schema,
  Button,
  Column,
  Heading,
  Text,
  Row,
  Line,
  RevealFx,
  Grid,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { projects, type Project } from "@/data";
import { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return Meta.generate({
    title: `${project.title} — ${project.tagline}`,
    description: project.problem,
    baseURL: baseURL,
    image: project.images[0]?.src || `/api/og/generate?title=${encodeURIComponent(project.title)}`,
    path: `${work.path}/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <Column as="section" maxWidth="l" horizontal="center" gap="l" paddingTop="80" paddingX="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${project.slug}`}
        title={project.title}
        description={project.problem}
        image={project.images[0]?.src || `/api/og/generate?title=${encodeURIComponent(project.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column maxWidth="s" gap="16" horizontal="center" align="center" paddingBottom="40">
        <span className="badge-premium">{project.category}</span>
        <Heading as="h1" variant="display-strong-l" align="center" wrap="balance">
          {project.title}
        </Heading>
        <Text variant="heading-default-l" onBackground="brand-weak" align="center" wrap="balance">
          {project.tagline}
        </Text>
      </Column>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <Column maxWidth="m" fillWidth>
          <ProjectGallery images={project.images} />
        </Column>
      )}

      {/* Main Content */}
      <Column maxWidth="m" fillWidth gap="xl">
        {/* Problem */}
        <Column className="card-premium" style={{ padding: "40px" }} gap="16">
          <Row gap="8" vertical="center">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
            <Text variant="label-default-s" style={{ color: "#EF4444", fontWeight: 600 }}>
              PROBLEM
            </Text>
          </Row>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {project.problem}
          </Text>
        </Column>

        {/* Solution */}
        <Column className="card-premium" style={{ padding: "40px" }} gap="16">
          <Row gap="8" vertical="center">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }} />
            <Text variant="label-default-s" style={{ color: "#10B981", fontWeight: 600 }}>
              SOLUTION
            </Text>
          </Row>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {project.solution}
          </Text>
        </Column>

        {/* Impact */}
        <Column className="card-premium" style={{ padding: "40px" }} gap="16">
          <Row gap="8" vertical="center">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6366F1" }} />
            <Text variant="label-default-s" style={{ color: "#6366F1", fontWeight: 600 }}>
              IMPACT
            </Text>
          </Row>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {project.impact}
          </Text>
          {project.metrics && (
            <Row gap="40" paddingTop="16" wrap>
              {project.metrics.map((metric) => (
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
          )}
        </Column>

        {/* Tech Stack */}
        <Column className="card-premium" style={{ padding: "40px" }} gap="16">
          <Text variant="label-default-s" onBackground="brand-weak" style={{ fontWeight: 600 }}>
            TECHNOLOGIES USED
          </Text>
          <Row gap="8" wrap>
            {project.tech.map((tech) => (
              <span key={tech} className="tech-badge" style={{ fontSize: "0.8rem", padding: "6px 14px" }}>
                {tech}
              </span>
            ))}
          </Row>
        </Column>
      </Column>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Column fillWidth gap="xl" horizontal="center" style={{ paddingTop: "60px", paddingBottom: "40px" }}>
          <Line maxWidth="40" />
          <Heading as="h2" variant="heading-strong-xl" align="center">
            Other projects
          </Heading>
          <Grid columns="2" s={{ columns: 1 }} gap="l">
            {relatedProjects.map((rp) => (
              <ProjectCard key={rp.slug} project={rp} />
            ))}
          </Grid>
        </Column>
      )}
    </Column>
  );
}