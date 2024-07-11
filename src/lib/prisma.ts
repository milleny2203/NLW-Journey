import { PrismaClient } from "@prisma/client";
// mostra log no servidor toda vez que uma query for executada
export const prisma = new PrismaClient({
    log: ['query'],
})