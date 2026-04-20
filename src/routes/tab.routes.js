import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/Home";
import Groups from "../screens/Groups";
import Games from "../screens/Games";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  const screenOptions = {headerShown: false};

  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />} >
      <Tab.Screen name="Home" component={Home} options={screenOptions} />
      <Tab.Screen name="Groups" component={Groups} options={screenOptions} />
      <Tab.Screen name="Games" component={Games} options={screenOptions} />
    </Tab.Navigator>
  );
}

export { TabRoutes }