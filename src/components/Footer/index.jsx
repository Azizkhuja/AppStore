import styled from "styled-components";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// Social icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={1} sx={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <Typography>Logo</Typography>
            <OrderLists>
              <OrderList>Home</OrderList>
              <OrderList>About us</OrderList>
              <OrderList>Our crew</OrderList>
              <OrderList>Careers</OrderList>
              <OrderList>Media room</OrderList>
              <OrderList>Partner with us</OrderList>
            </OrderLists>
            <OrderLists>
              <OrderList>
                <FacebookIcon />
              </OrderList>
              <OrderList>
                <TwitterIcon />
              </OrderList>
              <OrderList>
                <InstagramIcon />
              </OrderList>
              <OrderList>
                <LinkedInIcon />
              </OrderList>
            </OrderLists>
            <Typography> &copy; 2022 AppStore. All rights reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #101b25;
  color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const OrderLists = styled.ul`
  display: flex;
  justify-content: center;
`;
const OrderList = styled.li`
  margin: 10px;
`;

export default Footer;
