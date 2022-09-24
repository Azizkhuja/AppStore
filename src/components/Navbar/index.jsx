import { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import i18next from "i18next";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";

function Navbar() {
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#fff", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#000" }}
          >
            <MenuIcon data-testid="MenuIcon" />
          </IconButton>
          <ArchitectureTwoToneIcon sx={{ color: "#000", fontSize: 40 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000",
              display: { xs: "none", sm: "block" },
            }}
          >
            App Store
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              data-testid="search-input"
              placeholder={t("appBar")}
              inputProps={{ "aria-label": "search" }}
              style={{ color: "#000" }}
            />
          </Search>
          <select
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="us">🇺🇸 US</option>
            <option value="es">🇪🇸 ES</option>
          </select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default Navbar;
