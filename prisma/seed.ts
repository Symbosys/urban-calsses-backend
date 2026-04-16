import bcrypt from 'bcryptjs';
import { prisma } from '../src/config/prisma.js';

async function main() {
  const adminEmail = 'admin@urbanclasses.com';
  const adminPassword = 'adminpassword123';
  
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    
    await prisma.$transaction(async (tx) => {
      const account = await tx.account.create({
        data: {
          role: 'ADMIN',
        },
      });

      await tx.admin.create({
        data: {
          name: 'Super Admin',
          email: adminEmail,
          password: hashedPassword,
          accountId: account.id,
        },
      });
    });

    console.log('✅ Initial admin created');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
