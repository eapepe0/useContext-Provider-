import { createContext, useState } from 'react';

export const AuthContext = createContext();
const initialAuth = false; // estamos autenticados ?

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth); // estado autentificacion con el valor falso
  const handleAuth = (e) => {
    // maneja el evento de autenticacion
    setAuth(!auth); // si es falso lo hacemos verdadero , si es verdadero lo hacemos falso
  };

  const data = { auth, handleAuth };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
