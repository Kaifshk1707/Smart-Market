import React, { FC, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import { globalFontstyle } from "../../styles/fontStyle";
import AppText from "../../components/text/AppText";
import { OrderData } from "../../data/OrderData";
import AppAreaView from "../../components/view/safeAreaView";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import OrderItem from "../../components/carts/OrderItem";
import { fetchUserData } from "../../config/dataServices";
import { getDataFromFireStoreTimestampObject } from "../../helpers/dateTimeHelper";

interface CartItems {
  onDeleteButton: () => void;
  imageUrl: string;
  totalAmount: number;
  totalPrice: number;
  date: string;
}

const CartOrderList: FC<CartItems> = () => {
  const [OrderList, setOrderList] = useState([])
  const navigation = useNavigation();


  const getOrderList = async ()=>{
   const response = await fetchUserData() 
    setOrderList(response);
   }

   useEffect(()=>{
    getOrderList()
   },[])

  return (
    <AppAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: vs(12),
          paddingHorizontal: vs(16),
          backgroundColor: globalColor.white,
          borderBottomWidth: 0.5,
          borderBottomColor: globalColor.gray,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack("Profile")}>
          <Entypo name="chevron-left" size={30} color={globalColor.black} />
        </TouchableOpacity>
        <AppText
          variant="medium"
          style={{
            fontSize: s(18),
            marginLeft: vs(4),
            color: globalColor.black,
          }}
        >
          Order-List
        </AppText>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={OrderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <OrderItem
              totalAmount={item.totalProductsPriceSum}
              totalPrice={item.totalPrice}
              date={getDataFromFireStoreTimestampObject(item.createdAt)}
            />
          );}}
      />
    </AppAreaView>
  );
};

export default CartOrderList;

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
