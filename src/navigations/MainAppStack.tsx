import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import CartOrderList from "../screens/cart/CartOrderList";

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
      />
      <Stack.Screen name="MainAppBottomTab" component={MainAppBottomTab} />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
      />
      <Stack.Screen
        name="CartOrderList"
        component={CartOrderList}
      />
    </Stack.Navigator>
  );
};
export default MainAppStack;
