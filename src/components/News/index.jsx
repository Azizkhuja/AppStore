import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

const News = () => {
  const medium = useMediaQuery("(min-width:900px)");
  return (
    <Grid px={1}>
      <Typography
        variant={medium ? "h3" : "h5"}
        my={3}
        sx={{ textAlign: "center" }}
      >
        Latest guides, comparisons and news about apps
      </Typography>
    </Grid>
  );
};

export default News;
