'use client';

import { useEffect, useRef } from 'react';

/* ─── Aurora + Particle canvas background ─────────────────────── */
export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    /* ── Resize ── */
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      initOrbs();
    };
    window.addEventListener('resize', onResize);

    /* ── Aurora orbs ── */
    type Orb = {
      x: number; y: number; vx: number; vy: number;
      r: number; hue: number; alpha: number;
    };
    let orbs: Orb[] = [];

    const initOrbs = () => {
      orbs = Array.from({ length: 5 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 250 + Math.random() * 350,
        hue: [270, 290, 310, 320, 260][Math.floor(Math.random() * 5)],
        alpha: 0.10 + Math.random() * 0.14,
      }));
    };
    initOrbs();

    /* ── Floating particles ── */
    type Particle = {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; hue: number;
    };
    const particles: Particle[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 900),
      vx: (Math.random() - 0.5) * 0.25,
      vy: -0.15 - Math.random() * 0.25,
      size: 0.5 + Math.random() * 1.8,
      alpha: 0.3 + Math.random() * 0.6,
      hue: Math.random() > 0.4 ? 270 + Math.random() * 60 : 0,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* ── Orbs ── */
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;

        // gentle wave modulation
        const pulse = Math.sin(t * 0.008 + o.hue) * 0.04;
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * (1 + pulse));
        grad.addColorStop(0, `hsla(${o.hue}, 80%, 55%, ${o.alpha + pulse})`);
        grad.addColorStop(0.4, `hsla(${o.hue + 20}, 70%, 45%, ${(o.alpha * 0.5)})`);
        grad.addColorStop(1, 'hsla(0,0%,0%,0)');

        ctx.globalCompositeOperation = 'screen';
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r * (1 + pulse), 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      /* ── Particles ── */
      ctx.globalCompositeOperation = 'lighter';
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;

        const flicker = 0.6 + 0.4 * Math.sin(t * 0.04 + p.x);
        const color = p.hue === 0
          ? `rgba(255,255,255,${p.alpha * flicker * 0.7})`
          : `hsla(${p.hue},90%,80%,${p.alpha * flicker * 0.55})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
