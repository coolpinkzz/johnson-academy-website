import coursesData from "./courses.json";

export type Teacher = {
  name: string;
  image: string;
  imageFit?: "cover" | "contain";
  bio: string;
  experience: string;
  title?: string;
  teaches?: string[];
  teachingSince?: string;
  quote?: string;
  highlight?: string;
  schoolExperience?: string;
  certifications?: string;
  achievements: string[];
  knowMore?: {
    about?: string;
    qualifications?: string[];
    teachingExperience?: string[];
    performanceAndWork?: string[];
    notableWork?: string[];
    otherHighlights?: string[];
    personal?: string[];
  };
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  metaDescription: string;
  about: string[];
  teachers: Teacher[];
  learningPoints: string[];
  whoCanJoin: string[];
};

const data = coursesData as { courses: Course[] };

export const courses: Course[] = data.courses;

const courseById = new Map(courses.map((c) => [c.id, c]));

export function getCourseById(courseId: string): Course | undefined {
  return courseById.get(courseId);
}

export function getAllCourseIds(): string[] {
  return courses.map((c) => c.id);
}
