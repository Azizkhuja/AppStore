import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import DirectionsCarTwoToneIcon from "@mui/icons-material/DirectionsCarTwoTone";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Typography, Skeleton } from "@mui/material";

const FeaturesCard = () => {
  const { t } = useTranslation();
  const cardInfo = [
    {
      id: 1,
      img: <CreditCardTwoToneIcon />,
      title: `${t("iconTexts.topPaid")}`,
    },
    {
      id: 2,
      img: <HourglassTopTwoToneIcon />,
      title: `${t("iconTexts.topFree")}`,
    },
    {
      id: 3,
      img: <HomeWorkTwoToneIcon />,
      title: `${t("iconTexts.tranding")}`,
    },
    {
      id: 4,
      img: <DirectionsCarTwoToneIcon />,
      title: `${t("iconTexts.topApps")}`,
    },
    {
      id: 5,
      img: <TrendingUpTwoToneIcon />,
      title: `${t("iconTexts.topChart")}`,
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
          {card ? (
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
          ) : (
            <Skeleton variant="rounded" width={145} height={106} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesCard;
