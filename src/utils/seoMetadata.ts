/**
 * SEO Metadata Configuration for SilverHeartCare
 * Provides page-specific meta tags, keywords, and structured data
 */

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

// Main keywords for the organization
const MAIN_KEYWORDS = [
  "Fort Bend Senior Transportation",
  "Fort Bend County Senior Rides",
  "Fort Bend Non-Emergency Medical Transport",
  "Fort Bend NEMT",
  "Sugar Land Senior Transportation",
  "Sugar Land NEMT",
  "Sugar Land Wheelchair Transportation",
  "Sugar Land Senior Shuttle",
  "Missouri City Senior Transportation",
  "Rosenberg Senior Transportation",
  "Stafford Senior Transportation",
  "Katy Senior Transportation",
];

const LOCATION_KEYWORDS = [
  "Sugar Land",
  "Fort Bend County",
  "Missouri City",
  "Richmond",
  "Rosenberg",
  "Stafford",
  "Mission Bend",
  "Sienna",
  "Fulshear",
  "Katy",
  "Houston Southwest",
];

const SERVICE_KEYWORDS = [
  "Senior Transportation",
  "Elderly Rides",
  "Medical Transportation",
  "Wheelchair Transportation",
  "Doctor Appointment Rides",
  "Hospital Rides",
  "Dialysis Transportation",
  "Chemotherapy Rides",
  "Non-Emergency Medical Transport",
  "Disability Transportation",
  "ADA Transportation",
  "Door to Door Transportation",
];

export const SEO_METADATA = {
  home: {
    title: "Silver Heart Care | Senior Transportation & Medical Rides | Fort Bend County TX",
    description:
      "Award-winning senior transportation and non-emergency medical rides in Sugar Land, Fort Bend County. Wheelchair accessible, reliable, and compassionate service for elderly and disabled.",
    keywords: [
      ...MAIN_KEYWORDS,
      "Senior care services",
      "Reliable transportation",
      "Medical rides",
      "Non-emergency transport",
    ],
    ogTitle: "Silver Heart Care - Senior Transportation Services",
    ogDescription: "Professional senior and medical transportation services across Fort Bend County",
  },

  about: {
    title: "About Silver Heart Care | Senior Transportation Mission & Values",
    description:
      "Learn about our mission to provide compassionate, reliable senior transportation and medical rides across Fort Bend County, Sugar Land, and surrounding Texas communities.",
    keywords: [
      "Silver Heart Care mission",
      "Senior transportation company",
      "Fort Bend medical transport",
      "Elderly care services",
      "Community health services",
    ],
  },

  contact: {
    title: "Contact Silver Heart Care | Get Senior Transportation Help",
    description:
      "Contact Silver Heart Care for senior transportation, medical rides, and non-emergency medical transport in Sugar Land and Fort Bend County. Call us today for reliable service.",
    keywords: [
      "Contact Silver Heart Care",
      "Senior transportation help",
      "Medical ride requests",
      "Fort Bend transport contact",
    ],
  },

  gallery: {
    title: "Silver Heart Care Gallery | Community Events & Services",
    description: "View photos of Silver Heart Care community events, vehicles, and services in Sugar Land and Fort Bend County.",
    keywords: ["Silver Heart Care gallery", "Senior community events", "Transportation services photos"],
  },

  media: {
    title: "Silver Heart Care Media | News & Press Coverage",
    description:
      "Latest news, press releases, and media coverage of Silver Heart Care senior transportation services in Fort Bend County.",
    keywords: ["Silver Heart Care news", "Senior transportation media", "Press releases"],
  },

  team: {
    title: "Silver Heart Care Team | Dedicated Professionals",
    description:
      "Meet the caring professionals at Silver Heart Care dedicated to providing excellent senior transportation and medical ride services.",
    keywords: ["Silver Heart Care team", "Professional drivers", "Healthcare transportation staff"],
  },

  membership: {
    title: "Membership | Silver Heart Care Senior Transportation Program",
    description:
      "Join Silver Heart Care membership program for discounted senior transportation and medical rides in Sugar Land and Fort Bend County.",
    keywords: [
      ...LOCATION_KEYWORDS,
      "Membership benefits",
      "Discounted transportation",
      "Senior ride program",
    ],
  },

  serviceRequest: {
    title: "Request Medical Transport | Silver Heart Care | Fort Bend County",
    description:
      "Request non-emergency medical transportation, doctor appointment rides, or wheelchair transport from Silver Heart Care in Sugar Land and Fort Bend County.",
    keywords: [
      ...SERVICE_KEYWORDS,
      "Request medical transport",
      "Book transportation",
      "Schedule ride",
      "Fort Bend NEMT",
    ],
  },

  rideRequest: {
    title: "Book Senior Ride | Silver Heart Care | Sugar Land & Fort Bend",
    description:
      "Book reliable senior transportation and medical rides in Sugar Land, Fort Bend County. Wheelchair accessible, compassionate drivers, affordable rates.",
    keywords: [
      ...MAIN_KEYWORDS,
      ...SERVICE_KEYWORDS,
      "Book senior ride",
      "Schedule transportation",
      "Medical appointment rides",
      "Elderly transport booking",
    ],
  },
};

/**
 * Generate structured data (JSON-LD) for organization
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Silver Heart Care",
    url: "https://silverheartcare.org",
    logo: "https://silverheartcare.org/logo.png",
    description:
      "Professional senior transportation and non-emergency medical ride services in Sugar Land and Fort Bend County, Texas",
    sameAs: [
      "https://www.facebook.com/silverheartcare",
      "https://www.twitter.com/silverheartcare",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+1-XXX-XXX-XXXX", // Replace with actual number
      email: "info@silverheartcare.org",
    },
    areaServed: [
      "Sugar Land, TX",
      "Fort Bend County, TX",
      "Missouri City, TX",
      "Rosenberg, TX",
      "Stafford, TX",
      "Mission Bend, TX",
      "Sienna, TX",
      "Fulshear, TX",
      "Katy, TX",
      "Richmond, TX",
    ],
    knowsAbout: [
      "Senior Transportation",
      "Medical Transportation",
      "Wheelchair Transportation",
      "Non-Emergency Medical Transport",
      "Elderly Care Services",
    ],
  };
};

/**
 * Generate local business schema for SEO
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Silver Heart Care",
    image: "https://silverheartcare.org/logo.png",
    description: "Senior Transportation & Non-Emergency Medical Rides",
    url: "https://silverheartcare.org",
    priceRange: "$",
    telephone: "+1-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Sugar Land",
      addressRegion: "TX",
      postalCode: "77479",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.6196,
      longitude: -95.6345,
    },
    serviceArea: {
      "@type": "City",
      name: "Fort Bend County",
    },
  };
};

/**
 * Generate service schema for ride request
 */
export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Senior Transportation & Medical Rides",
    provider: {
      "@type": "Organization",
      name: "Silver Heart Care",
    },
    areaServed: "Sugar Land, TX; Fort Bend County, TX",
    description: "Professional non-emergency medical transportation and senior ride services",
    serviceType: ["Medical Transportation", "Elderly Transport", "Wheelchair Transport"],
  };
};
