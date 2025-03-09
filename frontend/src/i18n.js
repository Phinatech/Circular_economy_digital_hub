import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Basic translations
const resources = {
  en: {
    translation: {
      solutions: "Solutions",
      knowledgeCenter: "Knowledge Center",
      community: "Community",
      resources: "Resources",
      searchPlaceholder: "Search...",
      login: "Login",
      logout: "Logout",
      language: {
        en: "English",
        es: "Spanish",
        fr: "French"
      }
    }
  },
  es: {
    translation: {
      solutions: "Soluciones",
      knowledgeCenter: "Centro de conocimiento",
      community: "Comunidad",
      resources: "Recursos",
      searchPlaceholder: "Buscar...",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
      language: {
        en: "Inglés",
        es: "Español",
        fr: "Francés"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;