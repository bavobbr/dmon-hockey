import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function HomepageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "D-mon Hockey Club",
    alternateName: "DMON Hockey",
    url: "https://dmon-hockey.lovable.app",
    logo: "https://dmon-hockey.lovable.app/dman-hockey-logo.png",
    sport: "Field Hockey",
    description:
      "D-mon Hockey Club Dendermonde - Veldhockeyclub in België. Training, wedstrijden en de passie voor hockey.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dendermonde",
      addressCountry: "BE",
    },
    email: "info@dmon.be",
    sameAs: [
      "https://www.instagram.com/dmonhockey",
    ],
    memberOf: {
      "@type": "SportsOrganization",
      name: "Hockey Belgium",
    },
  };

  return <JsonLd data={data} />;
}

export function EventsPageJsonLd({
  events,
}: {
  events: Array<{
    name: string;
    start_at: string;
    address?: string | null;
    description?: string | null;
  }>;
}) {
  const items = events.slice(0, 20).map((event) => ({
    "@type": "SportsEvent",
    name: event.name,
    startDate: event.start_at,
    location: event.address
      ? {
          "@type": "Place",
          name: event.address,
          address: event.address,
        }
      : {
          "@type": "Place",
          name: "D-mon Hockey Club",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dendermonde",
            addressCountry: "BE",
          },
        },
    organizer: {
      "@type": "SportsOrganization",
      name: "D-mon Hockey Club",
      url: "https://dmon-hockey.lovable.app",
    },
    ...(event.description && { description: event.description }),
  }));

  if (items.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Evenementen D-mon Hockey Club",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
  };

  return <JsonLd data={data} />;
}
