import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@mail.com',
      password: '12345678',
      phone: '444-444-4444'
    }
  })

  console.log(newUser);
}

main()