import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = createImageUrlBuilder({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' });
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ queries
export const queries = {
  posts: `*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, coverImage, excerpt, category, author, publishedAt
  }`,
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) [0...9] {
    _id, name, location, area, quote, avatar, rating
  }`,
  courses: `*[_type == "course"] | order(order asc) {
    _id, title, slug, area, description, coverImage, price, isFree, duration, lessons, externalUrl, isComingSoon
  }`,
  books: `*[_type == "book"] | order(_createdAt desc) {
    _id, title, author, cover, description, externalUrl, "fileUrl": file.asset->url
  }`,
  downloadables: `*[_type == "downloadable"] | order(_createdAt desc) {
    _id, title, description, icon, category, externalUrl, "fileUrl": file.asset->url
  }`,
  newsletters: `*[_type == "newsletter"] | order(publishedAt desc) {
    _id, title, edition, externalUrl, publishedAt, "fileUrl": file.asset->url
  }`,
};
