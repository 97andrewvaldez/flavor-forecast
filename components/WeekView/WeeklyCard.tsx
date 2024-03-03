import { Stack, Heading, StackDivider } from "@chakra-ui/react";
import { FlavorDisplay } from "components/DayView/FlavorDisplay";

interface Flavor {
  title: string;
  flavor: string;
}
interface WeeklyCardProps {
  title: string;
  flavors: Flavor[];
}

const WeeklyCard = (props: WeeklyCardProps) => {
  return (
    <Stack
      divider={<StackDivider />}
      spacing="4"
      bg="gray.500"
      mx="1"
      px="1"
      borderRadius="md"
    >
      <Heading>{props.title}</Heading>
      {props.flavors.map((flavor) => (
        <FlavorDisplay
          key={flavor.title}
          title={flavor.title}
          flavor={flavor.flavor}
        />
      ))}
    </Stack>
  );
};

export { WeeklyCard };
