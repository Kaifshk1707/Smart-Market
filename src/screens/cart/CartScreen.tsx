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

const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <AppAreaView>
      <HomeHeader />
      {/* <EmptyCartScreen/> */}
      {/* onDeleteButton: ()=> void;
      imageUrl : string;
      title: string;
      price:number; */}
      <View style={{ paddingHorizontal: sharePaddingHorizontalStyle, flex: 1 }}>
        <FlatList
          data={Products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartItems
              // {...item}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              qty={0}
              onDeleteButton={() => {}}
              onIncreasePress={() => {}}
              onDecreasePress={() => {}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        <TotalCartView itemPrice={5000} orderTotal={5058} />
        <AppButton
          title="Continue"
          onPress={() => navigation.navigate("CheckOutScreen")}
        />
      </View>
    </AppAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
