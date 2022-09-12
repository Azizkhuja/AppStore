import LatestNews from "./LatestNews";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

const News = () => {
  const small = useMediaQuery("(min-width:600px)");
  const medium = useMediaQuery("(min-width:900px)");
  return (
    <Grid px={2} mb={small ? 3 : 1}>
      <Typography variant={medium ? "h5" : "h6"} my={3}>
        Latest guides, comparisons and news about apps
      </Typography>
      <LatestNews />
    </Grid>
  );
};

export default News;
