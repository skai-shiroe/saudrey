"use client";

import { Column, Row, Heading, Text, Button, RevealFx } from "@once-ui-system/core";
import { site, contact } from "@/data";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <Column fillWidth horizontal="center" paddingY="80">
      <Column maxWidth="m" fillWidth horizontal="center" align="center" gap="l">
        <RevealFx translateY="8">
          <span className="badge-premium">Contact</span>
        </RevealFx>

        <RevealFx translateY="12" delay={0.1}>
          <Heading as="h2" variant="display-strong-m" wrap="balance" align="center">
            {contact.title}
          </Heading>
        </RevealFx>

        <RevealFx translateY="16" delay={0.2}>
          <Text variant="heading-default-m" onBackground="neutral-weak" align="center" wrap="balance">
            {contact.description}
          </Text>
        </RevealFx>

        <RevealFx translateY="16" delay={0.3}>
          <Row paddingTop="16" gap="12" horizontal="center" wrap>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                data-border="rounded"
                href={contact.cta.href}
                variant="primary"
                size="l"
                weight="default"
                arrowIcon
              >
                {contact.cta.label}
              </Button>
            </motion.div>
          </Row>
        </RevealFx>

        <RevealFx translateY="16" delay={0.4}>
          <Row gap="24" paddingTop="32" horizontal="center" wrap>
            <Button
              data-border="rounded"
              href={site.social.github}
              variant="secondary"
              size="s"
              weight="default"
              prefixIcon="github"
              label="GitHub"
            />
            <Button
              data-border="rounded"
              href={site.social.linkedin}
              variant="secondary"
              size="s"
              weight="default"
              prefixIcon="linkedin"
              label="LinkedIn"
            />
            <Button
              data-border="rounded"
              href={site.social.threads}
              variant="secondary"
              size="s"
              weight="default"
              prefixIcon="threads"
              label="Threads"
            />
            <Button
              data-border="rounded"
              href={`mailto:${site.email}`}
              variant="secondary"
              size="s"
              weight="default"
              prefixIcon="email"
              label="Email"
            />
          </Row>
        </RevealFx>
      </Column>
    </Column>
  );
};