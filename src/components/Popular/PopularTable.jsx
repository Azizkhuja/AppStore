import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  tableCellClasses,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

const dataAll = [
  {
    app_id: "com.google.android.apps.subscriptions.red",
    app_name: "Google One",
    app_category: "Productivity",
    app_developer: "Google LLC",
    num_downloads: "500,000,000+",
    app_description:
      "The Google One app lets you automatically back up your phone and manage your Google cloud storage.\n• Automatically back up the important things on your phone, like photos, contacts and messages using your free 15 GB of storage that comes with every Google account. If you break, lose or upgrade your phone, you can restore everything to your new Android device.\n• Manage your existing Google account storage across Google Drive, Gmail and Google Photos.\n\nUpgrade to a Google One membership to get even more: \n• Get as much storage as you need for your important memories, projects and digital files. Choose the plan that works best for you. \n• Get extra protection for your phone with a VPN that encrypts your online activity and helps keep your personal information safe\n• Get exclusive access to Google experts for help with all of Google’s products and services. If you have a question or need assistance, our team of Google experts is just a tap away.\n• Share your storage with up to 5 additional people. This gives each person access to more storage from your plan, but not access to each other’s files.",
    app_page_link:
      "https://play.google.com/store/apps/details?id=com.google.android.apps.subscriptions.red",
    price: 0,
    price_currency: null,
    is_paid: false,
    rating: 4,
    photos: [
      "https://play-lh.googleusercontent.com/Hq1_md0WKFpe6InQDSxckKJRs8SgVFQVWxxl3i-ajrzXKa1fFSp1oJPuKODDFRNFyc4A",
      "https://play-lh.googleusercontent.com/Pz5zeJ7qzbfs0LmGQI-8dH957NuB49WeSxrbNEhzxs0pD2_4BTRinyT5M_UULQH2xA",
      "https://play-lh.googleusercontent.com/yAN2k-Xwt_0omZGVuBAfU2Kn-v5GBDLTineLs1lbH2X6IlWPsHxMsTLfPBPvmt3y9qg",
      "https://play-lh.googleusercontent.com/DEoNef6aL5xnBkgd8lXL9MiSA2BCa5aFDqq5t2hmUvMVhTdZoVQWUVud4H8RKFoFow",
      "https://play-lh.googleusercontent.com/WA26z-ix6Z3Ep1mIsjVmO2HGH07yhJ0s_sdDqUFMqQLdKSPmrUBYymrf1i4kM0GM-SE",
      "https://play-lh.googleusercontent.com/TesXWUcblbj1Ep_mFv6s4yOKLLra9L6VgI0GOZ9xttxM43Al5a7uPTw9DqOBSvHVZ11z",
    ],
    app_icon:
      "https://play-lh.googleusercontent.com/DGAleS46qOedNzJGsB3e29QLpL6Qi6EwIDze95nBvxMAMGEmbE6KOW__2haEkHVDs4Y",
    trailer:
      "https://play.google.com/video/lava/web/player/yt:movie:4Ltr3pqgCSQ",
  },
  {
    app_id: "com.hbo.hbonow",
    app_name: "HBO Max: Stream TV & Movies",
    app_category: "Entertainment",
    app_developer: "WarnerMedia Global Digital Services, LLC",
    num_downloads: "100,000,000+",
    app_description:
      "Limited-time offer. Save over 40% when you prepay for a year. Savings based on yearly plan paid upfront vs. monthly plan paid over 12 mos. Ends 10/30/22. See HBOMax.com.\n\nHBO Max is a premium streaming app that combines all of HBO with even more must-see TV shows, blockbuster movies, and exclusive Max Originals. It’s everything you love, all in one place. All of HBO. All of the greatest TV and hit movies. All yours. Available anytime to stream on your favorite screens. \n\nWith unlimited access to thousands of hours of entertainment, we’ve got something for everyone in your family. Keep up with fresh episodes from the latest HBO shows and fall back in love with the iconic TV everyone’s still talking about. Watch new movies from D.C. and Warner Bros, plus the comedies, dramas, and classics you love. \n\nSo kick back in your comfiest loungewear and find your next favorite from one of our curated hubs, including HBO, D.C., the Cartoon Network Collection, Classics curated by TCM, Sesame Workshop, and more. With HBO Max, you’ll always find something new to stream. \n\n\nHere’s what’s waiting for you:\n\n• All of HBO with even more critically-acclaimed movies, binge-worthy TV shows, and Max Originals.\n• Bingeable collections hand-picked by our editorial experts—not robots.\n• One-of-a-kind kids experience with flexible parental controls.\n• HBO Max Hubs devoted to beloved brands including HBO, the Adult Swim Collection, the Cartoon Network Collection, Looney Tunes, Classics curated by TCM, DC, and more.\n• Download episodes and movies to your phone or tablet to watch offline, anytime.\n• Up to five viewer profiles with customizable profile images.\n\n\n\nContent and feature availability on HBO Max may vary by region. Some titles and features shown above may not be available in your country.\n\nHBO Max is only accessible in certain territories.\n\nFor help, please visit help.HBOMax.com.\n\nPrivacy Policy: https://www.hbomax.com/privacy\nTerms of Use: https://www.hbomax.com/terms-of-use\nFor California residents only, manage sharing your data at: http://warnermediaprivacy.com/do-not-sell",
    app_page_link:
      "https://play.google.com/store/apps/details?id=com.hbo.hbonow",
    price: 0,
    price_currency: null,
    is_paid: false,
    rating: 3,
    photos: [
      "https://play-lh.googleusercontent.com/buGpC6LJ0jwYJqpK4ytBl2Yvv8nql7dZ2FFiqUSbmJiGSL_qdVl7SHD25m4hWFBT_j-4",
      "https://play-lh.googleusercontent.com/XFndIHkTWOGbfVMOpPPdZxZJ_nTgyI6wrF47LoTSU8IfpVv9lsna8Nig1CiMk394WQ",
      "https://play-lh.googleusercontent.com/9Ox8AdPQp2iXMoW1H0wvKGA5MfKVbNB_2nPTXkkH-jp3HhMAiZCd38YxXqmhAVmpom9Y",
      "https://play-lh.googleusercontent.com/HWzli0YE3ltQRxGsfcnzpILWHcQI_cZri9-HLtzKMLJgR2u844Q7CdnS7qdudQN1Hek",
      "https://play-lh.googleusercontent.com/wwJM9J65L4k5IWc0kxvMRKn-VdhNW4716hLRa9NUTXXmJRTkIy0WkSWrT4Aliz72tsiD",
      "https://play-lh.googleusercontent.com/5fVeU2bX9yiUDCGAVRvTi3KgZUVcP73lPkSttGATNBry05ioX7pVmK9KYX5LieloETg",
      "https://play-lh.googleusercontent.com/bOHRQQjGyevcpQ-qNrb7rOIJsoMFgc28EF22y2whz9qrSrOcZdYTXnMWNrD1_LhXmw",
      "https://play-lh.googleusercontent.com/BrehyVgiz2sXIJ_qPoN3kTJzHPHVuwB0MnbxAzJzNvA6DP9DdVVbxWJNoO9gbAGZRuI",
      "https://play-lh.googleusercontent.com/t7GF74OxZjT4BXFIMoUoOUTxIwn8xObZL-AQm0liGZSXPsEGON3usplnjooixN5gOQ0",
      "https://play-lh.googleusercontent.com/xyPDkNLGK42qZDNMb3GmnTZQd0-D4LKshtpyKUZ5cDhZ5xxZqDwUlWoY6pvtx8Yo_NM",
      "https://play-lh.googleusercontent.com/NxprhFLX2ht_-c2DucecCmWGlcfzbY_WI7foL-zjVhBs1d_mbhy-B-Kwq4GOR0VbZOc",
      "https://play-lh.googleusercontent.com/2DxZ7Jo-9HJBALV0Rg5jnZy8yV7n1RXmJYqswwAlPvDH6n-SQ8GYLfPfz58ihq8JHWc",
      "https://play-lh.googleusercontent.com/a-Ma7uIIKx0j55EzYbKYHJAEh2VLZrWV_kIoJHu_LM9mlTq0O8y44DqjloPwrLmNocjy",
      "https://play-lh.googleusercontent.com/K3w1mWP7CmjgsJGUUh3MIA8cxWfSwyQW3DF3q2ojoyig4kWblv8Pg8TJHuzBtnNGv_-k",
      "https://play-lh.googleusercontent.com/dercTneZwcgNXrFJNtc4Bj8jd9_uc-B3OGQVDpgOtDNdh9qya0E0LEE0mOwPclG2AQ",
      "https://play-lh.googleusercontent.com/UEs1N9UUTx0oyoeV-9dom7ZN505d-j0M22s3g9XOBFU68HVDofymDNMIfonGN9ylWg",
      "https://play-lh.googleusercontent.com/QJws4Z3lUdJwcxUMB_otKtjHZpsLKzfgGggPuhD4LmGBvxOUY0lrFkznJ9VTD0VaBkq8",
      "https://play-lh.googleusercontent.com/W9HbcDkxt_2wAAvJIJZP2Ip-kDYv7TU7xAq5pE1cM8SjIdcTIxgwnazYAwvYkLfoSQ",
      "https://play-lh.googleusercontent.com/pPxHxScTMZIiv809HC_sDALYZKtKLEyAx70XZcjhB_qi03XyAwkVbdAuteYJzZGOg6c",
      "https://play-lh.googleusercontent.com/_umbX0VeQp51568QpOnPOyl2up_g7MNJR6L9gwDvfQ2CSBfyEWvKDKzOuchaesHdm6Pe",
      "https://play-lh.googleusercontent.com/L-ljaaH24G-3o7IaMsm5Tfw4vINCSV7uGm3C_rX9B9KUhpyxzktVqqL1KKXclvL9lYI",
    ],
    app_icon:
      "https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8",
    trailer: null,
  },
  {
    app_id: "com.zhiliaoapp.musically",
    app_name: "TikTok",
    app_category: "Social",
    app_developer: "TikTok Pte. Ltd.",
    num_downloads: "1,000,000,000+",
    app_description:
      "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.\n\nWe make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. \n\n■ Watch endless amount of videos customized specifically for you\nA personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.\n \n■ Explore videos, just one scroll away\nWatch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.\n \n■ Pause recording multiple times in one video\nPause and resume your video with just a tap. Shoot as many times as you need.\n \n■ Be entertained and inspired by a global community of creators\nMillions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.\n\n■ Add your favorite music or sound to your videos for free\nEasily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.\n\n■ Express yourself with creative effects\nUnlock tons of filters, effects, and AR objects to take your videos to the next level.\n\n■ Edit your own videos \nOur integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.\n\n* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us",
    app_page_link:
      "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically",
    price: 0,
    price_currency: null,
    is_paid: false,
    rating: 4,
    photos: [
      "https://play-lh.googleusercontent.com/hhfVtL-8_KaCLiaju3Wx02nTJHVmX7wDVpZBWayfIFSW7WUJgQyDkojhoM96gApF7A",
      "https://play-lh.googleusercontent.com/ZwwGfc4K4JnnIvNYkRPd7-lF8ThncBINvlPQpRVjxjMR1iO3firAJOhUNbj5wf7bR0aR",
      "https://play-lh.googleusercontent.com/iPiFG9Nh_zAJkRlOp9jnehSTZSAq6dq7r4RHGG2L7no7zfpfilfnuX3TDXRdaGduKUs",
      "https://play-lh.googleusercontent.com/VKBVqHY7HAiIJ0rnuTpB9OfCRMEYO1ZCNtGLCnM9cGV7dJzNf2T47SR7fps0R8hGzyUe",
      "https://play-lh.googleusercontent.com/z4KkFAlgxf2hERHHH6p4JOnLwbz4YaUKCB7SZAlrT6qA6Lk9xOAj8SOAdIuB-1EY0c8",
      "https://play-lh.googleusercontent.com/hmtBVAgFK-2GQ4EapTn-XH-JUhCJv6A0h4g2fr22Kiv8kU5Cy0HYoq7in79yboYTCA",
    ],
    app_icon:
      "https://play-lh.googleusercontent.com/z5nin1RdQ4UZhv6fa1FNG7VE33imGqPgC4kKZIUjgf_up7E-Pj3AaojlMPwNNXaeGA",
    trailer: null,
  },
];

const PopularTable = () => {
  const matches = useMediaQuery("(min-width:500px)");
  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://google-play6.p.rapidapi.com/top-grossing-apps",
    //   params: { region: "us", language: "en" },
    //   headers: {
    //     "X-RapidAPI-Key": "7fc51b42eamshead613badf68db5p1d54a0jsnac2797b92d68",
    //     "X-RapidAPI-Host": "google-play6.p.rapidapi.com",
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
    <TableContainer component={Paper} data-testid="table-container">
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ display: matches ? "table-cell" : "none" }}>
              Rank
            </StyledTableCell>
            <StyledTableCell align="center">Logo</StyledTableCell>
            <StyledTableCell>App Name</StyledTableCell>
            <StyledTableCell sx={{ display: matches ? "table-cell" : "none" }}>
              Category
            </StyledTableCell>
            <StyledTableCell>Downloads</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataAll.map((row) => (
            <StyledTableRow key={row.app_id}>
              <StyledTableCell
                align="center"
                sx={{ display: matches ? "table-cell" : "none" }}
              >
                <Typography variant="body1">
                  <StarTwoToneIcon />
                </Typography>
                <Typography variant="subtitle1">{row.rating}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <img
                  src={row.app_icon}
                  style={{
                    width: matches ? 50 : 30,
                    height: matches ? 50 : 30,
                  }}
                />
              </StyledTableCell>
              <StyledTableCell>{row.app_name}</StyledTableCell>
              <StyledTableCell
                sx={{ display: matches ? "table-cell" : "none" }}
              >
                {row.app_category}
              </StyledTableCell>
              <StyledTableCell>{row.num_downloads}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default PopularTable;
