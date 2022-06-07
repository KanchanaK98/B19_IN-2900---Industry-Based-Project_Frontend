import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { createEmployee } from "../../../Api/ReportersManagementModule/EmployeeApi";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import JobRoleDialogBox from "./JobRoleDialogBox.jsx";
function CreateEmployee() {
  const [inputs, setInputs] = useState({
    employeeID: "",
    employeeFirstName: "",
    employeeLastName: "",
    jobRole: "",
    NIC: "",
    companyEmail: "",
    status: "",
    jobType: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee(inputs);
    setInputs({
      employeeID: "",
      employeeFirstName: "",
      employeeLastName: "",
      jobRole: "",
      NIC: "",
      companyEmail: "",
      status: "",
      jobType: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <Paper elevation={3} style={{ marginInlineEnd: 2, padding: 30 }}>
            <Grid>
            <Grid>
              <Typography variant="h5">
                <PersonIcon sx={{ width: 50, height: 50 }} />
                CREATE EMPLOYEE
              </Typography>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              marginTop={5}
            >
              <Grid item xs={6} marginTop={5}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel className="label">Employee ID :</FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <TextField
                      id="filled-basic"
                      label="employeeID"
                      variant="filled"
                      name="employeeID"
                      value={inputs.employeeID}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={5}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel style={{ marginLeft: "10px" }} className="label">
                      NIC:
                    </FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <TextField
                      id="filled-basic"
                      label="NIC"
                      variant="filled"
                      name="NIC"
                      value={inputs.NIC}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel className="label">First Name : </FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <TextField
                      id="filled-basic"
                      label="First Name"
                      variant="filled"
                      name="employeeFirstName"
                      value={inputs.employeeFirstName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel style={{ marginLeft: "10px" }} className="label">
                      Last Name :
                    </FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <TextField
                      id="filled-basic"
                      label="Last Name"
                      variant="filled"
                      name="employeeLastName"
                      value={inputs.employeeLastName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel className="label">Company Email :</FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <TextField
                      id="filled-basic"
                      label="Company Email"
                      variant="filled"
                      name="companyEmail"
                      value={inputs.companyEmail}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel style={{ marginLeft: "10px" }} className="label">
                      Job Role :
                    </FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    {/* <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="jobRole"
                      value={inputs.jobRole}
                      onChange={handleChange}
                      fullWidth
                    /> */}
                    <JobRoleDialogBox />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel className="label">Job Type :</FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    {/* <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="jobType"
                      value={inputs.jobType}
                      onChange={handleChange}
                      fullWidth
                    /> */}

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Job Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputs.jobType}
                        label="Job Type"
                        onChange={handleChange}
                        SelectProps={{ renderValue: inputs.jobType }}
                      >
                        <MenuItem value={1}>White Collar</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                marginTop={2}
                style={{ marginBlockEnd: "20px" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel style={{ marginLeft: "10px" }} className="label">
                      Status :
                    </FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    {/* <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="status"
                      value={inputs.status}
                      onChange={handleChange}
                      fullWidth
                    
                    /> */}
                     <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                     Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputs.status}
                        label="Status"
                        onChange={handleChange}
                        SelectProps={{ renderValue: inputs.status }}
                      >
                        <MenuItem value={1}>Probationary</MenuItem>
                       
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

             
              <Button
                variant="contained"
               sx={{
             
                  marginBottom: "20px",
                
                }}
                fullWidth
                type="submit"
              >
                CREATE
              </Button>
            </Grid>
            </Grid>
          </Paper>
        </Box>
      </form>
    </div>
  );
}

export default CreateEmployee;
