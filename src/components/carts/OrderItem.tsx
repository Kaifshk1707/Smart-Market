import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import AppText from "../text/AppText";
import { s, vs } from "react-native-size-matters";
import { globalFontstyle } from "../../styles/fontStyle";
import { globalColor } from "../../styles/globalColor";

interface OrderItem {
  // image: string;
  totalPrice: string | number;
  totalAmount: string | number;
  date: string | number;
}

const OrderItem: FC<OrderItem> = ({ image, totalPrice, totalAmount, date }) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      {/* <View style={styles.imageWrapper}>
        <Image
          source={{ uri: image }}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View> */}

      {/* Info Section */}
      <View style={styles.detailsWrapper}>
        <AppText style={styles.heading}>ORDER DETAILS :</AppText>
        <View
          style={{
            height: 1,
            borderColor: globalColor.blueGray,
            borderWidth: 0.3,
            marginBottom: s(5),
          }}
        />

        {/* Row 1: Total Price */}
        <View style={styles.row}>
          <AppText style={styles.label}>Total Price:</AppText>
          <AppText style={styles.value}>{totalPrice} $</AppText>
        </View>

        {/* Row 2: Total Amount */}
        <View style={styles.row}>
          <AppText style={styles.label}>Amount:</AppText>
          <AppText style={styles.value}>{totalAmount}</AppText>
        </View>

        {/* Row 3: Date */}
        <View style={styles.row}>
          <AppText style={styles.label}>Date:</AppText>
          <AppText style={styles.value}>{date}</AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderColor: globalColor.gray,
    borderWidth: 0.3,
    padding: vs(12),
    backgroundColor: globalColor.white,
    borderRadius: s(8),
    marginBottom: vs(10),
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    height: s(80),
    width: s(80),
    borderRadius: s(5),
  },
  detailsWrapper: {
    flex: 2.5,
    paddingLeft: s(10),
    justifyContent: "center",
  },
  heading: {
    fontSize: s(14),
    fontFamily: globalFontstyle.medium,
    color: globalColor.black,
    marginBottom: vs(6),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(4),
  },
  label: {
    fontSize: s(14),
    color: globalColor.black,
    fontFamily: globalFontstyle.medium,
  },
  value: {
    fontSize: s(14),
    color: globalColor.green,
    fontFamily: globalFontstyle.medium,
  },
});
