"use client";

import {
  ClipboardList,
  BarChart3,
  TrendingDown,
  Building2,
  Globe2,
  Server,
  Kanban,
  Palette,
  Lightbulb,
  Code2,
  TrendingUp,
  Sparkles,
  Monitor,
  Database,
  Brain,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Static icon map — only icons used across the site are imported.
 * This enables proper tree-shaking and avoids loading 1000+ unused icons.
 */
const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  BarChart3,
  TrendingDown,
  Building2,
  Globe2,
  Server,
  Kanban,
  Palette,
  Lightbulb,
  Code2,
  TrendingUp,
  Sparkles,
  Monitor,
  Database,
  Brain,
  Wrench,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 24, className }: IconProps) => {
  const LucideIconComponent = iconMap[name];
  if (!LucideIconComponent) return null;
  return <LucideIconComponent size={size} className={className} />;
};