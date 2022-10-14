// @ts-check
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { AppearanceSelector } from "./components/AppearanceSelector";
import { useTheme } from "./hooks/useTheme";
// eslint-disable-next-line no-unused-vars
import typedefs from "./typedefs";

const App = () => {
  const [currentAppColorScheme, setCurrentAppColorScheme] = useState("auto");
  const currentTheme = useTheme({ currentAppColorScheme });
  const styles = themedStyle(currentTheme)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`The current OS color scheme is: ${Appearance.getColorScheme()}`}
      </Text>
      <Text style={styles.text}>
        {`The current app color scheme is: ${currentAppColorScheme}`}
      </Text>
      <AppearanceSelector
        // @ts-ignore
        currentAppColorScheme={currentAppColorScheme}
        onChange={setCurrentAppColorScheme}
      />
      <StatusBar
        // @ts-ignore
        style={currentTheme.statusBarStyle}
      />
    </View>
  );
};

/**
 * @param {typedefs.Theme} currentTheme 
 * @returns {StyleSheet.NamedStyles<*>}
 */
const themedStyle = (currentTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: currentTheme.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: currentTheme.textColor
  }
});

export default App;
