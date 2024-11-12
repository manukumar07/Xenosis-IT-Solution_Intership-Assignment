import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const ActivityList = () => {
  const { activities } = useContext(ActivityContext);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Typography variant="h6" sx={{ margin: 2 }}>
        Logged Activities
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} s>
              Steps
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Calories</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>
              {" "}
              Workout Time (mins)
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Workout Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.date}</TableCell>
              <TableCell>{activity.steps}</TableCell>
              <TableCell>{activity.calories}</TableCell>
              <TableCell>{activity.workoutTime}</TableCell>
              <TableCell>{activity.workoutType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActivityList;
