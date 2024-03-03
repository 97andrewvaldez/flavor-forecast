import { FlavorType } from "graphql/Flavor/flavor.type";
const findFlavor = (flavor: string = "") => {
  const flavors = prisma.flavor.findMany({
    where: {
      name: {
        contains: flavor,
      },
    },
  });
  if (flavors) {
    return flavors;
  } else {
    throw Error("Flavor not found");
  }
};

const createFlavor = async (
  name: string,
  description: string,
  restaurantId: number
) => {
  const createdFlavor = await prisma.flavor.create({
    data: {
      name,
      description,
      restaurantId,
    },
  });
  if (createdFlavor) {
    return createdFlavor;
  } else {
    throw Error("Flavor not created");
  }
};

export { findFlavor, createFlavor };
