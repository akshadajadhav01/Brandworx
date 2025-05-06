import React from "react";
// third-party
import { Box, Typography, Chip, Grid, Card, CardContent } from "@mui/material";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";

// components
import { CustomButton } from "./StyledButton";

// constant
import { cards, projects } from "./constant";

const Projects = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#0d0c1d", color: "white", p: 5 }}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#0d0c1d",
            color: "white",
            py: 10,
          }}
        >
          <Box
            component="img"
            src="/vector2.svg"
            alt="vector2"
            sx={{
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />{" "}
          <Box position="relative" width="100%" height={200} mt={6}>
            <Box
              bgcolor="#120F79"
              width="100%"
              height={90}
              position="absolute"
              top={20}
              left={0}
              sx={{
                transform: "rotate(3deg)",
                zIndex: 2,
              }}
              display={"flex"}
              gap={12}
              p={4}
            >
              <Typography>MStore.id</Typography>
              <Typography>MStore.id</Typography>{" "}
              <Typography>Mangcoding Ina</Typography>{" "}
              <Typography variant="h5">Google</Typography>
              <Typography>MStore.id</Typography>
              <Typography variant="h5">Google</Typography>
              <Typography>Mangcoding Ina</Typography>{" "}
              <Typography variant="h5">Google</Typography>
            </Box>
            <Box
              bgcolor="#1A1A1A"
              width="100%"
              height={80}
              position="absolute"
              top={20}
              left={0}
              sx={{
                transform: "rotate(-2deg)",
                zIndex: 1,
              }}
            />
          </Box>
          <Box sx={{ position: "relative", zIndex: 1, pt: "100px", pl: 5 }}>
            {" "}
            <Typography
              variant="h3"
              sx={{
                background:
                  "linear-gradient(to right, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Projects
            </Typography>
            <Typography variant="body2" mt={2} maxWidth="400px">
              Explore our projects to see how we've turned ideas into impactful
              solutions. Each project reflects our commitment to quality,
              creativity, and results.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mr: { xs: 2, lg: 6 },
            }}
          >
            <CustomButton endIcon={<OutboundOutlinedIcon />}>
              All Portfolio
            </CustomButton>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {projects?.map((project, index) => (
            <Grid item xs={12} sm={6} lg={6} md={12} key={index} pl={5}>
              <Card
                elevation={0}
                sx={{
                  cursor: "pointer",
                  width: "auto",
                  borderRadius: 5,
                  pl: 1.5,
                  bgcolor: "#D8D7FF",
                  zIndex: 1,
                }}
              >
                <CardContent>
                  <Box display="flex" flexDirection="row" gap={1} mt={0.5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      gap={1}
                      mt={0.5}
                      alignItems="flex-start"
                    >
                      <Chip
                        label={project.category}
                        variant="outlined"
                        sx={{
                          borderColor: "#854CFF",
                          mb: 1,
                        }}
                      />
                      <Typography variant="h4">{project.title}</Typography>
                      <Typography variant="subtitle1" maxWidth={300}>
                        {project.description}
                      </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"flex-end"}>
                      {" "}
                      <Box
                        component="img"
                        src={project.image}
                        alt="Image"
                        sx={{ width: 300, height: 200, pb: 0 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Box mt={2}>
                {" "}
                <Typography variant="h4">{project.title}</Typography>
                <Typography variant="subtitle1" mt={2} maxWidth={550}>
                  {project.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#0d0c1d",
            color: "white",
            py: 10,
          }}
        >
          <Box
            component="img"
            src="/vector3.svg"
            alt="vector"
            sx={{
              position: "absolute",
              bottom: -380,
              left: "51%",
              transform: "translateX(-50%)",
              zIndex: 0,
              width: "100%",
            }}
          />
        </Box>
        <Box position="relative" zIndex="1" sx={{ ml: 7 }}>
          <Typography
            variant="h2"
            sx={{
              background:
                "linear-gradient(to right, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: 2,
            }}
          >
            What They Say About Us
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Here form their Point Of View
          </Typography>{" "}
          <Grid container spacing={2} mt={5}>
            {cards?.map((card, index) => (
              <Grid item xs={12} sm={6} lg={6} md={12} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    cursor: "pointer",
                    width: "auto",
                    borderRadius: 6,
                    pl: 2,
                    bgcolor: "rgba(21, 21, 21, 0.4)",

                    color: "white",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <CardContent>
                    <Box display="flex" flexDirection="row" gap={1} mt={0.5}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        mt={0.5}
                        alignItems="flex-start"
                      >
                        <Box display="flex" flexDirection="row" gap={3} mb={2}>
                          {" "}
                          <Box
                            component="img"
                            src={card.image}
                            alt="Image"
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <Box display={"flex"} flexDirection="column">
                            <Typography variant="h6">{card.name}</Typography>
                            <Typography variant="body2">
                              {card.position}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="subtitle1" maxWidth={330}>
                          {card.description}
                        </Typography>
                      </Box>
                      <Box display={"flex"} justifyContent={"flex-end"}>
                        {" "}
                        <Box
                          component="img"
                          src={card.comma}
                          alt="Image"
                          sx={{ width: 50, height: 50, pb: 0 }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
