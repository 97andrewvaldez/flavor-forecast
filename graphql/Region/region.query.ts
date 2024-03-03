import { builder } from "graphql/builder";

builder.queryFields((t) => ({
  regions: t.prismaField({
    description: "Get all flavors",
    type: ["Region"],
    resolve: (query, _parent, args, _ctx, _info) =>
      prisma.region.findMany({ ...query, ...args }),
  }),
}));
