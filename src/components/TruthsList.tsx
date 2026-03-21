"use client";

import { Column, Heading, Grid, Text } from "@once-ui-system/core";
import { truths } from "@/resources/truths";
import { TruthCard } from "./TruthCard";

export const TruthsList = () => {
  return (
    <Column fillWidth gap="40" marginTop="80">
      <Column gap="8">
        <Heading as="h2" variant="display-strong-xs">
          Les Vérités du Dev
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Sagesse tech et réflexions informatiques.
        </Text>
      </Column>
      <Grid columns="2" s={{ columns: 1 }} gap="l">
        {truths.map((truth, index) => (
          <TruthCard key={truth.id} truth={truth} index={index} />
        ))}
      </Grid>
    </Column>
  );
};
