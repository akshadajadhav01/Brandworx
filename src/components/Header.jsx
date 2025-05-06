import React from "react";

// third-party
import { AppBar, Toolbar, Typography, Box, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";

const NavLink = styled(Link)({
  margin: "0 16px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
});

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", padding: "8px 24px" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Box />
          <img src="/logo.svg" alt="logo" style={{ width: 45, height: 45 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, color: "yellow" }}>
            Brandworx
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          {["Home", "About", "Services", "Portfolio", "Contact Us"].map(
            (text) => (
              <NavLink
                key={text}
                href={`#${text.toLowerCase().replace(" ", "")}`}
              >
                {text}
              </NavLink>
            )
          )}
        </Box>
        <Button
          variant="outlined"
          endIcon={<OutboundOutlinedIcon />}
          sx={{
            borderColor: "#fff",
            color: "#fff",
            borderRadius: "24px",
            px: 3,
            py: 1,
            textTransform: "none",
          }}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
