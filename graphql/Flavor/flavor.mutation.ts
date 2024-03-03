import { builder } from "graphql/builder";
import { createFlavor } from "graphql/Flavor";

// builder.mutationFields((t) => ({
//   createFlavor: t.prismaField({
//     type: "Flavor",
//     description: "Create a new flavor",
//     args: {
//       name: t.arg.string({ required: true }),
//       description: t.arg.string({ required: true }),
//       restaurantId: t.arg.int({ required: true }),
//     },
//     resolve: (query, _parent, args) => {
//       const { name, description, restaurantId } = args;
//       return prisma.flavor.create({
//         ...query,
//         data: {
//           name,
//           description,
//           restaurantId,
//         },
//       });
//     },
//   }),
// }));
