import { ScrollView, View, Text, TouchableOpacity } from "react-native";

export default function CourseListScreen() {
  const courses = [
    { id: 1, title: "React Native Basics", level: "Beginner" },
    { id: 2, title: "Tailwind Mastery", level: "Intermediate" },
    { id: 3, title: "Gamified UX Design", level: "Advanced" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {courses.map((c) => (
        <TouchableOpacity key={c.id} className="m-3 p-4 bg-white rounded-2xl shadow">
          <Text className="text-xl font-bold text-blue-700">{c.title}</Text>
          <Text className="text-gray-500">{c.level}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
