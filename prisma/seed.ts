import { PrismaClient, Role, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = generateUsers();

  await prisma.user.createMany({
    data: [...users],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Generate a random UUID
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateUsers() {
  // Create a larger array of objects
  const largerArrayOfObjects: User[] = [];

  for (let i = 0; i < 10; i++) {
    largerArrayOfObjects.push({
      createdAt: new Date(),
      email: `user${i}@example.com`,
      id: generateUUID(),
      name: `User ${i}`,
      role: i % 2 === 0 ? Role.ADMIN : Role.USER,
      updatedAt: new Date(),
    });
  }

  return largerArrayOfObjects;
}
