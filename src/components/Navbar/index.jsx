import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";
import LangSelector from "./LangSelector";
import jwtDecode from "jwt-decode";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

function Navbar() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("items")) || null
  );

  function handleCallbackResponse(response) {
    let userObj = jwtDecode(response.credential);
    setUser(userObj);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_AUTH,
      callback: handleCallbackResponse,
    });
    localStorage.setItem("items", JSON.stringify(user));
  }, [user]);

  /* global google */
  google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    theme: "outline",
    size: "large",
  });
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
          <LangSelector />
          {user?.picture ? null : <div id="signInDiv"></div>}
          {user?.picture && (
            <>
              <Avatar
                sx={{ marginRight: "4px", marginLeft: "4px" }}
                src={user?.picture}
              />
              <Button
                sx={{
                  backgroundColor: "#000",
                }}
                onClick={handleSignOut}
                variant="contained"
              >
                Sign Out
              </Button>
            </>
          )}
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
