import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { createEmployee } from "../../../Api/ReportersManagementModule/EmployeeApi";
import { Alert, AlertTitle, MenuItem, Stack, Typography } from "@mui/material";
import CredentialCard from "./CredentialCard";
import Candidates from "./Candidates";
import { Link } from "react-router-dom";
const jobRoles = [
  "Software Engineer",
  "Senior Software Engineer",
  "HR Manager",
  "IT Employee",
  "CTO",
  "Associate Software Engineer",
  "Software Architect",
  "Tech Lead",
  "UI/UX Designer",
  "Business Analyst",
  "Intern",
  "Product Manager",
];
function CreateEmployee() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isDisable, setIsDisable] = useState(true);
  const [addSuccessfully, setAddSuccessfully] = useState(false);
  const [duplicated, setDuplicated] = useState(false);
  const [notAdded, setnotAdded] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    employeeID: "",
    employeeFirstName: "",
    employeeLastName: "",
    jobRole: "",
    NIC: "",
    companyEmail: "",
    // status: "",
    // jobType: "",
  });
  const [inputs, setInputs] = useState({
    employeeID: "",
    employeeFirstName: "",
    employeeLastName: "",
    jobRole: "",
    NIC: "",
    companyEmail: "",
    // status: "",
    // jobType: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClear = () => {
    setInputs({
      employeeID: "",
      employeeFirstName: "",
      employeeLastName: "",
      jobRole: "",
      NIC: "",
      companyEmail: "",
      // status: "",
      // jobType: "",
    });
  };

  //let regexPhoneNumber = "^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\\d)\\d{6}$";
  // 0771234567

  // 771234567

  // +94771234567

  // 94771234567

  // 0111234567(local codes)
  //--------------validation-----------------------
  const errorHandle = () => {
    let isError = false;
    Object.keys(inputs).map((property) => {
      if (!inputs[property]) {
        setInputErrors((prevState) => ({
          ...prevState,
          [property]: property + " is required",
        }));
        isError = true;
      }
    });
    const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (inputs.companyEmail && !inputs.companyEmail.match(emailFormat)) {
      setInputErrors((prevState) => ({
        ...prevState,
        companyEmail: "Invalid Email address",
      }));
      isError = true;
    }
    return isError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errorHandle()) {
      const response = await createEmployee(inputs);

      if (response.success === true) {
        setCredentials(response.employeeCredentials);
        setIsDisable(false);
        setAddSuccessfully(true);
        setTimeout(() => {
          setAddSuccessfully(false);
        }, 2000);
      }

      if (response.success === false) {
        setDuplicated(true);
        setTimeout(() => {
          setDuplicated(false);
        }, 2000);
      }
      handleClear();
    } else {
      handleClear();
      setnotAdded(true);
      setTimeout(() => {
        setnotAdded(false);
      }, 2000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <Paper
            elevation={3}
            style={{
              marginInlineEnd: 2,
              padding: 30,
              backgroundColor: "#c7cad1",
            }}
          >
            <Grid>
              <Grid container>
                <Grid item md={6}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#183d78" }}
                  >
                    <PersonIcon
                      sx={{ width: 50, height: 50, color: "#183d78" }}
                    />
                    CREATE EMPLOYEE
                  </Typography>
                </Grid>
                <Grid item md={6} textAlign="right">
                  <Candidates />
                </Grid>
              </Grid>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6} marginTop={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel className="label" sx={{ fontWeight: "bold" }}>
                        Employee ID :
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6} md={9}>
                      <TextField
                        id="filled-basic"
                        label="employeeID"
                        variant="filled"
                        name="employeeID"
                        value={inputs.employeeID}
                        onChange={handleChange}
                        error={inputErrors.employeeID ? true : false}
                        helperText={inputErrors.employeeID}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} marginTop={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel
                        style={{ marginLeft: "10px", fontWeight: "bold" }}
                        className="label"
                      >
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
                        error={inputErrors.NIC ? true : false}
                        helperText={inputErrors.NIC}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} marginTop={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel className="label" sx={{ fontWeight: "bold" }}>
                        First Name :{" "}
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6} md={9}>
                      <TextField
                        id="filled-basic"
                        label="First Name"
                        variant="filled"
                        name="employeeFirstName"
                        value={inputs.employeeFirstName}
                        onChange={handleChange}
                        error={inputErrors.employeeFirstName ? true : false}
                        helperText={inputErrors.employeeFirstName}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} marginTop={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel
                        style={{ marginLeft: "10px", fontWeight: "bold" }}
                        className="label"
                      >
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
                        error={inputErrors.employeeLastName ? true : false}
                        helperText={inputErrors.employeeLastName}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} marginTop={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel className="label" sx={{ fontWeight: "bold" }}>
                        Company Email :
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6} md={9}>
                      <TextField
                        id="filled-basic"
                        label="Company Email"
                        variant="filled"
                        name="companyEmail"
                        value={inputs.companyEmail}
                        onChange={handleChange}
                        error={inputErrors.companyEmail ? true : false}
                        helperText={inputErrors.companyEmail}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} marginTop={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel
                        style={{ marginLeft: "10px", fontWeight: "bold" }}
                        className="label"
                      >
                        Job Role :
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6} md={9}>
                      <TextField
                        id="filled-basic"
                        label="Job Role"
                        variant="filled"
                        name="jobRole"
                        value={inputs.jobRole}
                        onChange={handleChange}
                        error={inputErrors.jobRole ? true : false}
                        helperText={inputErrors.jobRole}
                        select
                        fullWidth
                      >
                        {jobRoles.map((jobRole) => (
                          <MenuItem value={jobRole} key={jobRole}>
                            {jobRole}
                          </MenuItem>
                        ))}
                      </TextField>
                      {/* <JobRoleDialogBox
                        jobRole={inputs.jobRole}
                        setInputs={setInputs}
                      /> */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} marginTop={2}>
                  {/* <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel className="label" sx={{fontWeight:"bold"}}>Job Type :</FormLabel>
                    </Grid>
                    <Grid item xs={6} md={9}> */}
                  {/* <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="jobType"
                      value={inputs.jobType}
                      onChange={handleChange}
                      fullWidth
                    /> */}

                  {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Job Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={inputs.jobType}
                          label="Job Type"
                          onChange={handleChange}
                          selectprops={{ renderValue: inputs.jobType }}
                        >
                          <MenuItem value={1}>White Collar</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid> */}
                </Grid>
                <Grid
                  item
                  xs={6}
                  marginTop={2}
                  style={{ marginBlockEnd: "20px" }}
                >
                  {/* <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <FormLabel
                        style={{ marginLeft: "10px" }}
                        className="label"
                      >
                        Status :
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6} md={9}> */}
                  {/* <TextField
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      name="status"
                      value={inputs.status}
                      onChange={handleChange}
                      fullWidth
                    
                    /> */}
                  {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={inputs.status}
                          label="Status"
                          onChange={handleChange}
                          selectprops={{ renderValue: inputs.status }}
                        >
                          <MenuItem value={1}>Probationary</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} textalign="left">
                <Button
                  component={Link}
                  to="/dashboard"
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                >
                  DASHBOARD
                </Button>
              </Grid>

              <Grid item md={6}>
                <Grid container>
                  <Grid item md={6} textAlign="right">
                    {credentials && (
                      <CredentialCard
                        credentials={credentials}
                        isDisable={isDisable}
                        setIsDisable={setIsDisable}
                      />
                    )}
                  </Grid>
                  <Grid item md={6} textAlign="right">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#183d78",
                      }}
                      type="submit"
                    >
                      CREATE EMPLOYEE
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          {addSuccessfully ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Employee has been successfully added!
              </Alert>
            </Stack>
          ) : null}
          {notAdded ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" severity="error">
                Please enter all the details!
              </Alert>
            </Stack>
          ) : null}
          {duplicated ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" severity="error">
                Details are duplicated!
              </Alert>
            </Stack>
          ) : null}
        </Box>
      </form>
    </div>
  );
}

export default CreateEmployee;
