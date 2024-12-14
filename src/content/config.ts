import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    photo: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
  }),
});

export const collections = { posts: postsCollection };
