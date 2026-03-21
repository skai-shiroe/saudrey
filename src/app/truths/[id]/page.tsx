import { notFound } from "next/navigation";
import { truths } from "@/resources/truths";
import { Meta, Column, Heading, Text, Row, Icon } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { Metadata } from "next";
import { TruthCard } from "@/components/TruthCard";

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
    title: `Vérité #${truth.id} — Audrey Senou`,
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
    notFound();
  }

  return (
    <Column fillWidth paddingX="l" paddingTop="l" gap="40" horizontal="center" vertical="center" style={{ minHeight: '80vh' }}>
      <Column fillWidth maxWidth="s" gap="32">
        <Row horizontal="start">
            <SmartLink href="/truths" style={{ textDecoration: 'none' }}>
                <Row vertical="center" gap="8">
                    <Icon name="arrowLeft" size="s" onBackground="neutral-weak" />
                    <Text variant="label-default-s" onBackground="neutral-weak">Back to all truths</Text>
                </Row>
            </SmartLink>
        </Row>

        <TruthCard truth={truth} index={0} />
      </Column>
    </Column>
  );
}

// Simple SmartLink internal wrapper if not imported
function SmartLink({ href, children, style }: any) {
    return <a href={href} style={style}>{children}</a>
}
