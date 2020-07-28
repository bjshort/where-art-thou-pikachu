export interface TranslationResponseDTO {
  success: { total: number };
  contents: {
    translated: string;
    text: string;
    translation: string;
  };
}
