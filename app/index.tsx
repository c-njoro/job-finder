import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <AppGradient colors={["#031A09", "#294E28"]}>
        <View className="top-tab flex-1 flex-col justify-center items-center px-5 mt-5 w-screen min-h-screen">
          <Text className="text-2xl font-bold">Resume Scanner</Text>
          <TouchableOpacity
            onPress={() => router.push("/upload")}
            className="mt-4 bg-blue-500 px-4 py-2 rounded-md"
          >
            <Text className="text-white">Upload Resume</Text>
          </TouchableOpacity>
        </View>
      </AppGradient>
    </View>
  );
}
