import { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

import ChunkNews from "./ChunkNews";
import TechCrunchNewsCard from "./TechCrunchNewsCard";

// TechCrunch data
const techCrunchData = [
  {
    title: "The tech industry needs a labor movement",
    img: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1234274008-1.jpg?w=300&h=160&crop=1",
    dateTime: "Sep 11, 2022",
    link: "https://techcrunch.com/2022/09/11/the-tech-industry-needs-a-labor-movement/",
  },
  {
    title: "VC fundraising gets weird as autumn nears",
    img: "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-943401146.jpg?w=300&h=160&crop=1",
    dateTime: "Sep 11, 2022",
    link: "https://techcrunch.com/2022/09/11/vc-fundraising-gets-weird-as-autumn-nears/",
  },
];

const LatestNews = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const smallMatches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://tech-news3.p.rapidapi.com/techcrunch",
    //   headers: {
    //     "X-RapidAPI-Key": "7fc51b42eamshead613badf68db5p1d54a0jsnac2797b92d68",
    //     "X-RapidAPI-Host": "tech-news3.p.rapidapi.com",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        {techCrunchData.map((item) => (
          <TechCrunchNewsCard
            newsTitle={item.title}
            newsImg={item.img}
            newsDate={item.dateTime}
            newsLink={item.link}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <TechCrunchNewsCard
          newsTitle={"newsTitle3"}
          newsImg={"newsImg3"}
          newsDate={"newsDate3"}
          newsLink={"newsLink3"}
        />
        <TechCrunchNewsCard
          newsTitle={"newsTitle4"}
          newsImg={"newsImg4"}
          newsDate={"newsDate4"}
          newsLink={"newsLink4"}
        />
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
            <ChunkNews
              chunkNewsTitle={"Chunk title"}
              chunkNewsImg={"Image"}
              chunkNewsDate={"21.02.2012"}
              chunkNewsLink={"test"}
            />
            <ChunkNews
              chunkNewsTitle={"Chunk title"}
              chunkNewsImg={"Image"}
              chunkNewsDate={"21.02.2012"}
              chunkNewsLink={"test"}
            />
          </Grid>
          <Grid
            item
            sm={matches ? null : 6}
            xs={smallMatches ? null : 12}
            sx={{ width: "100%" }}
          >
            <ChunkNews
              chunkNewsTitle={"Chunk title"}
              chunkNewsImg={"Image"}
              chunkNewsDate={"21.02.2012"}
              chunkNewsLink={"test"}
            />
            <ChunkNews
              chunkNewsTitle={"Chunk title"}
              chunkNewsImg={"Image"}
              chunkNewsDate={"21.02.2012"}
              chunkNewsLink={"test"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LatestNews;
