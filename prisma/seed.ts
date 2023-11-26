import { PrismaClient } from '@prisma/client'

import { flavors, flavorsOfTheDay, regions, restaurants } from './data/mockData'

const prisma = new PrismaClient()


async function main() {
  // await prisma.region.createMany({
  //   data: regions,
  // })

  await prisma.restaurant.createMany({
    data: restaurants,
  })

  await prisma.flavor.createMany({
    data: flavors,
  })

  await prisma.flavorsOfTheDay.createMany({
    data: flavorsOfTheDay,
  })

}


main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })