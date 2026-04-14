import { truths } from "@/resources/truths";
import { Meta, Column, Text, RevealFx, Button } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { Metadata } from "next";
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
    title: `En vérité en vérité... — Vérité #${truth.id}`,
    description: truth.quote,
    baseURL: baseURL,
    image: `/api/og/truth?id=${truth.id}`,
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
