// @ts-check
import { useColorScheme } from "react-native";
// eslint-disable-next-line no-unused-vars
import typedefs from "./../typedefs";

const theme = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#14213d",
    borderColor: "#14213d",
    statusBarStyle: "dark",
  },
  dark: {
    backgroundColor: "#000000",
    textColor: "#e5e5e5",
    borderColor: "#e5e5e5",
    statusBarStyle: "light",
  },
};

/**
 * @param {Object} params
 * @param {typedefs.OSColorScheme} params.osColorScheme
 * @param {typedefs.AppColorScheme} params.appColorScheme
 *
 * @returns {typedefs.Theme}
 */
const getTheme = ({ osColorScheme, appColorScheme }) => {
  if (appColorScheme === "auto") {
    return theme[osColorScheme];
  } else {
    return theme[appColorScheme];
  }
};

const useTheme = ({ currentAppColorScheme }) => {
  const currentOSColorScheme = useColorScheme();
  return getTheme({
    // @ts-ignore
    osColorScheme: currentOSColorScheme,
    appColorScheme: currentAppColorScheme,
  });
};

export { useTheme };
