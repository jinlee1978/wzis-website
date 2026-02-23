import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  events: `*[_type == "event"] | order(date desc) {
    _id, title, titleKo, date, description, descriptionKo, category, image
  }`,

  upcomingEvents: `*[_type == "event" && date >= now()] | order(date asc)[0...6] {
    _id, title, titleKo, date, description, descriptionKo, category, image
  }`,

  staff: `*[_type == "staff"] | order(department, name) {
    _id, name, role, roleKo, department, email, phone, image, bio, bioKo
  }`,

  staffByDepartment: (dept: string) => `*[_type == "staff" && department == "${dept}"] | order(name) {
    _id, name, role, roleKo, department, email, phone, image, bio, bioKo
  }`,

  tuition: `*[_type == "tuition"] | order(order asc) {
    _id, gradeLevel, gradeLevelKo, semesterFee, academicYear, discounts, order
  }`,

  jobs: `*[_type == "job" && isActive == true] | order(_createdAt desc) {
    _id, title, titleKo, department, description, descriptionKo, requirements, requirementsKo, isActive
  }`,

  collegeAcceptances: `*[_type == "collegeAcceptance"] | order(classYear desc, university asc) {
    _id, university, country, classYear, region, logo
  }`,

  collegeAcceptancesByYear: (year: number) => `*[_type == "collegeAcceptance" && classYear == ${year}] | order(university asc) {
    _id, university, country, classYear, region, logo
  }`,
};

// Fetch helper with ISR
export async function sanityFetch<T>(query: string, revalidate = 60): Promise<T> {
  return client.fetch<T>(query, {}, { next: { revalidate } });
}
