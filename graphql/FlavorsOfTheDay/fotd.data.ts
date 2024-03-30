// prisma query to get flavors of the day and join on flavor table which joins on restaurant table to get names of each
// Didn't feel like figuring out why dates weren't working as a graphql parameter so we are converting them in js.  Booooo!
const getFlavorsOfTheDay = (
  startDate: string | Date | null | undefined,
  endDate: string | Date | null | undefined,
  args?: any
) => {
  const { id, flavorId, date } = args;

  //TODO: put this in a fun helper function for the other tables to use/loop through keys
  const idWhere = id ? { id } : {};
  const flavorIdWhere = flavorId ? { flavorId } : {};
  const dateWhere = date ? { date } : {};

  if (startDate) startDate = new Date(startDate);
  else startDate = new Date();

  if (endDate) endDate = new Date(endDate);
  else endDate = new Date();

  const flavorsOfTheDay = prisma.flavorsOfTheDay.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
      ...idWhere,
      ...flavorIdWhere,
      ...dateWhere,
    },
    select: {
      id: true,
      date: true,
      flavor: {
        select: {
          name: true,
          description: true,
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return flavorsOfTheDay;
};

const getAllFlavorsOfTheDay = () => {
  return getFlavorsOfTheDay(new Date("01/01/2021"), new Date());
};

export { getFlavorsOfTheDay, getAllFlavorsOfTheDay };
