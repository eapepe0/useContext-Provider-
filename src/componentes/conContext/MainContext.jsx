import React, { useContext } from 'react';
import { LanguageContext, ThemeContext, AuthContext } from '../context';

export const MainContext = () => {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);
  return (
    <main className={theme}>
      {auth ? (
        <>
          <p>{texts.mainWelcome}</p>
          <p>{texts.mainContent}</p>
        </>
      ) : (
        <p>{texts.mainHello}</p>
      )}
    </main>
  );
};
