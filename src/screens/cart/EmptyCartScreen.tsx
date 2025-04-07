import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../../components/text/AppText";
import { globalFontstyle } from "../../styles/fontStyle";
import { s } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";

const EmptyCartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Ionicons
        name="cart-outline"
        size={150}
        color="#ccc"
        style={{ marginBottom: 30 }}
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
      <TouchableOpacity
        style={{
          backgroundColor: "#4F46E5",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
        onPress={() => {
          console.log("Start shopping pressed");
        }}
      >
        <AppText
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: globalFontstyle.bold,
          }}
        >
          Start Shopping
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCartScreen;
