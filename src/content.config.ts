import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
    schema: z.object({
        name: z.string(),
        role: z.string().optional(),
        rating: z.number().min(1).max(5).default(5),
        featured: z.boolean().default(false),
        date: z.date().optional(),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        cover: z.string().optional(),
    }),
});

const risorse = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/risorse' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        type: z.enum(['PDF', 'Audio', 'Video', 'Worksheet', 'Esercizio', 'Guida']),
        level: z.enum(['Principiante', 'Intermedio', 'Avanzato', 'Tutti i livelli']).default('Tutti i livelli'),
        free: z.boolean().default(true),
    }),
});

export const collections = { reviews, blog, risorse };
