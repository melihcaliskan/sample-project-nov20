import { useTranslation } from "react-i18next";
import LoginModal from "../components/LoginModal";
import LanguageSelector from "../components/LanguageSelector";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('Welcome to React')}</h2>
      <LoginModal />
      <LanguageSelector />
    </>
  )
}

export default Home;