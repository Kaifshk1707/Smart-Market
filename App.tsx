import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AppAreaView from "./src/components/view/safeAreaView";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Light": require("./src/assets/fonts/Nunito-Light.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Italic": require("./src/assets/fonts/Nunito-Italic.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("./src/assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <AppAreaView>
      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    </AppAreaView>
  );
}

const styles = StyleSheet.create({});
