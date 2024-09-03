import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import Router from "./src/Router";
import { UserRouterProvider } from "./src/context/UserRouter";
import { color } from "styles/pallete";

const App: React.FC = () => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom", "left", "right"]}
    >
      <UserRouterProvider>
        <StatusBar
          style="dark"
          backgroundColor={color.interface.backgroundColor}
        />
        <Router />
      </UserRouterProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
