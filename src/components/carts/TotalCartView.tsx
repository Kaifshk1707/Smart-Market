import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../text/AppText";
import { globalColor } from "../../styles/globalColor";
import { shippingFees, taxes } from "../../constants/constants";

    interface TotalCartView {
      itemPrice:string | number;
      orderTotal: string | number;
    }

const TotalCartView :FC<TotalCartView> = ({ itemPrice, orderTotal }) => {
  return (
    <View>
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>Item Price:</AppText>
        <AppText style={styles.textPrice}>$ {itemPrice}</AppText>
      </View>
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>Taxes:</AppText>
        <AppText style={styles.textPrice}>$ {taxes}</AppText>
      </View>
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>Shipping Fee:</AppText>
        <AppText style={styles.textPrice}>$ {shippingFees}</AppText>
      </View>
      <View
        style={{ height: 1, borderColor: globalColor.gray, borderWidth: 0.3 }}
      />
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>Order Total: </AppText>
        <AppText style={styles.textPrice}>$ {orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalCartView;

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
  },
  textPrice:{
    fontSize:s(16),
    color:globalColor.blueGray
  }
});
