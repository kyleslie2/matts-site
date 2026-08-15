import content from "../../content.json";

export type SiteContent = typeof content;

export function getSiteContent(): SiteContent {
  return content as SiteContent;
}

export default getSiteContent();
