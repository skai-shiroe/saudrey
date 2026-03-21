"use client";

import { useState } from "react";
import { Column, Grid, Button, Row, RevealFx } from "@once-ui-system/core";
import Post from "./Post";

interface PostListProps {
  allPosts: any[];
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
}

export function PostList({
  allPosts,
  range,
  columns = "1",
  thumbnail = false,
  direction,
}: PostListProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Data", "Development", "Automation", "Strategy", "Story", "Career"];

  const filteredPosts = allPosts.filter((post: any) => {
    // Only show posts that have a category from our filter list
    const category = (post.metadata as any).category;
    if (activeFilter === "All") {
        return filters.includes(category);
    }
    return category === activeFilter;
  });

  const sortedPosts = filteredPosts.sort((a: any, b: any) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedPosts = range
    ? sortedPosts.slice(range[0] - 1, range.length === 2 ? range[1] : sortedPosts.length)
    : sortedPosts;

  return (
    <Column fillWidth gap="m" marginBottom="40">
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
      {displayedPosts.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth gap="16">
          {displayedPosts.map((post: any, index: number) => (
            <RevealFx key={post.slug} translateY="16" delay={index * 0.1}>
              <Post post={post} thumbnail={thumbnail} direction={direction} />
            </RevealFx>
          ))}
        </Grid>
      )}
    </Column>
  );
}
