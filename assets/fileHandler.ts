import base64 from "base64-js";
import * as FileSystem from "expo-file-system";
import mammoth from "mammoth";

// Function to convert Base64 to ArrayBuffer
function base64ToArrayBuffer(base64String: string): ArrayBuffer {
  const byteArray = base64.toByteArray(base64String);
  return byteArray.buffer as ArrayBuffer; // Explicitly cast to ArrayBuffer
}

// Function to read and extract text from a .docx file
async function readDocxFile(uri: string): Promise<string> {
  try {
    // Read the file as a base64 string
    const fileContent = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    console.log("File content (base64):", fileContent.substring(0, 100)); // Debug log (print only the first 100 chars)

    // Convert Base64 to ArrayBuffer
    const arrayBuffer = base64ToArrayBuffer(fileContent);
    console.log("ArrayBuffer length:", arrayBuffer.byteLength); // Debug log

    // Use Mammoth to extract raw text from the .docx file
    const result = await mammoth.extractRawText({ arrayBuffer });
    console.log("Results: ", result.value);

    return result.value; // Return the extracted text
  } catch (error) {
    console.error("Error reading .docx file:", error);
    throw error;
  }
}

export { readDocxFile };
