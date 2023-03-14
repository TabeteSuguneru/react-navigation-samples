import { Button, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Group>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen
            name="Stack"
            component={StackScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
          />
        </HomeStack.Group>
        <HomeStack.Group
          screenOptions={{
            presentation: "modal",
            headerMode: "float",
            headerShown: false,
          }}
        >
          <HomeStack.Screen name="Modal" component={ModalScreen} />
        </HomeStack.Group>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
      <Button
        title="Open Stack Screen"
        onPress={() => navigation.navigate("Stack")}
      />
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Modal</Text>
      <Button title="Close Modal" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Stack</Text>
      <Button
        title="Open Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
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
