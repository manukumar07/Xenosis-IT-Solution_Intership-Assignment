import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "16px",
        textAlign: "center",
        boxShadow: `0 -1px 5px rgba(0, 0, 0, 0.1)`,
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
        sx={{ marginBottom: "8px", fontWeight: "bold" }}
      >
        © {new Date().getFullYear()} TrackMyFitness. All rights reserved.
      </Typography>
      <Typography variant="h6">
        <Link href="/dashboard" color={theme.palette.primary.main}>
          Dashboard
        </Link>
        {" | "}
        <Link href="/about" color={theme.palette.primary.main}>
          About
        </Link>
        {" | "}
        <Link href="/contact" color={theme.palette.primary.main}>
          Contact Us
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "10px" }}>
        Created by Manu <FavoriteIcon color="error" fontSize="small" /> 2024
      </Typography>
    </Box>
  );
};

export default Footer;
