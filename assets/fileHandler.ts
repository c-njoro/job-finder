import * as FileSystem from "expo-file-system";
import mammoth from "mammoth";

// Custom error class for unsupported files
class UnsupportedFileTypeError extends Error {
  constructor(fileExtension: string) {
    super(`Unsupported file type: ${fileExtension}`);
    this.name = "UnsupportedFileTypeError";
  }
}

// Function to read and extract text from a .docx file
async function readDocxFile(uri: string): Promise<string> {
  try {
    // Read the file as a base64 string
    const fileContent = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Use Mammoth to extract raw text from the .docx file
    const result = await mammoth.extractRawText({
      buffer: Buffer.from(fileContent, "base64"),
    });

    return result.value; // Return the extracted text
  } catch (error) {
    console.error("Error reading .docx file:", error);
    throw error;
  }
}

export { readDocxFile, UnsupportedFileTypeError };
