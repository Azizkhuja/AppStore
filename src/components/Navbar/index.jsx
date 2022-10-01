import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";
import LangSelector from "./LangSelector";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";

function Navbar() {
  const { t } = useTranslation();
  const divRef = useRef(null);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("items")) || null
  );

  function handleCallbackResponse(response) {
    let userObj = jwtDecode(response.credential);

    setUser(userObj);
  }

  function handleSignOut(e) {
    setUser({});
  }

  useEffect(() => {
    if (divRef.current) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_AUTH,
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(divRef.current, {
        theme: "outline",
        size: "medium",
      });
    }
    localStorage.setItem("items", JSON.stringify(user));
  }, [user, divRef.current]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#fff", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <ItemFlex>
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
          </ItemFlex>
          <ItemFlex>
            <LangSelector />

            {user?.picture ? null : <div ref={divRef} />}
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
          </ItemFlex>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const ItemFlex = styled.div`
  display: flex;
`;

export default Navbar;
