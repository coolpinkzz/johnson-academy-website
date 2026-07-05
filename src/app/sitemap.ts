import type { MetadataRoute } from "next";
import { getAllBranchIds } from "@/data/branches";
import { getAllCourseIds } from "@/data/courses";
import { absoluteUrl } from "@/lib/seo/site";

const staticPages: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
  { path: "/our-branches", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticPages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const courses = getAllCourseIds().map((courseId) => ({
    url: absoluteUrl(`/courses/${courseId}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const branches = getAllBranchIds().map((branchId) => ({
    url: absoluteUrl(`/our-branches/${branchId}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...courses, ...branches];
}
