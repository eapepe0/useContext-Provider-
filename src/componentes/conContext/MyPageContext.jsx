import React from 'react';

import { FooterContext } from './FooterContext';
import { HeaderContext } from './HeaderContext';
import { MainContext } from './MainContext';

export const MyPageContext = () => {
  return (
    /*  <ThemeProvider> */
    <div className={`my-page container `}>
      <HeaderContext />
      <MainContext />
      <FooterContext />
    </div>
    /*     </ThemeProvider> */
  );
};
