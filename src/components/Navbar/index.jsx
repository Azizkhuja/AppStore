import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";
import LangSelector from "./LangSelector";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";

function Navbar() {
  const { t } = useTranslation();

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
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
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

export default Navbar;
