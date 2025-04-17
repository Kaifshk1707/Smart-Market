import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../text/AppText";
import { globalColor } from "../../styles/globalColor";
import { shippingFees, taxes } from "../../constants/constants";
import { useTranslation } from "react-i18next";

interface TotalCartView {
  itemPrice: string | number;
  orderTotal: string | number;
}

const TotalCartView: FC<TotalCartView> = ({ itemPrice, orderTotal }) => {
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>{t("totals_items_price")}:</AppText>
        <AppText style={styles.textPrice}>
          {t("totals_currency")} 
          {itemPrice}
        </AppText>
      </View>
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>{t("totals_taxes")}:</AppText>
        <AppText style={styles.textPrice}>
          {t("totals_currency")}
          {taxes}
        </AppText>
      </View>
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>{t("totals_shipping_fee")}:</AppText>
        <AppText style={styles.textPrice}>
          {t("totals_currency")}{shippingFees}
        </AppText>
      </View>
      <View
        style={{ height: 1, borderColor: globalColor.gray, borderWidth: 0.3 }}
      />
      <View style={styles.rowStyle}>
        <AppText style={styles.textTitle}>{t("totals_order_total")}: </AppText>
        <AppText style={styles.textPrice}>
          {t("totals_currency")}{orderTotal}
        </AppText>
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
  textPrice: {
    fontSize: s(16),
    color: globalColor.blueGray,
  },
});
