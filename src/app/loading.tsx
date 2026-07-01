import { Column, Flex } from "@once-ui-system/core";

export default function Loading() {
  return (
    <Column fillWidth horizontal="center" paddingTop="80">
      <Flex fillWidth horizontal="center">
        <div className="loading-spinner" />
      </Flex>
    </Column>
  );
}