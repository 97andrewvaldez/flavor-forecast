import { gql, useQuery } from "@apollo/client";
import { Heading, Box } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FlavorDisplay } from "components/DayView/FlavorDisplay";
import { FlavorOfTheDay } from "graphql/FlavorsOfTheDay";

const mockData = [
  {
    title: "Culvers",
    flavor: "Chocolate chip mint - a tasty snack",
  },
  {
    title: "Oscars",
    flavor: "Chocolate chip cookie dough - a delightful treat",
  },
  {
    title: "Kopps",
    flavor: "German Apple Struesel - your favorite cold dessert",
  },
  {
    title: "Franks",
    flavor: "Buffalo chicken - a real zinger",
  },
];
const getFlavorOfTheDay = gql`
  {
    flavorsOfTheDay(startDate: "2021-01-01", endDate: "2022-01-01") {
      id
      date
      flavor {
        description
        restaurant {
          name
        }
      }
    }
  }
`;
const DayView = () => {
  const { data, loading, error } = useQuery(getFlavorOfTheDay);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;
  console.log("DATA: ", data);
  return (
    <Box textAlign="center" mt="3">
      <Card bg="gray.500">
        <CardHeader>
          <Heading>VIEW OF THE DAY</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {data.flavorsOfTheDay.map(
              (fotd: FlavorOfTheDay) =>
                (
                  <FlavorDisplay
                    key={fotd.flavor.id}
                    title={fotd.flavor.restaurant.name}
                    flavor={fotd.flavor.description}
                  />
                ) ?? null
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export { DayView };
