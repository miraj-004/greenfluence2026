export const SITE_URL = "https://www.greenfluenceearthsants.com";

export function canonicalUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
