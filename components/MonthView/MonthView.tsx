import { Heading, Box } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  {
    id: "a",
    title: "Chocolate Chip Mint",
    start: "2024-02-14",
  },
];
const MonthView = () => {
  return (
    <Box textAlign="center" mt="3">
      <Heading>VIEW OF THE Month</Heading>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </Box>
  );
};

export { MonthView };
