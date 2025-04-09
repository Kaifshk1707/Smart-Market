import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { globalColor } from "../../styles/globalColor";
import { s, vs } from "react-native-size-matters";
import AppText from "../text/AppText";
import { globalFontstyle } from "../../styles/fontStyle";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import App from "../../../App";
import { commonStyle } from "../../styles/shareStyle";

interface CartItems {
  onDeleteButton: () => void;
  onIncreasePress: () => void;
  onDecreasePress: () => void;
  imageUrl: string;
  title: string;
  price: number | number;
  qty: number;
}

const CartItems: FC<CartItems> = ({
  imageUrl,
  title,
  price,
  qty,
  onIncreasePress,
  onDecreasePress,
  onDeleteButton,
}) => {
  const [increase, setIncrease] = useState(0);

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        borderColor: globalColor.gray,
        borderWidth: .3,
        padding: vs(12),
        // ...commonStyle.shadow,
      }}
    >
      {/* Image Contents  */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ height: s(80), width: s(80), borderRadius: s(5) }}
          source={{ uri: imageUrl }}
        />
      </View>
      {/* Details Contents  */}
      <View style={{ flex: 3, marginLeft: s(10) }}>
        <AppText
          style={{
            fontSize: s(16),
            color: globalColor.black,
            fontFamily: globalFontstyle.semiBold,
            marginTop: s(5),
            left: s(10),
          }}
        >
          {title}
        </AppText>
        <AppText
          style={{
            fontSize: s(16),
            color: globalColor.black,
            fontFamily: globalFontstyle.semiBold,
            marginVertical: vs(5),
            left: s(10),
          }}
        >
          {price} $
        </AppText>
        <View
          style={{
            flexDirection: "row",
            borderColor: globalColor.black,
            borderWidth: 1.5,
            width: "50%",
            height: vs(25),
            borderRadius: vs(20),
            justifyContent: "space-between",
            left: vs(20),
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onIncreasePress}>
            <EvilIcons name="plus" size={24} color="black" />
          </TouchableOpacity>
          <AppText>{qty}</AppText>
          <TouchableOpacity onPress={onDecreasePress}>
            <EvilIcons name="minus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Delete Contents  */}
      <View
        style={{
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={onDeleteButton}
          style={{
            flexDirection: "row",
            // borderRadius: 10,
            // borderWidth: 2,
            // padding: vs(3),
            // borderColor: globalColor.blueGray,
          }}
        >
          <AntDesign name="delete" size={20} color={globalColor.red} />
          <AppText
            style={{
              fontSize: s(12),
              marginTop: 3,
              marginLeft: 7,
              fontFamily: globalFontstyle.bold,
              color: globalColor.red,
              bottom: s(2),
              right: s(2),
            }}
          >
            Delete
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({});
