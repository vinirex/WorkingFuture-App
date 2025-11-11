import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => navigation.replace("Main");

  return (
    <View className="flex-1 justify-center items-center bg-blue-100 p-6">
      <Text className="text-3xl font-bold text-blue-700 mb-6">Welcome 👋</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="w-full bg-white rounded-xl border border-gray-200 p-3 mb-3"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full bg-white rounded-xl border border-gray-200 p-3 mb-6"
      />
      <TouchableOpacity onPress={handleLogin} className="bg-blue-600 w-full p-4 rounded-xl">
        <Text className="text-center text-white font-semibold text-lg">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
