import type { Metadata } from "next";

function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.SITE_URL;
  if (!configuredUrl) return undefined;
  const url = new URL(configuredUrl);
  if (url.protocol !== "https:" || url.pathname !== "/" || url.search || url.hash || url.username || url.password) {
    throw new Error("SITE_URL must be an HTTPS origin without a path, query, credentials, or fragment.");
  }
  return url;
}

export const siteUrl = getSiteUrl();

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = siteUrl ? new URL(path, siteUrl) : undefined;
  return {
    title,
    description,
    ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: url } } : {}),
    openGraph: {
      title,
      description,
      siteName: "Tsuyoshi Shoji",
      locale: "ja_JP",
      type: "website",
      ...(url ? { url } : {}),
    },
  };
}