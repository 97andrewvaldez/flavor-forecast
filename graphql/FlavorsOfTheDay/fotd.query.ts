import { builder } from "graphql/builder";
import {
  getFlavorsOfTheDay,
  getAllFlavorsOfTheDay,
} from "graphql/FlavorsOfTheDay/fotd.data";

// takes a startDate and endDate and returns flavors of the day for that period of time
builder.queryFields((t) => ({
  flavorsOfTheDay: t.prismaField({
    type: ["FlavorsOfTheDay"],
    args: {
      startDate: t.arg({
        type: "String",
      }),
      endDate: t.arg({
        type: "String",
      }),
      id: t.arg({ type: "Int" }),
    },
    resolve: (query, _parent, args, _ctx, _info) =>
      getFlavorsOfTheDay(args.startDate, args.endDate, args),
  }),
  getFlavorsOfTheDay: t.prismaField({
    type: ["FlavorsOfTheDay"],
    args: {
      startDate: t.arg({ type: "Date" }),
      endDate: t.arg({ type: "Date" }),
    },
    resolve: (query, _parent, args, _ctx, _info) =>
      getFlavorsOfTheDay(args.startDate, args.endDate),
  }),
  getAllFlavorsOfTheDay: t.prismaField({
    type: ["FlavorsOfTheDay"],
    resolve: (query, _parent, _args, _ctx, _info) => getAllFlavorsOfTheDay(),
  }),
}));
