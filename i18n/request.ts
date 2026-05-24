import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Content is served via our own typed dictionary (i18n/dictionaries.ts),
  // so no message catalog is needed here — locale is what matters for
  // navigation and the <html lang> attribute.
  return { locale, messages: {} };
});
