"use client";

import { useState } from "react";
import { Column, Grid, Button, Row, RevealFx } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectListProps {
  allProjects: any[];
  range?: [number, number?];
  columns?: number;
}

export function ProjectList({ allProjects, range, columns = 2 }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Development", "Data", "Automation"];

  const filteredProjects = allProjects.filter((post: any) => {
    if (activeFilter === "All") return true;
    return activeFilter && (post.metadata as any).category === activeFilter;
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
      <Grid columns={columns.toString() as any} s={{ columns: 1 }} gap="l">
        {displayedProjects.map((post: any, index: number) => (
          <RevealFx key={post.slug} translateY="16" delay={index * 0.1}>
            <ProjectCard
              project={{
                slug: post.slug,
                title: post.metadata.title,
                tagline: post.metadata.summary || "",
                category: post.metadata.category || "Project",
                problem: post.metadata.summary || "",
                solution: "",
                impact: "",
                tech: post.metadata.tech || [],
                images: post.metadata.images?.map((src: string) => ({ src, alt: post.metadata.title, width: 16, height: 9 })) || [],
                metrics: post.metadata.metrics || [],
              }}
            />
          </RevealFx>
        ))}
      </Grid>
    </Column>
  );
}
