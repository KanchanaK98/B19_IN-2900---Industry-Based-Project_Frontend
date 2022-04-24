import { Close, PendingActions } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import {
    Alert,
  Button,
  Divider,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./RequestFormStyles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { requestLeave } from "../../../Api/LeaveManagementModule/LeaveApi";

const RequestLeaveForm = () => {
  const classes = useStyles();
  const [leave, setLeave] = useState({
    leaveType: "",
    reason: "",
    startDate: new Date(),
    endDate: new Date(),
    leaveMethod: "",
    employeeID: "",
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleOnChange = (event) => {
    setLeave({ ...leave, [event.target.name]: event.target.value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    const response = await requestLeave(leave);

    clearForm();
    if(response.success === true) setOpenSnackBar(true);
  };

  const handleCloseSnackBar = () => {
      setOpenSnackBar(false);
  }
  const clearForm = () => {
      setLeave({
        leaveType: "",
        reason: "",
        startDate: new Date(),
        endDate: new Date(),
        leaveMethod: "",
        employeeID: ""
      })
  }
 
  return (
    <Paper>
      <Grid container>
        <Grid item sm={12} md={12} className={classes.formHeader}>
          <PendingActions fontSize="large" />
          <Typography fontWeight={700} variant="h4">
            Request Leave
          </Typography>
        </Grid>

        <Grid item sm={12} md={12}>
          <Divider variant="middle" />
          <Divider variant="middle" />
        </Grid>
      </Grid>

      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Grid container className={classes.input}>
              <Grid item sm={4} md={4} className={classes.formLabel}>
                <InputLabel>Leave Type</InputLabel>
              </Grid>
              <Grid item sm={8} md={8}>
                <TextField
                  label="Select Leave Type"
                  select
                  name="leaveType"
                  fullWidth
                  value={leave.leaveType}
                  variant="filled"
                  onChange={handleOnChange}
                >
                  <MenuItem value="annual">Annual Leave</MenuItem>
                  <MenuItem value="casual">Casual Leave</MenuItem>
                  <MenuItem value="medical">Medical Leave</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Grid container className={classes.input}>
              <Grid item sm={4} md={4} className={classes.formLabel}>
                <InputLabel>Start date</InputLabel>
              </Grid>
              <Grid item sm={8} md={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DatePicker
                      label="Select Start Date"
                      inputFormat="MM/dd/yyyy"
                      name="startDate"
                      value={leave.startDate}
                      onChange={(newValue) => {
                        setLeave({ ...leave, startDate: newValue });
                      }}
                      renderInput={(params) => (
                        <TextField variant="filled" {...params} />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid container className={classes.input}>
              <Grid item sm={4} md={4} className={classes.formLabel}>
                <InputLabel>Reason</InputLabel>
              </Grid>
              <Grid item sm={8} md={8}>
                <TextField
                  label="Type Your reason for leave"
                  multiline
                  name="reason"
                  fullWidth
                  value={leave.reason}
                  variant="filled"
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid container className={classes.input}>
              <Grid item sm={4} md={4} className={classes.formLabel}>
                <InputLabel>Leave Method</InputLabel>
              </Grid>
              <Grid item sm={8} md={8}>
                <TextField
                  label="Select Leave Type"
                  select
                  name="leaveMethod"
                  fullWidth
                  value={leave.leaveMethod}
                  variant="filled"
                  onChange={handleOnChange}
                >
                  <MenuItem value="half Day">half Day</MenuItem>
                  <MenuItem value="full Day">full Day</MenuItem>
                  <MenuItem value="multiple Day">multiple Day</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            {leave.leaveMethod === "multiple Day" && (
              <Grid container className={classes.input}>
                <Grid item sm={4} md={4} className={classes.formLabel}>
                  <InputLabel>End date</InputLabel>
                </Grid>
                <Grid item sm={8} md={8}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DatePicker
                        label="Select End Date"
                        inputFormat="MM/dd/yyyy"
                        name="endDate"
                        value={leave.endDate}
                        onChange={(newValue) => {
                          setLeave({ ...leave, endDate: newValue });
                        }}
                        renderInput={(params) => (
                          <TextField variant="filled" {...params} />
                        )}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid container className={classes.button}>
          <Button
            onClick={clearForm}
            color="warning"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Clear
          </Button>
          <Button
            onClick={handleSubmit}
            color="secondary"
            variant="contained"
            size="large"
          >
            Apply
          </Button>
        </Grid>
      </form>

      <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={openSnackBar}
              onClose={handleCloseSnackBar}
              autoHideDuration={5000}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleCloseSnackBar}
                >
                  <Close fontSize="small" />
                </IconButton>
              }
            >
              <Alert
                onClose={handleCloseSnackBar}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Leave successfully sent
              </Alert>
            </Snackbar>


      
    </Paper>
  );
};

export default RequestLeaveForm;
