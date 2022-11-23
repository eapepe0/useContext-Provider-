import React, { useState, useContext } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

const initialTheme = 'light'; // valor inicial de tema
const initialLanguage = 'es'; // lenguaje inicial de la app
const initialAuth = false; // estamos autenticados ?

// objetos con las traducciones
const translations = {
  es: {
    headerTitle: 'Mi App sin context API',
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
    headerTitle: 'My App without context API',
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

export const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme); // estado tema con el valor inicial
  const [language, setLanguage] = useState(initialLanguage); // estado lenguaje con el valor inicial
  const [texts, setTexts] = useState(translations[language]); // estado texto , inicializamos con el texto y el lenguaje que queremos por defecto
  const [auth, setAuth] = useState(initialAuth); // estado autentificacion con el valor falso

  const handleTheme = (e) => {
    // cambia el tema segun el valor del input radio
    setTheme(e.target.value);
  };

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

  const handleAuth = (e) => {
    // maneja el evento de autenticacion
    setAuth(!auth); // si es falso lo hacemos verdadero , si es verdadero lo hacemos falso
  };
  return (
    <div className={`my-page container ${theme}`}>
      <Header
        theme={theme}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        texts={texts}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
