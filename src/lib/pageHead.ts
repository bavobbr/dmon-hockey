import { PAGE_META } from "@/config/pageMeta";

const BASE_URL = "https://www.dmon.be";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SUFFIX = "D-mon Hockey Club";

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

interface HeadInput {
  title: string;
  description: string;
  path?: string;
  ogType?: string;
  image?: string;
  noindex?: boolean;
}

export function buildHead({
  title,
  description,
  path,
  ogType = "website",
  image = OG_IMAGE,
  noindex = false,
}: HeadInput) {
  const fullTitle = title.includes(SUFFIX) ? title : `${title} | ${SUFFIX}`;
  const url = path ? `${BASE_URL}${path}` : undefined;

  const meta: MetaTag[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (url) meta.push({ property: "og:url", content: url });
  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  return {
    meta,
    links: url && !noindex ? [{ rel: "canonical", href: url }] : [],
  };
}

/** Head-tags voor een pagina die in PAGE_META staat. */
export function buildPageHead(path: string, overrides?: Partial<HeadInput>) {
  const meta = PAGE_META[path];
  return buildHead({
    title: meta?.title ?? SUFFIX,
    description: meta?.description ?? "D-mon Hockey Club Dendermonde - Veldhockeyclub in België.",
    path,
    ...overrides,
  });
}

/** Head-tags voor interne pagina's die niet geïndexeerd mogen worden. */
export function buildPrivateHead(title: string) {
  return buildHead({
    title,
    description: "Interne pagina van D-mon Hockey Club.",
    noindex: true,
  });
}
