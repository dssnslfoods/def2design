import React from "react";

interface SectionMarkerProps {
  left: string;
  right: string;
  dark?: boolean;
}

export function SectionMarker({ left, right, dark = false }: SectionMarkerProps) {
  return (
    <div className={`section-marker${dark ? " dark" : ""}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
