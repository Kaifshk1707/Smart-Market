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
import {
  Is_Adnroid,
  Is_IOS,
  shippingFees,
  taxes,
} from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { emptycart } from "../../redux/reducers/CartSlice";
import { useTranslation } from "react-i18next";



const CheckOutScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const Schema = yup
    .object({
      fullName: yup
        .string()
        .required(t("checkout_name_required"))
        .min(3, t("checkout_name_min_length")),
      phoneNumber: yup
        .string()
        .required(t("checkout_phone_required"))
        .matches(/^[0-9]+$/, t("checkout_phone_digits"))
        .min(10, t("checkout_phone_min_length")),
      detailAdress: yup
        .string()
        .required(t("checkout_address_required"))
        .min(15, t("checkout_address_min_length")),
    })
    .required();

  type FormData = yup.InferType<typeof Schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });

  const { userData } = useSelector((state: RootState) => state.UserSlice);
  const { item } = useSelector((state: RootState) => state.CartSlice);
  const totalProductsPriceSum = item.reduce((acc, item) => acc + item.sum, 0);
  const totalPrice = totalProductsPriceSum + taxes + shippingFees;

  const saveOrder = async (formData: FormData) => {
    try {
      const orderData = {
        ...formData,
        item,
        totalProductsPriceSum,
        createdAt: new Date(),
        totalPrice,
      };

      const userOrderRef = collection(doc(db, "users", userData.uid), "orders");
      await addDoc(userOrderRef, orderData);
      dispatch(emptycart());

      const orderRef = collection(db, "orders");
      await addDoc(orderRef, orderData);
      Alert.alert(t("checkout_success_message"));
      navigation.goBack("Cart");
    } catch (error) {
      console.error("Error saving order: ", error);
      Alert.alert(t("checkout_error_message"));
    }
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
          {t("screen_Back")}
        </AppText>
      </View>
      <View style={{ paddingHorizontal: sharePaddingHorizontalStyle }}>
        <View style={styles.inputContainer}>
          <AppTextInputController
            control={control}
            name={"fullName"}
            placeholder={t("checkout_fullname_placeholder")}
            keyboardType={"default"}
          />
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder={t("checkout_phone_placeholder")}
            keyboardType={"default"}
          />
          <AppTextInputController
            control={control}
            name={"detailAdress"}
            placeholder={t("checkout_address_placeholder")}
            keyboardType={"default"}
          />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <AppButton
          title={t("checkout_confirm_button")}
          onPress={handleSubmit(saveOrder)}
        />
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
