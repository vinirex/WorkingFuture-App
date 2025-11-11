import { View, Text } from "react-native";

export default function RankingsScreen() {
  const rankings = [
    { name: "Alice", score: 2000 },
    { name: "Bob", score: 1750 },
    { name: "Clara", score: 1600 },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-yellow-600 mb-4">🏆 Rankings</Text>
      {rankings.map((r, i) => (
        <View key={i} className="flex-row justify-between bg-yellow-50 p-3 rounded-xl mb-2">
          <Text className="font-semibold">{`${i + 1}. ${r.name}`}</Text>
          <Text className="text-gray-600">{r.score} pts</Text>
        </View>
      ))}
    </View>
  );
}
