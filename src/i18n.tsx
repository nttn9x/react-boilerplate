import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: {
          app_name: "S-Product",
          items: "items",
          item: "item",
          title_app: "hello Nguyen",
          active: "Active",
          completed: "Done",
          all: "All",
          delete: "Delete"
        },
        todo: {
          input_placeholder:
            "Enter todo name here (Press key Enter to add more)"
        }
      },
      vi: {}
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
