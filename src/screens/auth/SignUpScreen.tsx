import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import AppAreaView from "../../components/view/safeAreaView";
import { IMAGES } from "../../constants/Image-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { globalColor } from "../../styles/globalColor";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";

const Schema = yup.object({
  userName: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be more than 4 character's"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be at least 6 to 10 character's"),
});

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });
  type newData = yup.InferType<typeof Schema>;

  const handleCreate = async (newData: newData) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        newData.email,
        newData.password
      );
      Alert.alert("Account has been created, Successfully");
      showMessage({
        type: "success",
        message: "Account has been created, Successfully",
        icon: "success",
        duration: 3000,
      });
      navigation.navigate("MainAppBottomTab");
      return userCredentials.user;
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use! you can't this email";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      } else {
        errorMessage = "An error occurred. Please try again later.";
      }
      showMessage({
        type: "danger",
        message: errorMessage,
        icon: "danger",
        duration: 3000,
      });
      Alert.alert(errorMessage);
    }
   // ("Something went wrong. Please try again later.");
  };

  return (
    <AppAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={IMAGES.AppLogo} />
      <AppTextInputController
        control={control}
        name={"userName"}
        placeholder="Enter your username"
        keyboardType={"default"}
      />
      <AppTextInputController
        control={control}
        name={"email"}
        placeholder="Enter your email"
        keyboardType={"default"}
      />
      <AppTextInputController
        control={control}
        name={"password"}
        placeholder="Enter your password"
        keyboardType={"default"}
        secureTextEntry
      />
      <AppButton
        title="Create New Account"
        style={{ width: vs(250) }}
        onPress={handleSubmit(handleCreate)}
      />
      <AppButton
        title="Go to Sign-In"
        style={styles.SignInButton}
        textColor={globalColor.blueGray}
        onPress={() => navigation.goBack("SignInScreen")}
      />
    </AppAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharePaddingHorizontalStyle,
  },
  imageStyle: {
    width: s(200),
    height: s(200),
    borderRadius: 300,
    marginBottom: vs(30),
    right: s(15),
    top: s(30),
  },
  SignInButton: {
    top: s(8),
    borderColor: globalColor.blueGray,
    borderWidth: 2,
    backgroundColor: globalColor.white,
    color: globalColor.blueGray,
    width: vs(250),
  },
});
