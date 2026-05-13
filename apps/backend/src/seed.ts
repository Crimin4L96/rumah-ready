import bcrypt from "bcryptjs";
import { prisma } from "./lib/prisma";

async function main() {
  const existingUser =
    await prisma.user.findUnique({
      where: {
        email: "admin@email.com",
      },
    });

  if (existingUser) {
    console.log("Admin already exists");
    return;
  }

  const hashedPassword =
    await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      email: "admin@email.com",
      password: hashedPassword,
    },
  });

  console.log("Admin created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });