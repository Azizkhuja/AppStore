import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "styled-components";

import Bbcnews from "../../assets/bbcnews.png";
import Financialtimes from "../../assets/financialtimes.png";
import Forbes from "../../assets/forbes.png";
import Reuters from "../../assets/reuters.png";
import Skynews from "../../assets/skynews.png";
import Guardian from "../../assets/guardian.png";

const Partners = () => {
  const partnersLogo = [
    {
      id: 1,
      img: Financialtimes,
    },
    {
      id: 2,
      img: Forbes,
    },
    {
      id: 3,
      img: Guardian,
    },
    {
      id: 4,
      img: Reuters,
    },
    {
      id: 5,
      img: Skynews,
    },
    {
      id: 6,
      img: Bbcnews,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
        }}
      >
        {partnersLogo.map((partner) => (
          <Grid
            item
            xs={6}
            sm={3}
            md={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ImageContainer>
              <img
                key={partner.id}
                src={partner.img}
                alt={partner.img}
                style={{ width: "100%", height: "100%" }}
              />
            </ImageContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ImageContainer = styled.div`
  max-width: 130px;
  max-height: 130px;
`;
export default Partners;
