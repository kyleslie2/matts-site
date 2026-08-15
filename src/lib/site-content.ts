import content from "../../content.json";

export type SiteContent = typeof content;

export const siteTheme = content.theme;

export function getSiteContent(): SiteContent {
  return content as SiteContent;
}

export default content;
