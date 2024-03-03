import { builder } from "graphql/builder";

builder.queryFields((t) => ({
  restaurants: t.prismaField({
    description: "Get all restaurants",
    type: ["Restaurant"],
    resolve: (query, _parent, args, _ctx, _info) =>
      prisma.restaurant.findMany({ ...query, ...args }),
  }),
}));
