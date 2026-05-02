import type { Course as AcademyCourse } from "@/data/courses";
import {
  absoluteUrl,
  ADDRESSES,
  CONTACT,
  FOUNDING_DATE,
  ORGANIZATION_ID,
  SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  WEBSITE_ID,
} from "./site";

/** Loose schema.org-shaped nodes (Google accepts flexible payloads). */
export type JsonLdNode = Record<string, unknown>;

export function buildOrganizationSchema(): JsonLdNode {
  return {
    "@type": ["Organization", "EducationalOrganization"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
    },
    image: absoluteUrl("/logo.png"),
    description: SITE_DESCRIPTION,
    foundingDate: FOUNDING_DATE,
    founder: { "@id": `${SITE_ORIGIN}/about/#founder` },
    email: CONTACT.email,
    telephone: CONTACT.telephone,
    address: ADDRESSES.map((a) => ({
      "@type": "PostalAddress",
      ...a,
    })),
    sameAs: [...SAME_AS],
  };
}

/**
 * WebSite with search action. Target uses the courses listing with a `q` query
 * param (client-side filtering). URL still resolves for users.
 */
export function buildWebSiteSchema(input: {
  name?: string;
  description?: string;
}): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: input.name ?? SITE_NAME,
    description: input.description ?? SITE_DESCRIPTION,
    url: SITE_ORIGIN,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/courses?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageSchema(input: {
  url: string;
  name: string;
  description: string;
  /** Path for canonical + @id fragment, e.g. "/" or "/courses/guitar-classes-bangalore" */
  path: string;
  type?: string | string[];
  breadcrumb?: { "@id": string };
}): JsonLdNode {
  const pageId = `${absoluteUrl(input.path)}#webpage`;
  const types = input.type
    ? Array.isArray(input.type)
      ? input.type
      : [input.type]
    : ["WebPage"];

  return {
    "@type": types,
    "@id": pageId,
    url: input.url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-IN",
    ...(input.breadcrumb ? { breadcrumb: input.breadcrumb } : {}),
  };
}

export function buildBreadcrumbListSchema(input: {
  id?: string;
  items: { name: string; path: string }[];
}): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    ...(input.id ? { "@id": input.id } : {}),
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqPageSchema(input: {
  id?: string;
  questions: { question: string; answer: string }[];
}): JsonLdNode {
  return {
    "@type": "FAQPage",
    ...(input.id ? { "@id": input.id } : {}),
    mainEntity: input.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function buildCourseSchema(
  course: AcademyCourse,
  pagePath: string,
): JsonLdNode {
  const courseUrl = absoluteUrl(pagePath);
  return {
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    name: course.title,
    description: course.description,
    url: courseUrl,
    image: course.image ? absoluteUrl(course.image) : undefined,
    provider: { "@id": ORGANIZATION_ID },
    audience: course.whoCanJoin.map((label) => ({
      "@type": "EducationalAudience",
      name: label,
    })),
    about: course.learningPoints.map((text) => ({
      "@type": "Thing",
      name: text,
    })),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: { "@id": ORGANIZATION_ID },
    },
  };
}

/** Founder used on About or Organization extension points. */
export function buildFounderPersonSchema(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": `${SITE_ORIGIN}/about/#founder`,
    name: "Ashish Johnson",
    jobTitle: "Founder",
    worksFor: { "@id": ORGANIZATION_ID },
    sameAs: [...SAME_AS],
  };
}
