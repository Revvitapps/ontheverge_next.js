"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

// Same switch as on the design pages. The choice is saved, so every style opens in the mode she picked,
// and the live previews on this page flip with it.
export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setMode(t === "light" ? "light" : "dark");
  }, []);

  function choose(next: Mode) {
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("otv-theme", next);
    } catch {}
    document.querySelectorAll("iframe").forEach((f) => {
      try {
        f.contentDocument?.documentElement.setAttribute("data-theme", next);
      } catch {}
    });
  }

  return (
    <div className="theme-switch" role="group" aria-label="Color mode">
      <button type="button" aria-pressed={mode === "light"} onClick={() => choose("light")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <span>Light</span>
      </button>
      <button type="button" aria-pressed={mode === "dark"} onClick={() => choose("dark")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  );
}
