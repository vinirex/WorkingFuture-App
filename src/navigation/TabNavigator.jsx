import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import CourseListScreen from "../screens/CourseListScreen";
import RankingsScreen from "../screens/RankingsScreen";
import DrawerNavigator from "./DrawerNavigator";
import { Ionicons } from "@expo/vector-icons";

export type TabParamList = {
  Home: undefined;
  Courses: undefined;
  Rankings: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Courses") iconName = "book";
          else if (route.name === "Rankings") iconName = "trophy";
          else if (route.name === "Profile") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Courses" component={CourseListScreen} />
      <Tab.Screen name="Rankings" component={RankingsScreen} />
      <Tab.Screen name="Profile" component={DrawerNavigator} />
    </Tab.Navigator>
  );
}
