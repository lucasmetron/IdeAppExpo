import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";

import Router from "./src/Router";
import { UserRouterProvider } from "./src/context/UserRouter";
import { CoursesCollegeProvider } from "context/CoursesCollege";
import { ContentProvider } from "context/ContentContext";
import { color } from "styles/pallete";
import { HomeContentProvider } from "context/HomeContentContext";
import { NewsContextProvider } from "context/NewsContext";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

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
        <NewsContextProvider>
          <HomeContentProvider>
            <ContentProvider>
              <CoursesCollegeProvider>
                <UserRouterProvider>
                  <StatusBar
                    style="light"
                    backgroundColor={color.interface.backgroundColor}
                  />
                  <Router />
                  <Toast position="top" topOffset={70} />
                </UserRouterProvider>
              </CoursesCollegeProvider>
            </ContentProvider>
          </HomeContentProvider>
        </NewsContextProvider>
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
