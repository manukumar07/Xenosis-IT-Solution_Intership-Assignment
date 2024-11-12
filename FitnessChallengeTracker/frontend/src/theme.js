import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green for primary actions (e.g., buttons)
    },
    secondary: {
      main: "#FF5722", // Orange for secondary actions
    },
    background: {
      default: "#F5F5F5", // Light gray background for the app
      paper: "#FFFFFF", // White for cards or paper elements
    },
    text: {
      primary: "#212121", // Dark text for better readability
      secondary: "#757575", // Gray text for less prominent text
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  },
});

export default theme;
