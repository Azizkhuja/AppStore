import Grid from "@mui/material/Unstable_Grid2";

const LatestNews = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        This is for 2 item is the row This is for 2 item is the row This is for
        2 item is the rows
      </Grid>
      <Grid item md={4}>
        This is section for small 5 items This is section for small 5 items This
        is section for small 5 items
      </Grid>
      <Grid item md={4}>
        This is for 2 item is the row This is for 2 item is the row This is for
        2 item is the rows
      </Grid>
    </Grid>
  );
};

export default LatestNews;
