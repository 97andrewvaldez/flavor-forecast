import { Heading, Box } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const DayView = () => {
  return (
    <Box textAlign="center" mt="3">
      <Card bg="gray.500">
        <CardHeader>
          <Heading>VIEW OF THE DAY</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Kopps
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Oscars
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Culvers
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export { DayView };
