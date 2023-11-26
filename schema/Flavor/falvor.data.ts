import { FlavorType } from "schema/Flavor/flavor.type";
export const findFlavor = (flavor: string): FlavorType => {
  return {
    id: 1,
    name: "Vanilla",
    description: "A flavor",
    restaurantId: 1,
  };
};

export const CreateFlavor = (
  name: string,
  description: string,
  restaurantId: number
): FlavorType => {
  const flavor = {
    id: 1,
    name: name,
    description: description,
    restaurantId: restaurantId,
  };
  return flavor;
};
