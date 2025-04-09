import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import AppText from "../text/AppText";
import { globalFontstyle } from "../../styles/fontStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { commonStyle } from "../../styles/shareStyle";

interface ItemProductCarts {
  onAddToCartPress: () => void;
  title: string;
  price: number;
  imageURL: string;
}

const ProductCarts: FC<ItemProductCarts> = ({
  title,
  price,
  imageURL,
  onAddToCartPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Add to Cart button  */}
      <TouchableOpacity
        onPress={onAddToCartPress}
        style={styles.addToCartButton}
      >
        <Ionicons
          style={{ top: 5 }}
          name="cart"
          size={30}
          color={globalColor.black}
        />
      </TouchableOpacity>

      {/* image content */}
      <View style={styles.imagesStyle}>
        <Image
          source={{ uri: imageURL }}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </View>

      {/* details content */}
      <View style={styles.detailContent}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>{price} $</AppText>
      </View>
    </View>
  );
};

export default ProductCarts;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: globalColor.white,
    borderRadius: s(10),
    ...commonStyle.shadow,
  },
  imagesStyle: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  detailContent: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: globalFontstyle.medium,
    color: globalColor.black,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: globalFontstyle.bold,
    color: globalColor.black,
  },
  addToCartButton: {
    height: s(30),
    width: s(30),
    position: "absolute",
    top: s(5),
    right: 5,
    zIndex: 1,
    borderRadius: 5,
    borderColor: globalColor.blueGray,
    borderWidth: 1,
    alignItems: "center",
  },
});
