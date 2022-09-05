import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import PopularTable from "./PopularTable";

const Popular = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Grid container mt={6}>
      <Grid item p={matches ? 0 : 2}>
        <Typography variant={matches ? "h2" : "h4"} mb={3}>
          The most popular apps of the decade
        </Typography>
        <Typography variant="body1" mb={2}>
          Unsurprisingly, it seems that the apps that have ruled the Internet in
          the last decade have been social media apps, with Facebook emerging as
          the clear winner. Facebook does not only occupy the top two places on
          the podium, but the companies that it has acquired, WhatsApp and
          Instagram
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6} p={2}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Top apps on Android platform
        </Typography>
        <PopularTable />
      </Grid>
      <Grid item xs={12} lg={6} p={2} sx={{ textAlign: "center" }}>
        <Typography variant="h6">Top apps on iOS platform</Typography>
        <PopularTable />
      </Grid>
    </Grid>
  );
};

export default Popular;
