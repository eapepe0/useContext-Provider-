import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const initialLanguage = 'es'; // lenguaje inicial de la app
  const [language, setLanguage] = useState(initialLanguage);
  const translations = {
    es: {
      headerTitle: 'Mi App con context API',
      headerSubtitle: 'Mi cabecera',
      headerLight: 'Claro',
      headerDark: 'Oscuro',
      buttonLogin: 'Iniciar Sesion',
      buttonLogout: 'Cerrar Sesion',
      mainWelcome: 'Bienvenido Colosin',
      mainHello: 'Hola Usuario invitado',
      mainContent: 'Mi contenido principal',
      footerTitle: 'Mi pie de pagina'
    },
    en: {
      headerTitle: 'My App with context API',
      headerSubtitle: 'My header',
      headerLight: 'Light',
      headerDark: 'Dark',
      buttonLogin: 'Login',
      buttonLogout: 'Logout',
      mainWelcome: 'Welcome Colosin',
      mainHello: 'Hello user guest',
      mainContent: 'My main content',
      footerTitle: 'My footer'
    }
  };
  const [texts, setTexts] = useState(translations[language]); // estado texto , inicializamos con el texto y el lenguaje que queremos por defecto
  // objetos con las traducciones

  const handleLanguage = (e) => {
    // cambia el idioma segun el select
    const choice = e.target.value;
    if (choice === 'es') {
      // si es español cambia el lenguaje a español
      setLanguage(choice);
      setTexts(translations.es); // y el texto a español
    } else {
      setLanguage(choice);
      setTexts(translations.en);
    }
  };

  const data = { initialLanguage, language, texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
