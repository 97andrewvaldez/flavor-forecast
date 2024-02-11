import { Box } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { DayView } from "components/DayView";
import { WeekView } from "components/WeekView";
import { MonthView } from "components/MonthView";
import { useState } from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

type ViewType = "Day" | "Week" | "Year";
const tabIndexMap = {
  Day: 0,
  Week: 1,
  Year: 2,
};

const Home = () => {
  const [view, setView] = useState<ViewType>("Day");
  return (
    <Box sx={{ bg: "gray.700", borderRadius: 15, mt: "20px" }}>
      <Tabs isFitted variant="soft-rounded">
        <TabList mb="1em">
          <Tab sx={{ color: "blue.100" }}>Day</Tab>
          <Tab sx={{ color: "blue.100" }}>Week</Tab>
          <Tab sx={{ color: "blue.100" }}>Year</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DayView />
          </TabPanel>
          <TabPanel>
            <WeekView />
          </TabPanel>
          <TabPanel>
            <MonthView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export { Home };
