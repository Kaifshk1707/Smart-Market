import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/text/AppText";
import AppAreaView from "./src/components/view/safeAreaView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { globalColor } from "./src/styles/globalColor";
import AppButton from "./src/components/buttons/AppButton";
import AppTextInput from "./src/components/inputs/AppTextInput";
import SignInScreen from "./src/screens/auth/SignInScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import AuthStack from "./src/navigations/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AppAreaView style={styles.container}>
      {/* <FlashMessage position={"bottom"} /> */}

      {/* <AppTextInput style={{marginTop:"5%"}}   placeholder="Enter name"/> */}
      {/* <SignInScreen /> */}
      {/* <SignUpScreen/> */}
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      {/* <AppButton
          // style={{ marginTop: 20 }}
          // backgroundColor="yellow"
          // textColor="black"
          // disabled={false}
          onPress={() => {
            showMessage({
              message: "Hello Shaikh",
              description: " ^_^",
              type: "success",
              animationDuration: 500, // time in ms
              animated: true, // animation
              icon: "success",
              duration: 3000,
              color: globalColor.white,
              style: {
                backgroundColor: globalColor.blueGray,
                borderRadius: 10,
                padding: 10,
                margin: 10,
              },
            });
          }}
          title={"Show Message"}
        /> */}

      {/* <AppText
          // onPress={() => {
          //   showMessage({
          //     message: "Hello world",
          //     description: " ^_^",
          //     type: "success",
          //     animationDuration: 500, // time in ms
          //     animated: true, // animation
          //     icon: "info",
          //     duration: 3000,
          //     color: globalColor.white,
          //     style: {
          //       backgroundColor: globalColor.primary,
          //       borderRadius: 10,
          //       padding: 10,
          //       margin: 10,
          //     },
          //   });
          // }}
          variant="bold"
        >
          My app
        </AppText> */}
    </AppAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:globalColor.lightBlue
  },
});
