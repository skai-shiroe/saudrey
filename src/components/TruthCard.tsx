"use client";

import { Column, Text, Row, Icon, RevealFx, IconButton, useToast } from "@once-ui-system/core";
import { Truth } from "@/resources/truths";

interface TruthCardProps {
  truth: Truth;
  index: number;
}

export const TruthCard = ({ truth, index }: TruthCardProps) => {
  const { addToast } = useToast();

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: "En vérité en vérité...",
      text: `"${truth.quote.length > 40 ? truth.quote.slice(0, 40).trimEnd() + "…" : truth.quote}" — ${truth.author}`,
      url: `${window.location.origin}/truths#${truth.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text} \n${shareData.url}`);
        addToast({
          variant: "success",
          message: "Truth copied to clipboard!",
        });
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <>
      {/* <div id={truth.id} style={{ scrollMarginTop: "100px" }} /> */}
      <RevealFx translateY="16" delay={index * 0.15}>
        <Column
          fillWidth
          padding="32"
          radius="xl"
          background="neutral-alpha-weak"
          border="neutral-alpha-weak"
          gap="16"
          style={{
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
            transition: "transform 0.3s ease, border-color 0.3s ease",
          }}
        onMouseEnter={(e: any) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.borderColor = "var(--brand-alpha-strong)";
        }}
        onMouseLeave={(e: any) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "var(--neutral-alpha-weak)";
        }}
      >
        <Row fillWidth horizontal="start">
          <Icon name="chevronRight" size="m" onBackground="brand-strong" />
          <Icon name="chevronRight" size="m" onBackground="brand-strong" style={{ marginLeft: "-12px" }} />
        </Row>
        
        <Text
          variant="heading-strong-l"
          onBackground="neutral-strong"
          style={{ fontStyle: "italic", lineHeight: "1.6" }}
        >
          {truth.quote}
        </Text>

        <Row fillWidth horizontal="end" vertical="center" gap="8" paddingTop="24">
          <Column horizontal="end" flex={1}>
            <Text variant="body-default-s" onBackground="brand-medium">
              — {truth.author}
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {truth.date}
            </Text>
          </Column>
          <IconButton
            icon="share"
            variant="secondary"
            size="s"
            onClick={handleShare}
            tooltip="Share this truth"
          />
        </Row>

        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "150px",
            height: "150px",
            background: "var(--brand-alpha-medium)",
            filter: "blur(80px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      </Column>
    </RevealFx>
    </>
  );
};
