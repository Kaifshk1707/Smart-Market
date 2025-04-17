import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppAreaView from "../../components/view/safeAreaView";
import EmptyCartScreen from "./EmptyCartScreen";
import CartItems from "../../components/carts/CartItems";
import { Products } from "../../data/Products";
import TotalCartView from "../../components/carts/TotalCartView";
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductToCart,
} from "../../redux/reducers/CartSlice";
import { shippingFees, taxes } from "../../constants/constants";
import { useTranslation } from "react-i18next";

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { item } = useSelector((state: RootState) => state.CartSlice);
  const totalProductPriceSum = item.reduce((acc, item) => acc + item.sum, 0);
  const totalPrice = totalProductPriceSum + shippingFees + taxes;
const { t } = useTranslation();

  return (
    <AppAreaView>
      <HomeHeader />
      {item.length > 0 ? (
        <View
          style={{ paddingHorizontal: sharePaddingHorizontalStyle, flex: 1 }}
        >
          <FlatList
            data={item}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItems
                {...item}
                imageUrl={item.image}
                // title={item.title}
                price={item.sum}
                // qty={0}
                onDeleteButton={() => {
                  dispatch(removeProductToCart(item));
                }}
                onIncreasePress={() => {
                  dispatch(addItemToCart(item));
                }}
                onDecreasePress={() => {
                  dispatch(removeItemFromCart(item));
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          <TotalCartView
            itemPrice={totalProductPriceSum}
            orderTotal={totalPrice}
          />
          <AppButton
            title={t("cart_continue_button")}
            onPress={() => navigation.navigate("CheckOutScreen")}
          />
        </View>
      ) : (
        <EmptyCartScreen />
      )}
    </AppAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
