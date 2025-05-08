import React from "react";

// third-party
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

// constant
import { cards } from "./constant";

const Cards = () => {
  return (
    <div>
      {" "}
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        sx={{ mt: { lg: 5, md: 3 } }}
      >
        {cards?.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: {
                xs: "1 1 100%",
                md: "1 1 48%",
                lg: "1 1 31%",
              },
              minWidth: { sm: "250px" },
            }}
          >
            <Card
              elevation={0}
              sx={{
                cursor: "pointer",
                width: "100%",
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
                        <Typography variant="body2">{card.position}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="subtitle1" maxWidth={330}>
                      {card.description}
                    </Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"flex-end"}>
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
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Cards;
