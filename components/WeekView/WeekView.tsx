import { Heading, Box, Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { WeeklyCard } from "./WeeklyCard";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
const WeekView = () => {
  return (
    <Box textAlign="center" mt="3">
      <Heading>VIEW OF THE Week</Heading>
      {/* <ChakraBox
        animate={{
          scale: [1, 2, 6, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        I'm Dizzy!
      </ChakraBox> */}
      <Flex>
        {days.map((day) => {
          return <WeeklyCard key={day} title={day} flavors={mockData} />;
        })}
      </Flex>
    </Box>
  );
};

export { WeekView };
