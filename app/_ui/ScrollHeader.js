"use client";

import { useEffect, useRef, useState } from "react";
export default function ScrollHeader({ header, children }) {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const current = el.scrollTop;

      // show always 
      if (current === 0) {
        setShowHeader(true);
      }
      // Scroll UP - show
      else if (current < lastScrollY.current) {
        setShowHeader(true);
      }
      // Scroll DOWN - hide 
      else if (current > lastScrollY.current && current > 40) {
        setShowHeader(false);
      }

      lastScrollY.current = current;
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Animated Header */}
      <div
        className={`
          sticky top-0 z-50 
          transition-transform duration-200 ease-in-out
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {header}
      </div>

      {/* Content */}
      <main
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-1 sm:p-4"
      >
        {children}
      </main>
    </>
  );
}
