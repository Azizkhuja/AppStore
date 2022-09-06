import Grid from "@mui/material/Unstable_Grid2";

const LatestNews = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        This is for 2 item is the row
      </Grid>
      <Grid item md={4}>
        This is section for small 5 items
      </Grid>
      <Grid item md={4}>
        This is for 2 item is the row
      </Grid>
    </Grid>
  );
};

export default LatestNews;
