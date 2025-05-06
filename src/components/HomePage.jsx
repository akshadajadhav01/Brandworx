import React from "react";

// third-party
import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/Linkedin";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";

// components
import { CustomButton } from "./StyledButton";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: "url(/bg.svg)",
          backgroundSize: "cover",
          bgcolor: "#0d0c1d",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            mt: 4,
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              borderRadius: "24px",
              px: 1.5,
              py: 0.75,
              minWidth: "auto",
              gap: 1,
            }}
          >
            <InstagramIcon />
            <WhatsAppIcon />
            <LinkedinIcon />
            <TwitterIcon />
          </Button>

          <Typography
            variant="h1"
            sx={{
              background:
                "linear-gradient(to right, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#fff",
              mt: 1,
              maxWidth: "1100px",
            }}
          >
            Amazing Digital creations with Brandworx agency
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff", mt: 1 }}>
            Help you to build digital solutions that is modern, user friendly,
            good CEO, and Clean design{" "}
          </Typography>
          <CustomButton endIcon={<OutboundOutlinedIcon />} sx={{ my: 3 }}>
            Get Started
          </CustomButton>
          <img
            src="/round.svg"
            alt="Round"
            style={{ width: 114, height: 114 }}
          />
        </Box>
      </Box>
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;
