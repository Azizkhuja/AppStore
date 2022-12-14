import { useEffect } from "react";
import i18next from "i18next";
import styled from "styled-components";

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
    <SelectStyle
      value={localStorage.getItem("i18nextLng")}
      onChange={handleLanguageChange}
    >
      <option value="us">πΊπΈ US</option>
      <option value="es">πͺπΈ ES</option>
    </SelectStyle>
  );
};

const SelectStyle = styled.select`
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: none;
`;

export default LangSelector;
