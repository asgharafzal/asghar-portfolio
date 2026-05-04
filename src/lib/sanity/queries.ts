import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

export interface SanityPost {
  _id: string; title: string; slug: { current: string };
  publishedAt: string; excerpt: string; category: string;
  readTime: string; body: any[]; mainImage?: any;
}

export async function getPosts(limit = 10): Promise<SanityPost[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "post"] | order(publishedAt desc) [0...$limit] { _id, title, slug, publishedAt, excerpt, category, readTime, mainImage }`,
      { limit: limit - 1 }
    );
  } catch { return []; }
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] { _id, title, slug, publishedAt, excerpt, category, readTime, body, mainImage }`,
      { slug }
    );
  } catch { return null; }
}
