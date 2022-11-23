import React from 'react';

export const Main = ({ theme, texts, auth }) => {
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
