import { builder } from "graphql/builder";
builder.queryFields((t) => ({
  flavorsOfTheDay: t.prismaField({
    description: "Get all flavors",
    type: ["FlavorsOfTheDay"],
    resolve: (query, _parent, args, _ctx, _info) =>
      prisma.flavorsOfTheDay.findMany({ ...query, ...args }),
  }),
}));
