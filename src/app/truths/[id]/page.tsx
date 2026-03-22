import { notFound } from "next/navigation";
import { truths } from "@/resources/truths";
import { Meta, Column, Text, Row, RevealFx } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { Metadata } from "next";
import { TruthCard } from "@/components/TruthCard";
import { RedirectToTruths } from "@/app/truths/[id]/RedirectToTruths";

export async function generateStaticParams() {
  return truths.map((truth) => ({
    id: truth.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const truth = truths.find((t) => t.id === id);

  if (!truth) return {};

  return Meta.generate({
    title: `En vérité en vérité... — Vérité #${truth.id}`,
    description: truth.quote,
    baseURL: baseURL,
    image: `/api/og/truth?id=${truth.id}`,
    path: `/truths/${truth.id}`,
  });
}

export default async function TruthDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const truth = truths.find((t) => t.id === id);

  if (!truth) {
    return notFound();
  }

  return (
    <Column fillWidth paddingX="l" paddingTop="l" gap="40" horizontal="center" vertical="center" style={{ minHeight: '80vh' }}>
      <meta httpEquiv="refresh" content={`0; url=${baseURL}/truths`} />
      <RedirectToTruths id={id} />
      <Column fillWidth maxWidth="s" gap="32" horizontal="center">
        <RevealFx translateY="16">
          <Text variant="body-default-s" onBackground="neutral-weak">
            Redirecting to the full gospel...
          </Text>
        </RevealFx>
        <TruthCard truth={truth} index={0} />
      </Column>
    </Column>
  );
}
