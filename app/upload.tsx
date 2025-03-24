import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function UploadScreen() {
  const router = useRouter();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg">Upload Your Resume</Text>
      <TouchableOpacity
        onPress={pickDocument}
        className="mt-4 bg-green-500 px-4 py-2 rounded-md"
      >
        <Text className="text-white">Choose File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-4 bg-red-500 px-4 py-2 rounded-md"
      >
        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
