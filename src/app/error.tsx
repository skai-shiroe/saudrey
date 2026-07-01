"use client";

import { Column, Heading, Text, Button } from "@once-ui-system/core";

export default function PageError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Column as="section" fill center paddingBottom="160" gap="l">
      <Text marginBottom="s" variant="display-strong-xl">
        Oups!
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Something went wrong
      </Heading>
      <Text onBackground="neutral-weak" align="center" wrap="balance">
        An unexpected error occurred. Please try again.
      </Text>
      <Button
        data-border="rounded"
        variant="primary"
        size="l"
        weight="default"
        onClick={reset}
      >
        Try again
      </Button>
    </Column>
  );
}