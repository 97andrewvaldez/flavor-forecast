import { Box, IconButton, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconProps } from "@chakra-ui/react";

interface IconObject {
  key: string;
  icon: React.ReactElement<IconProps>;
}
interface IconMap {
  [icon: string]: IconObject;
}
const iconMap: IconMap = {
  moon: { key: "moon", icon: <Icon h={"75%"} w={"75%"} as={MoonIcon} /> },
  sun: { key: "sun", icon: <Icon h={"75%"} w={"75%"} as={SunIcon} /> },
};

const ThemeToggle = () => {
  const [iconKey, setIconKey] = useState(iconMap.moon.key);
  const toggleTheme: React.MouseEventHandler<HTMLElement> = (e) => {
    if (iconKey === iconMap.moon.key) {
      setIconKey(iconMap.sun.key);
    } else {
      setIconKey(iconMap.moon.key);
    }
  };

  return (
    <IconButton
      size="md"
      aria-label="Theme"
      icon={iconMap[iconKey].icon}
      isRound
      variant="ghost"
      onClick={(e) => toggleTheme(e)}
    />
  );
};

export { ThemeToggle };
