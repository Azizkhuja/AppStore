import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";

import ChunkNews from "./ChunkNews";
import TechCrunchNewsCard from "./TechCrunchNewsCard";

// TechCrunch data fetch data from TechCrunch
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
// Engadget Data fetch dat from Engadget
const engadgetData = [
  {
    title: "NASA replaces Artemis 1's leaky fuel seals",
    img: "https://s.yimg.com/uu/api/res/1.2/K02kWkdGZ3WCg64U6BGYnw--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2022-09/0c06aa80-31f7-11ed-97d7-ab77b22f6ae6.cf.jpg",
    dateTime: "3 hours ago",
    link: "https://www.engadget.com/nasa-replaces-leaky-sls-hydrogen-fuel-seal-173936142.html",
  },
  {
    title: "Disney is remastering Sega Genesis classic ‘Gargoyles’",
    img: "https://s.yimg.com/uu/api/res/1.2/RcKvb3u3uEQL5LXWL_.6lQ--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2022-09/7cb60cc0-31e9-11ed-b96d-ebcefbd0ff89.cf.jpg",
    dateTime: "4 hours ago",
    link: "https://www.engadget.com/disney-remastering-garogyles-155559137.html",
  },
];
// wiredData Data fetch dat from wiredData
const wiredData = [
  {
    title: "The FTC Is Closing in on Runaway AI",
    para: "By Khari Johnson",
    img: "https://media.wired.com/photos/631a70b320bc56769c413043/4:3/w_1600%2Cc_limit/business-ftc-ai.jpg",
    link: "https://www.wired.com/story/ftc-ai-regulation/",
  },
  {
    title: "Why DeepMind Is Sending AI Humanoids to Soccer Camp",
    para: "By Amit Katwala",
    img: "https://media.wired.com/photos/631134163dfe1372fb611162/4:3/w_1600%2Cc_limit/soccer_HZ_science_GettyImages-520264154.jpg",
    link: "https://www.wired.com/story/alphabet-deepmind-ai-humanoids-soccer-camp/",
  },
];
// 9to5Mac Data fetch dat from 9to5Mac
const nineToFiveData = [
  {
    title:
      "Download the official iPhone 14 and 14 Pro wallpapers in full resolution right here",
    img: "https://9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-14-wallpapers.jpg?quality=82&strip=all&w=1600",
    dateTime: "Sep. 12th 2022 1:33 pm PT",
    link: "https://9to5mac.com/2022/09/12/download-iphone-14-14-pro-wallpapers/",
  },
  {
    title:
      "Apple now provides AirPods release notes (and you’ll never guess what they say)",
    img: "https://9to5mac.com/wp-content/uploads/sites/6/2022/09/airpods-firmware-ios-16.jpg?quality=82&strip=all&w=1600",
    dateTime: "Sep. 12th 2022 12:54 pm PT",
    link: "https://9to5mac.com/2022/09/12/airpods-release-notes-ios-16/",
  },
];
const LatestNews = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const smallMatches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://tech-news3.p.rapidapi.com/nineto5mac",
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
        {techCrunchData.map((item, idx) => (
          <TechCrunchNewsCard
            key={idx}
            newsTitle={item.title}
            newsImg={item.img}
            newsDate={item.dateTime}
            newsLink={item.link}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        {engadgetData.map((item, idx) => (
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
            {wiredData.map((item, idx) => (
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
            {nineToFiveData.map((item, idx) => (
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
      </Grid>
    </Grid>
  );
};

export default LatestNews;
