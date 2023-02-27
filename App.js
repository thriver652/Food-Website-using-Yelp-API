import { createAppContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import SearchBar from "./src/components/SearchBar";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import ResultsList from "./src/components/ResultsList";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
const Stack = createStackNavigator();
function ScreenA() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Search Bar" component={SearchBar} /> */}

        <Stack.Screen name="Search Screen" component={SearchScreen} />
        <Stack.Screen
          name="Results Show Screen"
          component={ResultsShowScreen}
        />
        {/* <Stack.Screen name="Result Component" component={ResultsList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
