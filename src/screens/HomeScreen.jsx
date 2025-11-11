import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/HomeStack";

type Props = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-blue-700 mb-4">🏠 Home</Text>
      <TouchableOpacity
        className="bg-blue-500 px-6 py-3 rounded-2xl"
        onPress={() => navigation.navigate("CourseDetails")}
      >
        <Text className="text-white font-semibold">Go to Course Details</Text>
      </TouchableOpacity>
    </View>
  );
}
