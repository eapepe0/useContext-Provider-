import React from 'react';

export const Header = ({
  theme,
  handleTheme,
  handleLanguage,
  texts,
  handleAuth,
  auth
}) => {
  return (
    <header className={theme}>
      <h2 className="text-center my-3">{texts.headerTitle}</h2>
      <h3 className="text-center my-3">{texts.headerSubtitle}</h3>
      <select className="form-select" name="language" onChange={handleLanguage}>
        <option value="es"> es </option>
        <option value="en"> en </option>
      </select>
      <div className="input-group d-flex justify-content-center  my-2">
        <input
          className="mx-2"
          type="radio"
          name="theme"
          id="light"
          value="light"
          select="selected"
          onChange={handleTheme}
        />
        <label htmlFor="">{texts.headerLight}</label>
        <input
          className="mx-2"
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          onChange={handleTheme}
        />
        <label htmlFor="">{texts.headerDark}</label>
      </div>
      <div className="d-flex justify-content-flex-start my-3">
        <button className="btn btn-primary" onClick={handleAuth}>
          {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
      </div>
    </header>
  );
};
