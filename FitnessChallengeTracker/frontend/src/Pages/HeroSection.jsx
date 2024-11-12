import { Box, Typography, Button } from "@mui/material";
import fitnessImage from "../assets/fit.png";
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        backgroundColor: "#F5F5F5",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box sx={{ flex: 1, paddingRight: { md: 4 } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Join the Fitness Challenge Today!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Track your daily activities, stay motivated, and achieve your fitness
          goals. Our easy-to-use tracker allows you to log steps, calories, and
          workout time!
        </Typography>
        <Button variant="contained" color="primary" size="medium">
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: { md: 4 },
        }}
      >
        <img
          src={fitnessImage}
          alt="Fitness Challenge"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
