"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectToTruths({ id }: { id: string }) {
  const router = useRouter();

  useEffect(() => {
    // Perform redirect to main page with hash for specific focus
    router.replace(`/truths#${id}`);
  }, [id, router]);

  return null;
}
