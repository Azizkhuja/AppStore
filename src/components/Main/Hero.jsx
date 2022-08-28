import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../../assets/finder_credit_score.png";

const Hero = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledTypography variant="h2" gutterBottom>
            Get single application statistics
          </StyledTypography>
          <OrderList>
            <li>Join over 1 million Finder members*</li>
            <li>Start with a FREE credit score & report</li>
            <li>Find a better deal in minutes</li>
          </OrderList>
          <HeroButton variant="contained">Get free credit report</HeroButton>
        </Grid>
        <Grid xs={6}>
          <HeroImage src={logo} alt="main-image" />
        </Grid>
      </Grid>
    </Box>
  );
};

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledTypography = styled(Typography)`
  && {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    text-align: center;
  }
`;
const HeroButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;
const OrderList = styled.ol`
  font-weight: 600;
`;

export default Hero;
