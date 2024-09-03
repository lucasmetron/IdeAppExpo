import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

import Router from "./src/Router";
import { UserRouterProvider } from "./src/context/UserRouter";
import { color } from "styles/pallete";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  console.log("fontsLoaded: ", fontsLoaded);

  const onLayputRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["top", "bottom", "left", "right"]}
        onLayout={onLayputRootView}
      >
        <UserRouterProvider>
          <StatusBar
            style="dark"
            backgroundColor={color.interface.backgroundColor}
          />
          <Router />
        </UserRouterProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.interface.backgroundColor,
  },
});

export default App;
