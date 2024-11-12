import { useState, useContext, useCallback } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { ActivityContext } from "../context/ActivityContext";
import { useNavigate } from "react-router-dom";

const useActivityForm = () => {
  const [formData, setFormData] = useState({
    steps: "",
    calories: "",
    workoutTime: "",
    workoutType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      steps: "",
      calories: "",
      workoutTime: "",
      workoutType: "",
    });
  };

  return { formData, handleChange, resetForm };
};

const ActivityForm = () => {
  const { formData, handleChange, resetForm } = useActivityForm();
  const { addActivity } = useContext(ActivityContext);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newActivity = {
        steps: Number(formData.steps),
        calories: Number(formData.calories),
        workoutTime: Number(formData.workoutTime),
        workoutType: formData.workoutType,
        date: new Date().toLocaleDateString(),
      };
      addActivity(newActivity);
      resetForm();
      navigate("/dashboard");
    },
    [formData, addActivity, resetForm, navigate]
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        padding: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        margin: "30px auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: "#34495E" }}
      >
        Activity Form
      </Typography>
      <TextField
        label="Steps Taken"
        variant="outlined"
        name="steps"
        value={formData.steps}
        onChange={handleChange}
        type="number"
        required
        sx={{ width: "100%" }}
      />
      <TextField
        label="Calories Burned"
        variant="outlined"
        name="calories"
        value={formData.calories}
        onChange={handleChange}
        type="number"
        required
        sx={{ width: "100%" }}
      />
      <TextField
        label="Workout Time (minutes)"
        variant="outlined"
        name="workoutTime"
        value={formData.workoutTime}
        onChange={handleChange}
        type="number"
        required
        sx={{ width: "100%" }}
      />
      <FormControl required sx={{ width: "100%" }}>
        <InputLabel id="workout-type-label">Workout Type</InputLabel>
        <Select
          labelId="workout-type-label"
          name="workoutType"
          value={formData.workoutType}
          onChange={handleChange}
          label="Workout Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Running">Running</MenuItem>
          <MenuItem value="Cycling">Cycling</MenuItem>
          <MenuItem value="Swimming">Swimming</MenuItem>
          <MenuItem value="Yoga">Yoga</MenuItem>
          <MenuItem value="Strength Training">Strength Training</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type="submit" sx={{ width: "100%" }}>
        Log Activity
      </Button>
    </Box>
  );
};

export default ActivityForm;
