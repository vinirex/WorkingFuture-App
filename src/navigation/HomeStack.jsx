import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";

export type HomeStackParamList = {
  HomeScreen: undefined;
  CourseDetails: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{ title: "Course Details" }} />
    </Stack.Navigator>
  );
}
