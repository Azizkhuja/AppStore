import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Loader from "../Helpers/Loader";
import { Skeleton } from "@mui/material";
import ChunkNews from "./ChunkNews";
import TechCrunchNewsCard from "./TechCrunchNewsCard";
import { useFetch } from "./useFetch";

const LatestNews = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const smallMatches = useMediaQuery("(min-width:600px)");

  // const { data: nineToFiveData, loading } = useFetch(
  //   "https://tech-news3.p.rapidapi.com/nineto5mac"
  // );
  // const { data: wiredData, loading: wiredLoading } = useFetch(
  //   "https://tech-news3.p.rapidapi.com/wired"
  // );
  // const { data: techCrunchData } = useFetch(
  //   "https://tech-news3.p.rapidapi.com/techcrunch"
  // );
  // const { data: engadgetData } = useFetch(
  //   "https://tech-news3.p.rapidapi.com/engadget"
  // );

  // if (loading) return <Loader />;

  return (
    <Grid container spacing={1}>
      {/* <Grid item xs={12} sm={6} md={4}>
        {techCrunchData?.map((item, idx) => (
          <TechCrunchNewsCard
            key={idx}
            newsTitle={item.title}
            newsImg={item.img}
            newsDate={item.dateTime}
            newsLink={item.link}
          />
        ))}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {engadgetData?.map((item, idx) => (
          <TechCrunchNewsCard
            key={idx}
            newsTitle={item.title}
            newsImg={item.img}
            newsDate={item.dateTime}
            newsLink={item.link}
          />
        ))}
      </Grid>
      <Grid item md={4} sx={{ width: matches ? null : "100%" }}>
        <Grid container>
          <Grid
            item
            sm={matches ? null : 6}
            xs={smallMatches ? null : 12}
            sx={{
              width: "100%",
            }}
          >
            {wiredData?.map((item, idx) => (
              <ChunkNews
                key={idx}
                chunkNewsTitle={item.title}
                chunkNewsImg={item.img}
                chunkNewsDate={item.para}
                chunkNewsLink={item.link}
              />
            ))}
          </Grid>
          <Grid
            item
            sm={matches ? null : 6}
            xs={smallMatches ? null : 12}
            sx={{ width: "100%" }}
          >
            {nineToFiveData?.map((item, idx) => (
              <ChunkNews
                key={idx}
                chunkNewsTitle={item.title}
                chunkNewsImg={item.img}
                chunkNewsDate={item.dateTime}
                chunkNewsLink={item.link}
              />
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default LatestNews;
