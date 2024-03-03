import { findFlavor } from "graphql/Flavor/flavor.data";
import { builder } from "graphql/builder";

builder.queryFields((t) => ({
  flavors: t.prismaField({
    description: "Get all flavors",
    type: ["Flavor"],
    resolve: (query, _parent, args, _ctx, _info) =>
      prisma.flavor.findMany({ ...query, ...args }),
  }),
  findFlavorByName: t.prismaField({
    type: ["Flavor"],
    args: {
      name: t.arg({
        type: "String",
        required: true,
      }),
    },
    resolve: (query: any, _parent, args: any, _ctx, _info) =>
      findFlavor(args.name),
  }),
}));
