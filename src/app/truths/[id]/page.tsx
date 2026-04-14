import type { Metadata } from "next";
import { baseURL } from "@/resources";
import { truths } from "@/resources/truths";
import { Button, Column, Meta, RevealFx, Schema, Text } from "@once-ui-system/core";
import { TruthCard } from "@/components/TruthCard";

export const dynamicParams = true;

export async function generateStaticParams() {
  return truths.map((truth) => ({ id: String(truth.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const truth = truths.find((t) => String(t.id) === String(id));

  if (!truth) return {};

  return Meta.generate({
    title: `"${truth.quote}" — Audrey Senou`,
    description: `Découvrez la vérité #${truth.id} de la série "En vérité en vérité..." par Audrey Senou.`,
    baseURL: baseURL,
    image: `${baseURL}/api/og/truth?id=${truth.id}`,
    path: `/truths/${truth.id}`,
  });
}

export default async function TruthDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const truth = truths.find((t) => String(t.id) === String(id));

  // Even if truth not found, redirect to /truths — never show 404 for this route
  return (
    <Column
      fillWidth
      paddingX="l"
      paddingTop="l"
      gap="40"
      horizontal="center"
      vertical="center"
      style={{ minHeight: "80vh" }}
    >
      {truth ? (
        <Column fillWidth maxWidth="s" gap="32" horizontal="center">
          <Schema
            as="article"
            baseURL={baseURL}
            title={`"${truth.quote}" — Audrey Senou`}
            description={truth.quote}
            path={`/truths/${truth.id}`}
            image={`${baseURL}/api/og/truth?id=${truth.id}`}
          />
          <TruthCard truth={truth} index={0} />
          <RevealFx translateY="16" delay={0.4}>
            <Button
              href="/truths"
              variant="secondary"
              size="s"
              prefixIcon="chevronLeft"
              label="Voir toutes les vérités"
            />
          </RevealFx>
        </Column>
      ) : (
        <Column gap="16" horizontal="center">
          <RevealFx translateY="16">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Vérité non trouvée.
            </Text>
          </RevealFx>
          <Button
            href="/truths"
            variant="secondary"
            size="s"
            label="Retourner à la liste"
          />
        </Column>
      )}
    </Column>
  );
}
