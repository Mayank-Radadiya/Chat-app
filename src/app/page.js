// app/page.js

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /auth on page load
    router.push("/auth");
  }, [router]);

  return null; // Optional: You can return null or a loading indicator
}
