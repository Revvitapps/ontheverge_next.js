"use client";

import { useEffect, useRef, useState } from "react";

// Shows a live, scaled-down render of a design route. The frame renders at a real
// desktop or phone width and is scaled to fit its box, so what she sees is the actual page.
export default function LivePreview({ src, title, device }: { src: string; title: string; device: "desktop" | "phone" }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const frameWidth = device === "desktop" ? 1440 : 390;

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / frameWidth);
      setBoxHeight(entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [frameWidth]);

  return (
    <div ref={box} className={`preview preview-${device}`} aria-hidden="true">
      {scale > 0 && (
        <iframe
          src={src}
          title={title}
          tabIndex={-1}
          loading="lazy"
          onLoad={(e) => {
            // Match the preview to the chooser's current light or dark mode.
            const mode = document.documentElement.getAttribute("data-theme");
            try {
              if (mode) e.currentTarget.contentDocument?.documentElement.setAttribute("data-theme", mode);
            } catch {}
          }}
          style={{
            width: frameWidth,
            height: Math.ceil(boxHeight / scale),
            transform: `scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}
