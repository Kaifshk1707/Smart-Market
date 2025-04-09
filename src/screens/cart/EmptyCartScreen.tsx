import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../../components/text/AppText";
import { globalFontstyle } from "../../styles/fontStyle";
import { s, vs } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/buttons/AppButton";

const EmptyCartScreen = () => {
  const navigation = useNavigation();
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
        Your cart is empty
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
        Looks like you haven’t added anything to your cart yet.
      </AppText>
      <AppButton
        title="Start Shopping"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default EmptyCartScreen;
