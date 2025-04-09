import React, { FC } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { globalColor } from "../../styles/globalColor";
import { globalFontstyle } from "../../styles/fontStyle";
import AppText from "../../components/text/AppText";
import { OrderData } from "../../data/OrderData";
import AppAreaView from "../../components/view/safeAreaView";
import Entypo from "@expo/vector-icons/Entypo";
  import { useNavigation } from "@react-navigation/native";

interface CartItems {
  onDeleteButton: () => void;
  imageUrl: string;
  totalAmount: number;
  totalPrice: number;
  date: string;
}

const CartOrderList: FC<CartItems> = () => {
     const navigation = useNavigation();
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.container}>
        {/* Image Section */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>

        {/* Info Section */}
        <View style={styles.detailsWrapper}>
          <AppText style={styles.heading}>ORDER DETAILS :</AppText>

          {/* Row 1: Total Price */}
          <View style={styles.row}>
            <AppText style={styles.label}>Total Price:</AppText>
            <AppText style={styles.value}>{item.totalPrice} $</AppText>
          </View>

          {/* Row 2: Total Amount */}
          <View style={styles.row}>
            <AppText style={styles.label}>Amount:</AppText>
            <AppText style={styles.value}>{item.totalAmount}</AppText>
          </View>

          {/* Row 3: Date */}
          <View style={styles.row}>
            <AppText style={styles.label}>Date:</AppText>
            <AppText style={styles.value}>{item.date}</AppText>
          </View>
        </View>
      </View>
    );
  };

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
          <Entypo name="chevron-left" size={33} color={globalColor.black} />
        </TouchableOpacity>
        <AppText
          variant="bold"
          style={{
            fontSize: s(18),
            marginLeft: vs(12),
            color: globalColor.black,
          }}
        >
          Order-List
        </AppText>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={OrderData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
