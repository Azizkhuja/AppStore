import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container spacing={1} sx={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <Typography>Logo</Typography>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
            <ul>
              <li>Social icons</li>
              <li>Social icons</li>
              <li>Social icons</li>
              <li>Social icons</li>
            </ul>
            <Typography> &copy; 2022 AppStore. All rights reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
