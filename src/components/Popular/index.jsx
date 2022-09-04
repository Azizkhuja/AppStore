import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Popular = () => {
  return (
    <Grid container mt={6}>
      <Grid item>
        <Typography variant="h3" mb={4}>
          The most popular apps of the decade
        </Typography>
        <Typography variant="body1">
          Unsurprisingly, it seems that the apps that have ruled the Internet in
          the last decade have been social media apps, with Facebook emerging as
          the clear winner. Facebook does not only occupy the top two places on
          the podium, but the companies that it has acquired, WhatsApp and
          Instagram
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Popular;
