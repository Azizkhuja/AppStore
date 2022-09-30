import styled from "styled-components";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";
// Social icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const fullYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={1} sx={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <ArchitectureTwoToneIcon
              data-testid="ArchitectureTwoToneIcon"
              sx={{ color: "#fff", fontSize: matches ? 60 : 50 }}
            />
            <OrderLists
              style={{ flexDirection: matches ? "row" : "column" }}
              data-testid="footer-list"
            >
              <OrderList>{t("footer.home")}</OrderList>
              <OrderList>{t("footer.aboutUs")}</OrderList>
              <OrderList>{t("footer.ourCrew")}</OrderList>
              <OrderList>{t("footer.careers")}</OrderList>
              <OrderList>{t("footer.mediaRoom")}</OrderList>
              <OrderList>Partner with us</OrderList>
            </OrderLists>
            <OrderLists data-testid="footer-list-container">
              <OrderList>
                <BusinessCenterIcon style={{ fontSize: matches ? 38 : 30 }} />
              </OrderList>
              <OrderList>
                <GitHubIcon style={{ fontSize: matches ? 38 : 30 }} />
              </OrderList>
              <OrderList>
                <InstagramIcon style={{ fontSize: matches ? 38 : 30 }} />
              </OrderList>
              <OrderList>
                <LinkedInIcon style={{ fontSize: matches ? 38 : 30 }} />
              </OrderList>
            </OrderLists>
            <Typography
              sx={{ fontSize: matches ? "1rem" : "0.7rem" }}
              data-testid="footer-year"
            >
              &copy; {fullYear} {t("footer.copyRight")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

const OrderLists = styled.ul`
  display: flex;
  justify-content: center;
`;
const OrderList = styled.li`
  margin: 10px;
`;
const FooterContainer = styled.footer`
  background: #101b25;
  color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  text-transform: uppercase;
`;

export default Footer;
