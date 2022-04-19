//982111765V
import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { createEmployee } from "../../../Api/ReportersManagementModule/EmployeeApi";
import { Typography } from "@mui/material";

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

  // const sendRequest = async () => {
  //   await axios
  //     .post("http://localhost:8070/employee/add", {
  //       employeeID: String(inputs.employeeID),
  //       employeeFirstName: String(inputs.employeeFirstName),
  //       employeeLastName: String(inputs.employeeLastName),
  //       jobRole: String(inputs.jobRole),
  //       NIC: String(inputs.NIC),
  //       companyEmail: String(inputs.companyEmail),
  //       status: String(inputs.status),
  //       jobType: String(inputs.jobType),
  //     })
  //     .then((res) => res.data);
  // };
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
    // sendRequest()
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
         
          <Paper elevation={3} style={{ marginInlineEnd: 2, padding: 30 }}>
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
                      label="Filled"
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
                      label="Filled"
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
                      label="Filled"
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
                      label="Filled"
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
                      label="Filled"
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
                    <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="jobRole"
                      value={inputs.jobRole}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <FormLabel className="label">Job Type :</FormLabel>
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="jobType"
                      value={inputs.jobType}
                      onChange={handleChange}
                      fullWidth
                    />
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
                    <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="status"
                      value={inputs.status}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid></Grid>
              <Button
                variant="contained"
                style={{
                  padding: "10px 555px",
                  marginBottom: "20px",
                  marginLeft: "10px",
                }}
                type="submit"
              >
                CREATE
              </Button>
            </Grid>
          </Paper>
        </Box>
      </form>
    </div>
  );
}

export default CreateEmployee;
