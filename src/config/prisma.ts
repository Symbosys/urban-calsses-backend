import "dotenv/config";
import { neon, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../../generated/prisma/client.js';
import ws from 'ws';

// Use WebSockets (port 443) instead of TCP (port 5432)
// This bypasses firewall/ISP blocks on port 5432 entirely
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };