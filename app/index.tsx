import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1">
      <AppGradient colors={["#031A09", "#294E28"]}>
        <View className=" w-screen min-h-screen flex flex-col justify-center items-center gap-8">
          <Text className="text-2xl font-bold text-primary font-body">
            Upload your resume to Scan
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/upload")}
            className=" px-8 py-3 rounded-md bg-button"
          >
            <Text className="text-buttonText uppercase tracking-widest">
              Upload Resume
            </Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </AppGradient>
    </ScrollView>
  );
}
