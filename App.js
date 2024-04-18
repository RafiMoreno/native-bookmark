import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArticleList from "./src/screens/ArticleList";
import Bookmarks from "./src/screens/Bookmarks";
import { StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#f5b942" }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="article" color={color} size={size} />
            ),
          }}
          name="Articles"
          component={ArticleList}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="bookmark" color={color} size={size} />
            ),
          }}
          name="Bookmarks"
          component={Bookmarks}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
