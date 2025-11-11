import { View, Text } from "react-native";

export default function CourseDetailsScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50 p-6">
      <Text className="text-2xl font-bold text-blue-700 mb-2">Course Details</Text>
      <Text className="text-gray-600 text-center">
        Learn React Native with Tailwind and modern navigation.
      </Text>
    </View>
  );
}
