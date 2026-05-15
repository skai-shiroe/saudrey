"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Column, Text } from "@once-ui-system/core";

interface StatsCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatsCounter = ({ value, label, delay = 0 }: StatsCounterProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const isPercentage = value.includes("%");
  const isPlus = value.includes("+");

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const steps = 30;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [numericValue, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Column horizontal="center" gap="4">
        <span className="metric-value">
          {displayValue}{isPercentage ? "%" : ""}{isPlus ? "+" : ""}
        </span>
        <Text variant="body-default-s" onBackground="neutral-weak" align="center">
          {label}
        </Text>
      </Column>
    </motion.div>
  );
};