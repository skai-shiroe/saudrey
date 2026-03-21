import { getPosts } from "@/utils/utils";
import { ProjectList } from "./ProjectList";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  include?: string[];
}

export function Projects({ range, exclude, include }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Include only specified slugs (if provided)
  if (include && include.length > 0) {
    allProjects = allProjects.filter((post) => include.includes(post.slug));
  }

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  return <ProjectList allProjects={allProjects} range={range} />;
}
