import './index.css';

import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home from './pages/Home'
// TODO: Dosyaya taşınacak.
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "hello": "Hello!",
          "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in convallis lectus, et feugiat velit. Curabitur et est tincidunt, tincidunt erat et, dictum sem. Aliquam mollis orci id congue blandit.",
          "Welcome to React": "Welcome EN",
          "login": "Login",
          "name": "Name",
          "name_incorrect": "Your name is incorrect",
          "email": "E-mail",
          "email_incorrect": "Your e-mail is incorrect",
          "send": "Send"
        }
      },
      tr: {
        translation: {
          "hello": "Merhaba!",
          "lorem": "In pulvinar eros auctor orci rutrum, in egestas ante consequat. Vivamus non nisl eu odio viverra finibus et id enim. Proin sagittis turpis eu sodales porta.",
          "Welcome to React": "Hoşgeldin TR",
          "login": "Giriş Yap",
          "name": "Name",
          "name_incorrect": "Girdiğiniz isim yanlış",
          "email": "E-posta",
          "email_incorrect": "Your e-mail is incorrect",
          "send": "Gönder"
        }
      }
    },
    lng: "en",
    fallbackLng: "en"
  });

function App() {
  return (
    <main>
      <Home />
    </main>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);