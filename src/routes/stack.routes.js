import { createStackNavigator } from "@react-navigation/stack";
import { TabRoutes } from "./tab.routes";
import Settings from "../screens/Settings";
import SwitchTheme from "../screens/SwitchTheme";
import AddGame from "../screens/AddGame";
import MyGame from "../screens/MyGame";
import SearchGame from "../screens/SearchGame";

const Stack = createStackNavigator();

function StackRoutes() {
  const screenOptions = {headerShown: false};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={TabRoutes}
        options={screenOptions}
      />
      <Stack.Screen
        name="AddGame"
        component={AddGame}
        options={screenOptions}
      />
      <Stack.Screen
        name="MyGame"
        component={MyGame}
        options={screenOptions}
      />
      <Stack.Screen
        name="SearchGame"
        component={SearchGame}
        options={screenOptions}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={screenOptions}
      />
      <Stack.Screen
        name="SwitchTheme"
        component={SwitchTheme}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
}

export { StackRoutes }