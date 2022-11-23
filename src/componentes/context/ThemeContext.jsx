// # por cada funcionalidad global creamos un Context

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const initialTheme = 'light'; // valor inicial de tema

// el consumidor o consumer seria el hook useContext
// envuelve a todos los componentes en los cual se quieran compartir
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme); // estado tema con el valor inicial
  const handleTheme = (e) => {
    // cambia el tema segun el valor del input radio
    setTheme(e.target.value);
  };
  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
