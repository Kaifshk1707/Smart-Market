import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppAreaView from "../../components/view/safeAreaView";
import {
  commonStyle,
  sharePaddingHorizontalStyle,
} from "../../styles/shareStyle";
import AppText from "../../components/text/AppText";
import { s, vs } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { Is_Adnroid, Is_IOS } from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Entypo from "@expo/vector-icons/Entypo";

const Schema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be at least digits")
    .min(10, "Phone number must be atleast 10 digits"),
  detailAdress: yup
    .string()
    .required("Details address is required")
    .min(15, "Please provide a detailed address with at least 15 characters"),
}).required()

type FormData  = yup.InferType<typeof Schema>

const CheckOutScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Schema)
  });

  const saveOrder = (formData: FormData) => {
    Alert.alert(JSON.stringify(formData))
    console.log(formData);
  };

  return (
    <AppAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: vs(12),
          paddingHorizontal: vs(16),
          backgroundColor: globalColor.white,
          borderBottomWidth: 0.5,
          borderBottomColor: globalColor.gray,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack("Profile")}>
          <Entypo name="chevron-left" size={30} color={globalColor.black} />
        </TouchableOpacity>
        <AppText
          variant="medium"
          style={{
            fontSize: s(18),
            marginLeft: vs(4),
            color: globalColor.black,
          }}
        >
          Back
        </AppText>
      </View>
      <View style={{ paddingHorizontal: sharePaddingHorizontalStyle }}>
        <View style={styles.inputContainer}>
          <AppTextInputController
            control={control}
            name={"fullName"}
            placeholder="Full Name"
            keyboardType={"default"}
          />
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder="Phone Number"
            keyboardType={"default"}
          />
          <AppTextInputController
            control={control}
            name={"detailAdress"}
            placeholder="Detail Adress"
            keyboardType={"default"}
          />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </AppAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  inputContainer: {
    ...commonStyle.shadow,
    padding: s(8),
    borderRadius: 10,
    backgroundColor: globalColor.white,
    marginTop: Is_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButton: {
    paddingHorizontal: sharePaddingHorizontalStyle,
    position: "absolute",
    width: "100%",
    bottom: Is_Adnroid ? vs(13) : 0,
    borderTopWidth: 0.5,
    borderColor: globalColor.gray,
    paddingTop: vs(10),
  },
});
