import React from "react";
import Link from "next/link";
import { Arrow } from "./Arrow";

type BtnVariant = "default" | "primary" | "ghost" | "dark";

interface BtnProps {
  children: React.ReactNode;
  variant?: BtnVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  large?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export function Btn({
  children,
  variant = "default",
  href,
  onClick,
  type = "button",
  className = "",
  large = false,
  style,
  disabled,
}: BtnProps) {
  const cls = [
    "btn",
    variant === "primary" ? "btn-primary" : "",
    variant === "ghost" ? "btn-ghost" : "",
    variant === "dark" ? "btn-dark" : "",
    large ? "btn-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children} <Arrow />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
