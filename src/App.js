import React from 'react';
import { MyPage } from './componentes/MyPage';
import { MyPageContext } from './componentes/conContext/MyPageContext';
import {
  ThemeProvider,
  LanguageProvider,
  AuthProvider
} from '../src/componentes/context';

export const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <MyPage />
          <hr />
          <MyPageContext />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};
