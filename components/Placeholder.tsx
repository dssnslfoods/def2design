import React from "react";

interface PlaceholderProps {
  label: string;
  aspectRatio?: string;
  dark?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function Placeholder({
  label,
  aspectRatio,
  dark = false,
  style,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`ph${dark ? " dark" : ""} ${className}`}
      data-label={label}
      style={{ aspectRatio, ...style }}
    />
  );
}
