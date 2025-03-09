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
            signup: "Sign Up",
            logout: "Logout",
            circularSolutions: "Circular Solutions",
            wasteManagement: "Waste Management",
            eWaste: "E-Waste",
            plasticRecycling: "Plastic Recycling",
            recyclingPrograms: "Recycling Programs",
            guides: "Guides",
            caseStudies: "Case Studies",
            researchPapers: "Research Papers",
            forum: "Forum",
            events: "Events",
            partners: "Partners",
            downloads: "Downloads",
            calculators: "Calculators",
            apiDocs: "API Documentation",
            userAvatar: "Profile picture of {{name}}",
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
            signup: "Registrarse",
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