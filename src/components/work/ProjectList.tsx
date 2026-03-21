"use client";

import { useState } from "react";
import { Column, Grid, Button, Row, RevealFx } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectListProps {
  allProjects: any[];
  range?: [number, number?];
}

export function ProjectList({ allProjects, range }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Development", "Data", "Automation"];

  const filteredProjects = allProjects.filter((post: any) => {
    if (activeFilter === "All") return true;
    return (post.metadata as any).category === activeFilter;
  });

  const sortedProjects = filteredProjects.sort((a: any, b: any) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="m" marginBottom="40" paddingX="l">
      {!range && (
        <Row wrap gap="8" marginBottom="32" horizontal="center">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "primary" : "secondary"}
              size="s"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </Row>
      )}
      <Grid columns="2" s={{ columns: 1 }} gap="l">
        {displayedProjects.map((post: any, index: number) => (
          <RevealFx key={post.slug} translateY="16" delay={index * 0.1}>
            <ProjectCard
              priority={index < 2}
              href={`/work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
            />
          </RevealFx>
        ))}
      </Grid>
    </Column>
  );
}
