import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: [
        {
          emit: "event",
          level: "query",
        },
      ],
    });
  }

  prisma = global.prisma;

  //ts-ignore
  prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`);
  });
}

export default prisma;
