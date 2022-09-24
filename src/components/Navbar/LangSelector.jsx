import { useEffect } from "react";
import i18next from "i18next";

const LangSelector = () => {
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <select
      value={localStorage.getItem("i18nextLng")}
      onChange={handleLanguageChange}
    >
      <option value="us">🇺🇸 US</option>
      <option value="es">🇪🇸 ES</option>
    </select>
  );
};

export default LangSelector;
