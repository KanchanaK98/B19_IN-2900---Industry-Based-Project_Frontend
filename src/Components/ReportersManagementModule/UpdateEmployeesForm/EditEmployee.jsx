import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {  Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { updateEmployee } from "../../../Api/ReportersManagementModule/EmployeeApi";

function EditEmployee() {
  const location = useLocation();
  const { profile } = location.state;
  // console.log({ profile: profile, mes: "hi" });
  // const id = useParams().empID;
  const [inputs, setInputs] = useState({
    employeeID: String(profile.employeeID),
    employeeFirstName: String(profile.employeeFirstName),
    employeeLastName: String(profile.employeeLastName),
    streetNo: String(profile.streetNo),
    phoneNumber: String(profile.phoneNumber),
    companyEmail: String(profile.companyEmail),
    profilePic: String(profile.profilePic),
    NIC: String(profile.NIC),
    city: String(profile.city),
    birthday: new Date(profile.birthday),
    //-------------------------------------------------------------
    ordinaryLevelResult: String(
      profile.EmployeeWithAcc.length > 0
        ? profile.EmployeeWithAcc[0].ordinaryLevelResult
        : " "
    ),

    advancedLevelResults: String(
      profile.EmployeeWithAcc.length > 0
        ? profile.EmployeeWithAcc[0].advancedLevelResults
        : " "
    ),
    achievements: String(
      profile.EmployeeWithAcc.length > 0
        ? profile.EmployeeWithAcc[0].achievements
        : " "
    ),
    degree: String(
      profile.EmpWithProf.length > 0 ? profile.EmpWithProf[0].degree : " "
    ),
    language: String(
      profile.EmpWithProf.length > 0 ? profile.EmpWithProf[0].language : " "
    ),
    course: String(
      profile.EmpWithProf.length > 0 ? profile.EmpWithProf[0].course : " "
    ),
  });
  //{
  // employeeFirstName: "",
  // employeeLastName: "",
  // birthday: "",
  // streetNo: "",
  // city: "",
  // phoneNumber: "",
  // NIC: "",
  // companyEmail: "",
  // profilePic: "",
  // ordinaryLevelResult: [""],
  // advancedLevelResults: [""],
  // achievements: [""],
  // degree: [""],
  // language: [""],
  // course: [""],
  // }

  // useEffect(() => {
  //   setInputs();

  //   // const fetchHandler = async () => {
  //   //   await axios
  //   //     .get(`http://localhost:8070/employee/filterEmployee/${id}`)
  //   //     .then((res) => res.data)
  //   //     .then((data) => setInputs(data.employee));
  //   // };
  //   // fetchHandler();
  // }, []);
  // ----------------------------------------------------------
  // const sendRequest = async () => {

  //   await axios
  //     .put(`http://localhost:8070/employee/update/${inputs.employeeID}`, {
  //       employeeFirstName: String(inputs.employeeFirstName),
  //       employeeLastName: String(inputs.employeeLastName),
  //       streetNo: String(inputs.streetNo),
  //       phoneNumber: String(inputs.phoneNumber),
  //       companyEmail: String(inputs.companyEmail),
  //       profilePic: String(inputs.profilePic),
  //       //-------------------------------------------------------------
  //       ordinaryLevelResult: Array(inputs.ordinaryLevelResult),
  //       advancedLevelResults: Array(inputs.advancedLevelResults),
  //       achievements: Array(inputs.achievements),
  //       degree: Array(inputs.degree),
  //       language: Array(inputs.language),
  //       course: Array(inputs.course),
  //     })
  //     .then((res) => res.data)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //-----------------------------------------------------------
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //----------------------------------
    console.log(inputs);
    // sendRequest()
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //----------------------

    const response = await updateEmployee(inputs);
    console.log(response);
  };

  const Input = styled("input")({
    display: "none",
  });

  const uploadProfilePhoto = (event) => {
    const fileType = ["image/png"];
    let selectedFile = event.target.files[0];
    console.log(selectedFile.type);
    if (selectedFile && fileType.includes(selectedFile.type)) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (event) => {
        setInputs({
          ...inputs,
          profilePic: event.target.result,
        });
      };
    } else {
      console.log("Please select valid image file");
    }
  };
  return (
    <div>
      {inputs && (
        <form>
          <Box>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Grid container>
                <Grid item sm={12} md={12}>
                  <Typography variant="h5">
                    <PersonIcon sx={{ width: 50, height: 50 }} />
                    MY PROFILE
                  </Typography>
                </Grid>
                <Grid
                  item
                  sm={12}
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      mt: 5,
                      mb: 5,
                      width: 150,
                      height: 150,
                      
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        src={inputs.profilePic}
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={uploadProfilePhoto}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Avatar>
                </Grid>
                <Grid item sm={12} md={12}>
                  <Grid container spacing={2}>
                    <Grid item sm={12} md={6} sx={{ mb: 5 }}>
                      <Button
                        onClick={handleSubmit}
                        variant="contained"
                        fullWidth
                      >
                        UPDATE
                      </Button>
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <Button
                        LinkComponent={Link}
                        to={`/`}
                        variant="contained"
                        fullWidth
                      >
                        CANCEL
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sm={12} md={12}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            First Name :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label=" First Name "
                            variant="filled"
                            name="employeeFirstName"
                            value={inputs.employeeFirstName}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Last Name :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label="  Last Name"
                            variant="filled"
                            name="employeeLastName"
                            value={inputs.employeeLastName}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Email :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label=" Email"
                            variant="filled"
                            name="companyEmail"
                            value={inputs.companyEmail}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            NIC :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            disabled
                            id="outlined-disabled"
                            variant="filled"
                            name="NIC"
                            value={inputs.NIC}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Phone Number :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label=" Phone Number "
                            variant="filled"
                            name="phoneNumber"
                            value={inputs.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Birthday :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <DatePicker
                                label="Birthday"
                                name="birthday"
                                inputFormat="dd/MM/yyyy"
                                value={inputs.birthday}
                                onChange={(newValue) => {
                                  setInputs({
                                    ...inputs,
                                    birthday: newValue,
                                  });
                                }}
                                renderInput={(params) => (
                                  <TextField variant="filled" {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Street No :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label=" Street No"
                            variant="filled"
                            name="streetNo"
                            value={inputs.streetNo}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ mb: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            City :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label="City"
                            variant="filled"
                            name="city"
                            value={inputs.city}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sm={12} md={12}>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid></Grid>
                    <Grid item xs={6} sx={{ mt: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Degree :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label="Degree"
                            variant="filled"
                            name="degree"
                            value={inputs.degree || " "}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Languages :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label="Languages"
                            variant="filled"
                            name="language"
                            value={inputs.language || " "}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ mb: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Courses :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label="Courses"
                            variant="filled"
                            name="course"
                            value={inputs.course || " "}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ mb: 1 }}></Grid>
                    <Grid item sm={12} md={12}>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={6} sx={{ mt: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            A/L Results :{" "}
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label=" A/L Results"
                            variant="filled"
                            name="advancedLevelResults"
                            value={inputs.advancedLevelResults || " "}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            Achievements :{" "}
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          <TextField
                            id="filled-basic"
                            label="Achievements"
                            variant="filled"
                            name="achievements"
                            value={inputs.achievements || " "}
                            onChange={handleChange}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{
                        marginBlockStart: "20px",
                        marginBlockEnd: "20px",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                          <FormLabel sx={{ ml: 1, mt: 2 }} className="label">
                            O/L Results :
                          </FormLabel>
                        </Grid>
                        <Grid item xs={6} md={9}>
                          {/* {inputs.ordinaryLevelResult[0][0].length > 0 &&
                            inputs.ordinaryLevelResult[0][0].map((ol, i) => {
                              return (
                                <TextField
                                  key={i}
                                  id="filled-basic"
                                  label="  "
                                  variant="filled"
                                  name="ordinaryLevelResult"
                                  value={ol || " "}
                                  onChange={handleChange}
                                />
                              );
                            })} */}
                          <TextField
                            id="filled-basic"
                            label=""
                            variant="filled"
                            name="ordinaryLevelResult"
                            value={inputs.ordinaryLevelResult || " "}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </form>
      )}
    </div>
  );
}

export default EditEmployee;
