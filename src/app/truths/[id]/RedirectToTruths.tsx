"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectToTruths({ id }: { id: string }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main truths page
    router.replace(`/truths`);
  }, [router]);

  return null;
}
