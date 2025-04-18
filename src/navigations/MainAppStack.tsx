import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import CartOrderList from "../screens/cart/CartOrderList";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { ActivityIndicator, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { globalColor } from "../styles/globalColor";

const Stack = createStackNavigator();

const MainAppStack = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<object | null>(null);



  useEffect(()=>{
    onAuthStateChanged(auth, (userDataFromFireBase) => {
      if (userDataFromFireBase) {
        setIsLoading(false);
        setUserData(userDataFromFireBase);
        console.log("User is logged in:");
      } else {
        setIsLoading(false);
        console.log("User is logged out");
      }
    })
  },[])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={45} color={globalColor.blueGray} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={userData ? "MainAppBottomTab" : "AuthStack"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTab" component={MainAppBottomTab} />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="CartOrderList" component={CartOrderList} />
    </Stack.Navigator>
  );
};
export default MainAppStack;
