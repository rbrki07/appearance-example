// @ts-check
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { AppearanceSelector } from "./components/AppearanceSelector";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const [currentAppColorScheme, setCurrentAppColorScheme] = useState("auto");
  const currentTheme = useTheme({ currentAppColorScheme });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <Text
        style={{ color: currentTheme.textColor }}
      >{`The current OS color scheme is: ${Appearance.getColorScheme()}`}</Text>
      <Text
        style={{ color: currentTheme.textColor }}
      >{`The current app color scheme is: ${currentAppColorScheme}`}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
