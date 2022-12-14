import FeaturesCard from "./FeaturesCard";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();
  return (
    <div>
      <StyledHeadline variant="h2">{t("heroTitle")}</StyledHeadline>
      <StyledSubHeadline variant="h3">{t("heroSubTitle")}</StyledSubHeadline>
      <FeaturesCard />
    </div>
  );
}

const StyledHeadline = styled(Typography)`
  && {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 38.4px;
    margin-bottom: 8px;
    text-align: center;
  }
`;
const StyledSubHeadline = styled(Typography)`
  && {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: #6c7881;
    margin-bottom: 16px;
    text-align: center;
  }
`;
export default Features;
