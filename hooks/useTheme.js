// @ts-check
import { useColorScheme } from "react-native";

/**
 * @typedef {'light' | 'dark'} OSColorScheme
 */

/**
 * @typedef {'light' | 'dark' | 'auto'} AppColorScheme
 */

/**
 * @typedef {Object} Theme
 * @property {string} backgroundColor
 * @property {string} textColor
 * @property {string} borderColor
 * @property {string} statusBarStyle
 */

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
 * @param {OSColorScheme} params.osColorScheme
 * @param {AppColorScheme} params.appColorScheme
 *
 * @returns {Theme}
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
    osColorScheme: currentOSColorScheme,
    appColorScheme: currentAppColorScheme,
  });
};

export { useTheme };
