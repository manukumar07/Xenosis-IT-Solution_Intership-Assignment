import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import ActivityList from "./ActivityList";

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3, textAlign: "center" }}>
        <h1>Fitness Tracker Dashboard</h1>
        <ActivityList />
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
