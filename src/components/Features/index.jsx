import FeaturesCard from "./FeaturesCard";
import styled from "styled-components";
import { Typography } from "@mui/material";

function Features() {
  return (
    <div>
      <StyledHeadline variant="h3">Start saving money</StyledHeadline>
      <StyledSubHeadline variant="h5">
        Find better deals across 100+ categories
      </StyledSubHeadline>
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
  }
`;
export default Features;
