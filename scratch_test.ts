
import { prisma } from "./src/config/prisma.js";

async function test() {
  try {
    const count = await prisma.course.count();
    console.log("Course count:", count);
    const courses = await prisma.course.findMany({ take: 1 });
    console.log("Sample course:", courses);
  } catch (error) {
    console.error("Prisma Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
