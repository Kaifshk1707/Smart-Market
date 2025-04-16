import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import AppAreaView from "../../components/view/safeAreaView";
import { IMAGES } from "../../constants/Image-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { globalColor } from "../../styles/globalColor";
import { useNavigation } from "@react-navigation/native";
import { globalFontstyle } from "../../styles/fontStyle";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";

const Schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be at least 6 to 10 character's"),
});

const SignInScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });

  type loginData = yup.InferType<typeof Schema>;

  const handleLogin = async (loginData: loginData) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      console.log(userCredentials);

      Alert.alert("Login has been Successfully");
      navigation.navigate("MainAppBottomTab");
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Please check your email or password.";
      } else {
        errorMessage = "An error occurred. Please try again later.";
      }
      showMessage({
        type: "danger",
        message: errorMessage,
        icon: "danger",
        duration: 3000,
      });
      // Alert.alert(errorMessage);
    }
  };

  return (
    <AppAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={IMAGES.AppLogo} />
      <AppTextInputController
        control={control}
        name={"email"}
        placeholder="Full Name"
        keyboardType={"default"}
      />
      <AppTextInputController
        control={control}
        name={"password"}
        placeholder="Enter your password"
        secureTextEntry
        keyboardType={"default"}
      />
      <AppButton
        title="Login"
        style={{ width: vs(250) }}
        // onPress={() => navigation.navigate("MainAppBottomTab")}
        onPress={handleSubmit(handleLogin)}
      />
      <AppButton
        title="SignUp"
        style={styles.registerButton}
        textColor={globalColor.blueGray}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharePaddingHorizontalStyle,
  },
  imageStyle: {
    width: s(180),
    height: s(180),
    borderRadius: 300,
    marginBottom: vs(40),
    right: s(15),
    top: s(30),
  },
  registerButton: {
    top: s(8),
    borderColor: globalColor.blueGray,
    borderWidth: 2,
    backgroundColor: globalColor.white,
    color: globalColor.blueGray,
    width: vs(250),
  },
});
