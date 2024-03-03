import { Box, Heading, Text } from "@chakra-ui/react";
interface FlavorDisplayProps {
  title: string;
  flavor: string;
}
const FlavorDisplay = (props: FlavorDisplayProps) => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {props.title}
      </Heading>
      <Text pt="2" fontSize="sm">
        {props.flavor}
      </Text>
    </Box>
  );
};

export { FlavorDisplay };
