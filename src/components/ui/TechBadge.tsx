"use client";

import { Tag } from "@once-ui-system/core";

interface TechBadgeProps {
  name: string;
  icon?: string;
}

export const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <Tag size="l" prefixIcon={icon}>
      {name}
    </Tag>
  );
};

export const TechStack = ({ items }: { items: string[] }) => {
  return (
    <div className="tech-stack">
      {items.map((tech) => (
        <span key={tech} className="tech-badge">
          {tech}
        </span>
      ))}
    </div>
  );
};