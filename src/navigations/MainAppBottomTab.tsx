import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalColor } from "../styles/globalColor";
import { s, vs } from "react-native-size-matters";
import { Is_Adnroid } from "../constants/constants";

const Tab = createBottomTabNavigator();


 const MainAppBottomTab = ()=>{
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: globalColor.blueGray,
          tabBarLabelStyle: {
            marginTop: vs(4),
            fontSize: s(12),
          },
          tabBarStyle: Is_Adnroid && {
            height: vs(50),
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-sharp" size={size} color={color} />
            ),
            title: "Home",
          }}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
            title: "Cart",
          }}
          name="Cart"
          component={CartScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            title: "Profile",
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    );
}
export default MainAppBottomTab;