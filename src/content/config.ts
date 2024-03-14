import { defineCollection, z } from 'astro:content';

export const collections = {
    work: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            img: z.string(),
            img_alt: z.string().optional(),
            publishDate: z.coerce.date(),
            startDate: z.any(),
            endDate: z.any(),
            job: z.string().optional(),
            description: z.string(),
            tags: z.array(z.string()),
            tools: z.array(z.string()),
        }),
    }),
};
