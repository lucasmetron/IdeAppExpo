import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Router from "./src/Router";
import { UserRouterProvider } from "./src/context/UserRouter";
import { color } from "styles/pallete";

const App: React.FC = () => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom", "left", "right"]}
    >
      <StatusBar backgroundColor={color.interface.backgroundColor} />
      <UserRouterProvider>
        <Router />
      </UserRouterProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  teste: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default App;
