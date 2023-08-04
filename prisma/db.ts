import { PrismaClient } from '@prisma/client';

const db: PrismaClient = (global as any).prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') (global as any).prisma = db;

export default db;

export * from '@prisma/client';