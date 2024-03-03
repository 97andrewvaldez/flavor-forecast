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
const DayView = () => {
  return (
    <Box textAlign="center" mt="3">
      <Card bg="gray.500">
        <CardHeader>
          <Heading>VIEW OF THE DAY</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {mockData.map((flavor) => (
              <FlavorDisplay
                key={flavor.title}
                title={flavor.title}
                flavor={flavor.flavor}
              />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export { DayView };
