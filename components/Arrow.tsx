import React from "react";

interface ArrowProps {
  color?: string;
  className?: string;
}

export function Arrow({ color, className = "" }: ArrowProps) {
  return (
    <span
      className={`arrow ${className}`}
      style={color ? { background: color } : undefined}
      aria-hidden="true"
    />
  );
}
