"use client";

import { useRef, useEffect } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
};

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set the final value immediately
    element.textContent = String(to);
  }, [to]);

  return <span ref={ref}>{from}</span>;
};

export default AnimatedCounter;
