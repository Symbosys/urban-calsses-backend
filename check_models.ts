
import { prisma } from "./src/config/prisma.js";

async function test() {
  console.log("Prisma keys:", Object.keys(prisma));
  if ("blog" in prisma) {
    console.log("Blog model exists on prisma object");
  } else {
    console.log("Blog model DOES NOT exist on prisma object");
  }
}

test();
