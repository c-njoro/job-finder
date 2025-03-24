import AppGradient from "@/components/AppGradient";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

type Document = {
  mimeType: string;
  name: string;
  size: number;
  uri: string;
};

export default function UploadScreen() {
  const router = useRouter();
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});

      if (result.canceled || !result.assets?.length) {
        Alert.alert(
          "You cancelled document selection.",
          "No document was selected. The section process was terminated before selecting a document"
        );
        return;
      }

      const document = result.assets[0];
      setSelectedDocument({
        mimeType: document.mimeType || "",
        name: document.name || "",
        size: document.size || 0,
        uri: document.uri || "",
      });

      readDocument(document.uri);

      console.log("Selected Document: ", document);
    } catch (error) {
      console.error("Error during document upload: ", error);
    }
  };
  const readDocument = async (uri: string) => {
    try {
      const content = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log("File Content:", content);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  return (
    <ScrollView className="flex-1">
      <AppGradient colors={["#031A09", "#294E28"]}>
        <View className="flex-1 flex-col justify-center items-center w-screen min-h-screen gap-8">
          <Text className="text-lg text-primary font-bold uppercase tracking-widest">
            Upload Your Resume
          </Text>
          <TouchableOpacity
            onPress={pickDocument}
            className="min-w-3/4 bg-button py-3 px-8 rounded-md shadow-md"
          >
            <Text className="text-buttonText uppercase tracking-widest font-body font-bold">
              Choose File
            </Text>
          </TouchableOpacity>

          {selectedDocument && (
            <View className="w-full px-5 flex flex-row justify-center items-center gap-3">
              <Text className="text-primary">Current Selected Document :</Text>
              <Text className="text-buttonText">{selectedDocument.name}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => router.back()}
            className="min-w-3/4 bg-buttonTwo py-3 px-8 rounded-md shadow-md"
          >
            <Text className="text-black uppercase tracking-widest font-body font-bold">
              Go Back
            </Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </AppGradient>
    </ScrollView>
  );
}
