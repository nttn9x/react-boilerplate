import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: {
          app_name: "Jaipu",
          lets_go: "Let's Go",
          sign_in: "SIGN IN",
          sign_out: "Sign out",
          username: "Username",
          password: "Password",
          delete: "Delete",
          this_field_is_required: "This field is required",
          dashboard: "Dashboard",
          users: "Users",
          fields: "Fields"
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
