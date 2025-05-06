import React from "react";

// third-party
import { Box, Typography, Card, CardContent, Link } from "@mui/material";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";

// components
import { CustomButton } from "./StyledButton";

const About = () => {
  return (
    <Box sx={{ bgcolor: "#0d0c1d", color: "white", p: 5 }}>
      <Box
        sx={{
          position: "relative",
          bgcolor: "#0d0c1d",
          color: "white",
          p: 5,
        }}
      >
        <Box
          component="img"
          src="/vector.svg"
          alt="vector line"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src="/rings-side.png"
          alt="rings"
          sx={{
            position: "absolute",
            top: 220,
            right: 130,
            width: 150,
            height: 150,
            zIndex: 2,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px", mt: 7 }}>
          <Typography
            variant="h3"
            sx={{
              background:
                "linear-gradient(to right, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Agency That Can Help You Grow Your Business Digitally
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: "400px" }}>
            Work In The Digital World Includes Web Design, Digital Marketing,
            Branding & Strategy, Etc...
          </Typography>
        </Box>
      </Box>
      <Box mt={10} position="relative" pl={7} pt={4}>
        <Typography
          variant="h3"
          sx={{
            background:
              "linear-gradient(to right, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            maxWidth: "500px",
          }}
        >
          Let’s Work Together With Our Us
        </Typography>
        <Typography variant="body2" mt={2} maxWidth="500px">
          Partner With Us To Bring Your Vision To Life Through Collaboration,
          Innovation, And Tailored Solutions That Meet Your Unique Needs.
          Together, We’ll Create Something Extraordinary.
        </Typography>
        <Box />
      </Box>

      <Box mt={5} display="flex" gap={4} flexWrap="wrap" pl={8}>
        <Card
          sx={{
            width: 700,
            background: "linear-gradient(120deg, #14117B, #5754B7)",
            color: "white",
            borderRadius: 4,
            p: 3,
            opacity: 0.7,
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <Box>
                <Box component="img" src="/web.svg" alt="web" />
                <Typography variant="h6">Website Design</Typography>
                <Typography variant="body2" maxWidth="250px" mt={1}>
                  Our Website Design Service Transforms Your Ideas Into Visually
                  Stunning, User-Friendly Websites That Engage Visitors And
                  Drive Results.
                </Typography>
                <Link
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    cursor: "pointer",
                  }}
                >
                  Start With Us
                  <NorthEastOutlinedIcon fontSize="small" />
                </Link>
              </Box>

              <Box
                component="img"
                src="/card1img.svg"
                alt="card1img"
                sx={{
                  ml: "auto",
                  alignSelf: "flex-end",
                  height: 200,
                  width: 300,
                }}
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 500,
            background: "linear-gradient(135deg, #5754B7, #14117B)",
            color: "white",
            borderRadius: 4,
            p: 3,
            opacity: 0.7,
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <Box>
                <Box component="img" src="/branding.svg" alt="branding" />
                <Typography variant="h6">Branding</Typography>
                <Typography variant="body2" maxWidth="240px" mt={1}>
                  We Build Distinctive Brands That Resonate With Your Audience,
                  Ensuring You Stand Out In The Market.
                </Typography>
                <Link
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    cursor: "pointer",
                  }}
                >
                  Start With Us
                  <NorthEastOutlinedIcon fontSize="small" />
                </Link>
              </Box>
              <Box
                component="img"
                src="/card2img.svg"
                alt="card1img"
                sx={{
                  ml: "auto",
                  alignSelf: "flex-end",
                  height: 200,
                  width: 300,
                }}
              />
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 1240,
            background: "linear-gradient(135deg, #5754B7, #14117B)",
            color: "white",
            borderRadius: 4,
            opacity: 0.7,
            p: 3,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="h6">Digital Marketing</Typography>
              <Typography variant="body2" maxWidth="400px" mt={1}>
                Grow your brand online with our digital marketing services.
                We’ll help you reach more people, boost engagement, and see real
                results. Let's make your business stand out.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  color: "white",
                  maxWidth: "350px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FlashOnIcon sx={{ color: "#FCEC3D", mr: 1 }} />
                  <Typography variant="body2">
                    Brand-Aligned, Compelling Design.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FlashOnIcon sx={{ color: "#FCEC3D", mr: 1 }} />
                  <Typography variant="body2">
                    Sleek, Minimalist Design Aesthetic.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FlashOnIcon sx={{ color: "#FCEC3D", mr: 1 }} />
                  <Typography variant="body2">
                    Enterprise Friendly & Responsive Design.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FlashOnIcon sx={{ color: "#FCEC3D", mr: 1 }} />
                  <Typography variant="body2">
                    Resonates With Target Users.
                  </Typography>
                </Box>
              </Box>
              <Link
                variant="body2"
                sx={{
                  mt: 3,
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                Start With Us
                <NorthEastOutlinedIcon fontSize="small" />
              </Link>
            </Box>
            <Box position="relative">
              <Box
                component="img"
                src="/main.png"
                alt="main"
                position={"relative"}
                sx={{ height: 300 }}
              />
              <Box
                component="img"
                src="/sidebar.png"
                alt="sidebar"
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 0,
                  width: 110,
                  height: 300,
                }}
              />
              <Box
                component="img"
                src="/box.png"
                alt="box"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 140,
                  width: 180,
                  height: 200,
                }}
              />
              <Box
                component="img"
                src="/bar.png"
                alt="bar"
                sx={{
                  position: "absolute",
                  top: 50,
                  right: 275,
                  width: 200,
                  height: 74,
                }}
              />
              <Box
                component="img"
                src="/symbol.png"
                alt="symbol"
                sx={{
                  position: "absolute",
                  top: 100,
                  right: 275,
                  width: 200,
                  height: 200,
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CustomButton endIcon={<OutboundOutlinedIcon />}>
          Explore All services
        </CustomButton>
      </Box>
    </Box>
  );
};

export default About;
