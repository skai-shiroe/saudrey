"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectToTruths({ id }: { id: string }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main truths page with the specific truth ID as an anchor
    router.replace(`/truths#${id}`);
  }, [router, id]);

  return null;
}
