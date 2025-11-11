import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-semibold text-gray-800">Your Profile</Text>
      <Text className="text-gray-500 mt-2">Level 5 • XP: 2300</Text>
    </View>
  );
}
