"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c👋 Hey, you're curious — I like that.",
      "color: #6C9CFC; font-size: 16px; font-weight: bold; padding: 8px 0;"
    );
    console.log(
      "%cI'm Arjun Varshney, a PM who builds things.\nIf you're reading this, we should talk.\n\n📧 arjunvarshney13@gmail.com\n🔗 linkedin.com/in/arjun-varshney-/",
      "color: #A1A1AA; font-size: 12px; padding: 4px 0;"
    );
  }, []);

  return null;
}
