import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCarts from "../../components/cards/ProductCarts";
import { Products } from "../../data/Products";
import { s } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/reducers/CartSlice";

const HomeScreen = () => {

  const dispatch = useDispatch()
  return (
    <AppAreaView>
      <HomeHeader />
      <FlatList
        data={Products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCarts
            imageURL={item.image}
            title={item.title}
            price={item.price}
            onAddToCartPress={() => {dispatch(addItemToCart(item));}}
          />
        )}
        columnWrapperStyle={{justifyContent:"space-between",marginBottom:s(10)}}
        contentContainerStyle={{paddingHorizontal:s(10)}}
      />
    </AppAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
