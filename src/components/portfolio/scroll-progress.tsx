import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent">
      <div
        style={{ width: `${w}%` }}
        className="h-full bg-gradient-to-r from-primary to-[var(--primary-glow)] transition-[width] duration-100"
      />
    </div>
  );
}