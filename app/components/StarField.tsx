'use client';

import { useEffect, useRef } from 'react';

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = document.createDocumentFragment();

    /* ── Static twinkling stars ── */
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('span');
      const size = Math.random() * 2.2 + 0.4; // 0.4 – 2.6px
      const duration = 2 + Math.random() * 5;
      const delay = Math.random() * 6;
      star.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${Math.random() > 0.85 ? '#c4b5fd' : 'white'};
        animation: twinkle ${duration}s ${delay}s ease-in-out infinite;
      `;
      fragment.appendChild(star);
    }

    /* ── Shooting stars ── */
    const shootCount = 6;
    for (let i = 0; i < shootCount; i++) {
      const shoot = document.createElement('span');
      const delay = Math.random() * 12;
      const duration = 2.5 + Math.random() * 3;
      shoot.style.cssText = `
        position: absolute;
        left: ${20 + Math.random() * 70}%;
        top: ${Math.random() * 45}%;
        height: 1.5px;
        background: linear-gradient(90deg, rgba(255,255,255,0.9), rgba(196,181,253,0.6), transparent);
        border-radius: 9999px;
        animation: shooting ${duration}s ${delay}s linear infinite;
        opacity: 0;
      `;
      fragment.appendChild(shoot);
    }

    container.appendChild(fragment);

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    />
  );
}
