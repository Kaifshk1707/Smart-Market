import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../../components/text/AppText";
import { globalFontstyle } from "../../styles/fontStyle";
import { s, vs } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/buttons/AppButton";
import { useTranslation } from "react-i18next";

const EmptyCartScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: globalColor.white,
      }}
    >
      <Ionicons
        name="cart-outline"
        size={150}
        color={globalColor.blueGray}
        style={{ marginBottom: vs(20), opacity: 0.4 }}
      />
      <AppText
        style={{
          fontSize: s(18),
          marginBottom: 10,
          fontFamily: globalFontstyle.bold,
        }}
      >
        {t("empty_cart_title")}
      </AppText>
      <AppText
        style={{
          fontSize: 16,
          color: globalColor.gray,
          textAlign: "center",
          marginBottom: 30,
          fontFamily: globalFontstyle.semiBold,
        }}
      >
        {t("empty_cart_subtitle")}
      </AppText>
      <AppButton
        title={t("start_shopping")}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default EmptyCartScreen;
