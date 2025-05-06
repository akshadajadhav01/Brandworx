import React from "react";

// third-party
import { Box, Typography, Divider, Link } from "@mui/material";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";

// components
import { CustomButton } from "./StyledButton";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0d0c1d", color: "white", py: 5 }}>
      <Divider sx={{ borderColor: "#635189" }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={4}
      >
        <Box pl={9}>
          <Typography
            variant="h3"
            sx={{
              background:
                "linear-gradient(to right, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's work with us
          </Typography>
          <Typography variant="body2" maxWidth={"600px"} mt={1}>
            Join us to turn your ideas into reality with seamless collaboration
            and expert support every step of the way. Let's create something
            great together!
          </Typography>
        </Box>
        <CustomButton endIcon={<OutboundOutlinedIcon />}>
          Connect Now
        </CustomButton>
      </Box>
      <Divider sx={{ borderColor: "#635189" }} />

      <Box sx={{ pl: { lg: 20, md: 7 } }} mt={14} display={"flex"} gap={7}>
        <Box component="img" src="/footer.svg" alt="footer" />
        <Box display={"flex"} flexDirection={"column"}>
          {" "}
          <Typography variant="h5" maxWidth={"300px"}>
            2nd Floor, Shree ComplexPlot No. 42, Sector 18Koramangala, Bengaluru
            - 560095Karnataka, India
          </Typography>
          <Typography variant="body2" mt={1.5}>
            +91-9876543210
          </Typography>
          <Typography variant="body2" mt={1.5}>
            contact@brandwork.agency
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" ml={7} mt={4}>
          <Link href="#" color="inherit" underline="hover" mb={1}>
            About
          </Link>
          <Link href="#" color="inherit" underline="hover" mb={1}>
            Services
          </Link>
          <Link href="#" color="inherit" underline="hover" mb={1}>
            Portfolio
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" ml={7} mt={4}>
          <Link href="#" color="inherit" underline="hover" mb={1}>
            Facebook
          </Link>
          <Link href="#" color="inherit" underline="hover" mb={1}>
            Twitter
          </Link>
          <Link href="#" color="inherit" underline="hover" mb={1}>
            Linkedin
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Instagram
          </Link>
        </Box>

        <Box component="img" src="/Arow.svg" alt="Arow" ml={7} />
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="body2" align="center">
          © 2024 Brandwork All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
