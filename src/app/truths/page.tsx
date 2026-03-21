import { Column, Heading, Text, RevealFx } from "@once-ui-system/core";
import { truths as truthsConfig } from "@/resources";
import { TruthsList } from "@/components/TruthsList";

export default function TruthsPage() {
  return (
    <Column fillWidth paddingX="l" paddingTop="80" gap="40" horizontal="center">
      <Column fillWidth maxWidth="m" gap="24">
        <RevealFx translateY="16">
          <Heading as="h1" variant="display-strong-l">
            {truthsConfig.title}
          </Heading>
        </RevealFx>
        <RevealFx translateY="16" delay={0.2}>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {truthsConfig.description}
          </Text>
        </RevealFx>
      </Column>
      
      <Column fillWidth maxWidth="l">
        <TruthsList />
      </Column>
    </Column>
  );
}
