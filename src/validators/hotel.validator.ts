import { z } from 'zod';

export const createHotelSchema = z.object({
    name: z.string().min(1),
    address: z.string().min(1),
    location: z.string().min(1),
    rating: z.number().optional(),
    ratingCount: z.number().optional()
}).strict();

export const hotelIdSchema = z.object({
    id: z.string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), { message: 'id must be a number' })
}).strict();