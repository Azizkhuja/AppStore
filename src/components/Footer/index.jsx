import styled from "styled-components";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";
// Social icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const fullYear = new Date().getFullYear();
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
              <OrderList>Home</OrderList>
              <OrderList>About us</OrderList>
              <OrderList>Our crew</OrderList>
              <OrderList>Careers</OrderList>
              <OrderList>Media room</OrderList>
              <OrderList>Partner with us</OrderList>
            </OrderLists>
            <OrderLists data-testid="footer-list-container">
              <OrderList>
                <FacebookIcon style={{ fontSize: matches ? 38 : 30 }} />
              </OrderList>
              <OrderList>
                <TwitterIcon style={{ fontSize: matches ? 38 : 30 }} />
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
              &copy; {fullYear} AppStore. All rights reserved
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
