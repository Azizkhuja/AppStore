import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Typography, Tooltip, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";
// Social icons
import LanguageIcon from "@mui/icons-material/Language";
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
              <OrderList>{t("footer.partnerWithUs")}</OrderList>
            </OrderLists>
            <OrderLists data-testid="footer-list-container">
              <OrderList>
                <Tooltip title="Portfolio" placement="left">
                  <Link
                    href="https://azeezkhujaev.netlify.app/"
                    color="inherit"
                    target="_blank"
                  >
                    <BusinessCenterIcon
                      style={{ fontSize: matches ? 38 : 30 }}
                    />
                  </Link>
                </Tooltip>
              </OrderList>
              <OrderList>
                <Tooltip title="GitHub" placement="bottom">
                  <Link
                    href="https://github.com/Azizkhuja"
                    color="inherit"
                    target="_blank"
                  >
                    <GitHubIcon style={{ fontSize: matches ? 38 : 30 }} />
                  </Link>
                </Tooltip>
              </OrderList>
              <OrderList>
                <Tooltip title="My Website" placement="top">
                  <Link
                    href="https://twitter.com/aziz_ipro"
                    color="inherit"
                    target="_blank"
                  >
                    <LanguageIcon style={{ fontSize: matches ? 38 : 30 }} />
                  </Link>
                </Tooltip>
              </OrderList>
              <OrderList>
                <Tooltip title="LinkedIn" placement="right">
                  <LinkedInIcon style={{ fontSize: matches ? 38 : 30 }} />
                </Tooltip>
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
