import { client, queries } from '@/sanity/client';

export async function getPosts() {
  return client.fetch(queries.posts).catch(() => []);
}

export async function getTestimonials() {
  return client.fetch(queries.testimonials).catch(() => []);
}

export async function getCourses() {
  return client.fetch(queries.courses).catch(() => []);
}

export async function getBooks() {
  return client.fetch(queries.books).catch(() => []);
}

export async function getDownloadables() {
  return client.fetch(queries.downloadables).catch(() => []);
}

export async function getNewsletters() {
  return client.fetch(queries.newsletters).catch(() => []);
}
