import { supportedLanguages as supported } from "./supportedLanguages";
import { appTranslations } from "./appTranslations";
import { infoTranslations } from "./infoTranslations";
// import { tourTranslations } from "./gameTranslations";

const createTranslation = () => {
  const translation = {}
  for (const lang of supported) {
    // @ts-expect-error Common TS!
    translation[lang] = {
      ...appTranslations[lang],
      ...infoTranslations[lang],
      // ...tourTranslations,
    }
  }
  return translation
}

export const supportedLanguages = supported
const t = createTranslation() as { [key: string]: { [key: string]: string } }
export default t