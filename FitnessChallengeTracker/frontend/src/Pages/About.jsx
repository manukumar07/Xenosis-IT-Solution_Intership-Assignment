import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { FaDumbbell, FaUsers, FaClock } from "react-icons/fa";

const About = () => {
  const theme = useTheme();

  const cardData = [
    {
      icon: <FaDumbbell style={{ fontSize: "40px", color: "white" }} />,
      title: "Track Your Progress",
      description:
        "Log your daily fitness activities and monitor your progress over time.",
      bgColor: theme.palette.primary.main,
    },
    {
      icon: <FaUsers style={{ fontSize: "40px", color: "white" }} />,
      title: "Join Our Community",
      description:
        "Connect with fellow fitness enthusiasts and share your journey together.",
      bgColor: theme.palette.secondary.main,
    },
    {
      icon: <FaClock style={{ fontSize: "40px", color: "white" }} />,
      title: "Stay Consistent",
      description:
        "Set reminders and notifications to keep you motivated and on track.",
      bgColor: theme.palette.primary.main,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "32px",
        minHeight: "70vh",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", marginBottom: "16px" }}
      >
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to Fitness Challenge Tracker! We are dedicated to helping you
        achieve your fitness goals through daily tracking and community support.
        Our mission is to provide the tools and resources needed to keep you
        motivated and engaged in your fitness journey.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join us and become part of a community that thrives on encouragement,
        accountability, and shared experiences.
      </Typography>
      <Grid container spacing={3} mt={4}>
        {cardData.map(({ icon, title, description, bgColor }, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  backgroundColor: bgColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {icon}
              </CardMedia>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
