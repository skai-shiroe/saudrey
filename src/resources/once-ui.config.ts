import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://www.senouaudrey.me";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
  "/truths": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {
  "/work/lapepiniereskm": false,
};

// LOCAL FONTS — Geist via next/font/local (no remote fetch)
import localFont from "next/font/local";

const heading = localFont({
  src: [
    {
      path: "../../public/fonts/GeistVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const body = localFont({
  src: [
    {
      path: "../../public/fonts/GeistVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const label = localFont({
  src: [
    {
      path: "../../public/fonts/GeistVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-label",
  display: "swap",
});

const code = localFont({
  src: [
    {
      path: "../../public/fonts/GeistMonoVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-code",
  display: "swap",
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// PREMIUM DESIGN SYSTEM — Dark mode, Indigo/Violet palette
const style: StyleConfig = {
  theme: "dark",
  neutral: "slate",
  brand: "indigo",
  accent: "violet",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 300,
  },
  gradient: {
    display: true,
    opacity: 30,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: -10,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: true,
    opacity: 8,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "PersonalWebsite",
  name: "Audrey Senou",
  description: home.description,
  email: "senou.audrey.dev@gmail.com",
};

// social links
const sameAs: SameAsConfig = {
  threads: "https://www.threads.com/@senou_audrey",
  linkedin: "https://www.linkedin.com/in/senou-k-audrey/",
  discord: "https://discord.gg/T2vA7Tm86b",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: true,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};