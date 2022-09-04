import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import DirectionsCarTwoToneIcon from "@mui/icons-material/DirectionsCarTwoTone";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FeaturesCard = () => {
  const cardInfo = [
    {
      id: 1,
      img: <CreditCardTwoToneIcon />,
      title: "Top Paid",
    },
    {
      id: 2,
      img: <HourglassTopTwoToneIcon />,
      title: "Top Free",
    },
    {
      id: 3,
      img: <HomeWorkTwoToneIcon />,
      title: "Tranding",
    },
    {
      id: 4,
      img: <DirectionsCarTwoToneIcon />,
      title: "Top Apps",
    },
    {
      id: 5,
      img: <TrendingUpTwoToneIcon />,
      title: "Top chart",
    },
    {
      id: 6,
      img: <ShoppingBagTwoToneIcon />,
      title: "Platinum",
    },
  ];
  return (
    <Grid container spacing={1}>
      {cardInfo.map((card) => (
        <Grid
          item
          xs={6}
          sm={4}
          lg={2}
          sx={{ display: "flex", justifyContent: "center" }}
          key={card.id}
        >
          <Card
            sx={{
              display: "inline-block",
              border: "1px solid #e3e5e8",
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {card.img}
              <Typography variant="h6" mt={1}>
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesCard;
