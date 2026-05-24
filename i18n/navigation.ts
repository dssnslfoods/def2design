import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation. <Link href="/about"> auto-prefixes to /en/about
// or /th/about based on the active locale.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
