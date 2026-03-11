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

const CLUB_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: "Oud Kerkhofstraat 20",
  addressLocality: "Grembergen",
  postalCode: "9200",
  addressRegion: "Oost-Vlaanderen",
  addressCountry: "BE",
};

export function HockeyFieldJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "D-mon Hockey Club – Hockeyterrein",
    description:
      "Hockeyveld van D-mon Hockey Club in Grembergen, Dendermonde. Kunstgrasveld voor training en wedstrijden.",
    url: "https://dmon-hockey.lovable.app/club/veld",
    address: CLUB_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0338,
      longitude: 4.1137,
    },
    sport: "Field Hockey",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
  };

  return <JsonLd data={data} />;
}

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "D-mon Hockey Club",
    url: "https://dmon-hockey.lovable.app",
    logo: "https://dmon-hockey.lovable.app/dman-hockey-logo.png",
    email: "info@dmon.be",
    address: CLUB_ADDRESS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Ledenadministratie",
        email: "info@dmon.be",
      },
      {
        "@type": "ContactPoint",
        contactType: "Sportieve cel",
        email: "sportief@dmon.be",
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function TeamsPageJsonLd({
  teams,
}: {
  teams: Array<{
    name: string;
    age_group?: string | null;
    coach?: string | null;
    division?: string | null;
  }>;
}) {
  if (!teams.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Teams D-mon Hockey Club",
    itemListElement: teams.map((team, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SportsTeam",
        name: team.name,
        sport: "Field Hockey",
        memberOf: {
          "@type": "SportsOrganization",
          name: "D-mon Hockey Club",
        },
        ...(team.coach && { coach: { "@type": "Person", name: team.coach } }),
        ...(team.division && { description: team.division }),
      },
    })),
  };

  return <JsonLd data={data} />;
}

export function BoardPageJsonLd({
  members,
}: {
  members: Array<{
    name?: string | null;
    position?: string | null;
    bio?: string | null;
  }>;
}) {
  if (!members.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D-mon Hockey Club – Bestuur",
    url: "https://dmon-hockey.lovable.app/club/bestuur",
    member: members
      .filter((m) => m.name)
      .map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.position || undefined,
        ...(m.bio && { description: m.bio }),
      })),
  };

  return <JsonLd data={data} />;
}
