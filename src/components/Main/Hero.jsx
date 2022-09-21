import styled from "styled-components";
import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../../assets/finder_credit_score.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const medium = useMediaQuery("(min-width:900px)");
  const small = useMediaQuery("(min-width:600px)");

  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: small ? 0 : 4,
            marginLeft: small ? 0 : "auto",
            marginRight: small ? 0 : "auto",
            padding: 3,
          }}
        >
          <StyledTypography variant={medium ? "h2" : "h3"} gutterBottom>
            {t("title")}
          </StyledTypography>
          <OrderList data-testid="list-contianer">
            <li>Join over 1 million Finder members*</li>
            <li>Start with a FREE credit score & report</li>
            <li>Find a better deal in minutes</li>
          </OrderList>
          <HeroButton
            variant="contained"
            sx={{
              backgroundColor: "#000",
              ":hover": {
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "none",
              },
            }}
          >
            Get free credit report
          </HeroButton>
        </Grid>
        <Grid sm={6}>
          <HeroImage data-testid="hero-image" src={logo} alt="main-image" />
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
