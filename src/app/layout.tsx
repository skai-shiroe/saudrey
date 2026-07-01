/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import type { opacity, SpacingToken } from "@once-ui-system/core";
import { Background, Column, Flex, Meta, RevealFx } from "@once-ui-system/core";
import { Footer, Header, Providers, RouteGuard } from "@/components";
import { baseURL, dataStyle, effects, fonts, home, style } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="fr"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        {/** biome-ignore lint/correctness/useUniqueElementIds: Need same ID for script injection */}
        <script
          id="theme-init"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for dynamic theme initialization script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  var config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};
                  Object.entries(config).forEach(function(e){root.setAttribute('data-'+e[0],e[1])});
                  var t=localStorage.getItem('data-theme');
                  var r=t&&t!=='system'?t:(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
                  root.setAttribute('data-theme',r);
                  Object.keys(config).forEach(function(k){var v=localStorage.getItem('data-'+k);if(v)root.setAttribute('data-'+k,v)});
                } catch(e) {
                  document.documentElement.setAttribute('data-theme','dark');
                }
              })();
            `,
          }}
        />
        {/* Load scroll progress as a non-blocking defer script */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Minimal scroll progress init
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll',function(){var e=document.getElementById('scroll-progress');if(e){var t=document.documentElement.scrollHeight-document.documentElement.clientHeight;var n=window.scrollY;e.style.width=(n/t)*100+'%'}},{passive:true});
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <div id="scroll-progress" />
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
