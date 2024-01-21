import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	posts: postsCollection,
};
