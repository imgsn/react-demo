import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchBar from "./src/components/SearchBar";
import SearchScreen from "./src/screens/SearchScreen";

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    Bar: SearchBar,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigation);
