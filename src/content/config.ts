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

const academyCollection = defineCollection({
  type: "content",
  schema: z.object({
    upperTitleEn: z.string(),
    titleEn: z.string(),
    descriptionEn: z.string(),
    upperTitleFr: z.string(),
    titleFr: z.string(),
    descriptionFr: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  academy: academyCollection,
};
