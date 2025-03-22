import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    const loadResources = async () => {
      if (fontsLoaded) {
        // Hide splash screen once resources are ready
        await SplashScreen.hideAsync();
      }
    };

    SplashScreen.preventAutoHideAsync(); // Prevent splash screen from auto-hiding
    loadResources();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Show nothing while fonts are loading
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
