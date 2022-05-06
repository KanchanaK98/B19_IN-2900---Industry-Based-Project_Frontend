import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./CreateCandidateFormStyles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  createCandidate,
  updateCandidate,
} from "../../../Api/RecruitmentModule/CandidateApi";
import "@react-pdf-viewer/core/lib/styles/index.css";
import SnackBar from "../../SnackBar/SnackBar";
import ViewCandidateCV from "../ViewCandidateCV/ViewCandidateCV";

const jobPositions = [
  "Software engineer",
  "Business analyst",
  "Human resources manager",
  "Chief technology officer (CTO)",
  "IT director",
  "IT manager",
  "IT coordinator",
  "UI/UX designer",
  "Product manager",
  "Associate Software engineer",
  "Intern",
];

const CreateCandidateForm = ({
  candidateData,
  setCandidateData,
  candidateId,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleClear = () => {
    setCandidateData({
      firstName: "",
      lastName: "",
      NIC: "",
      appliedPosition: "",
      phoneNumber: "",
      email: "",
      cv: "",
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!candidateId) {
      const createResponse = await createCandidate(candidateData);
      if (createResponse.success === true) {
        setOpenSnackBar(true);
      }
    } else {
      const updateResponse = await updateCandidate(candidateData, candidateId);
      if (updateResponse.success === true) {
        setOpenSnackBar(true);
      }
    }
    handleClear();
  };
  const handlePDFUpload = (event) => {
    const fileType = ["application/pdf"];
    let selectedFile = event.target.files[0];
    if (selectedFile && fileType.includes(selectedFile.type)) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (event) => {
        setCandidateData({
          ...candidateData,
          cv: event.target.result,
        });
      };
    } else {
      console.log("Please select valid pdf file");
    }
  };

  const classes = useStyles();
  return (
    <Box>
      <Paper elevation={5} className={classes.form}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.formHeader}>
            <PeopleAltIcon />
            <Typography variant="h4">
              {candidateId ? "Update" : "Create"} Candidate
            </Typography>
          </Grid>

          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <TextField
                    label="First name"
                    variant="outlined"
                    name="firstName"
                    value={candidateData.firstName}
                    onChange={(event) =>
                      setCandidateData({
                        ...candidateData,
                        firstName: event.target.value,
                      })
                    }
                    fullWidth
                  />
                  <TextField
                    label="NIC"
                    variant="outlined"
                    name="NIC"
                    value={candidateData.NIC}
                    onChange={(event) =>
                      setCandidateData({
                        ...candidateData,
                        NIC: event.target.value,
                      })
                    }
                    fullWidth
                  />
                  {/* <TextField label="Phone number" variant="outlined" /> */}
                  <MuiPhoneNumber
                    label="Phone number"
                    defaultCountry={"lk"}
                    variant="outlined"
                    name="phoneNumber"
                    value={candidateData.phoneNumber}
                    fullWidth
                    onChange={(value) =>
                      setCandidateData({
                        ...candidateData,
                        phoneNumber: value,
                      })
                    }
                  />
                  <TextField
                    label="Applied Position"
                    variant="outlined"
                    name="appliedPosition"
                    select
                    value={candidateData.appliedPosition}
                    onChange={(event) =>
                      setCandidateData({
                        ...candidateData,
                        appliedPosition: event.target.value,
                      })
                    }
                    fullWidth
                  >
                    {jobPositions.map((jobPosition) => (
                      <MenuItem value={jobPosition} key={jobPosition}>
                        {jobPosition}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <TextField
                    label="Last name"
                    variant="outlined"
                    name="lastName"
                    value={candidateData.lastName}
                    onChange={(event) =>
                      setCandidateData({
                        ...candidateData,
                        lastName: event.target.value,
                      })
                    }
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={candidateData.email}
                    onChange={(event) =>
                      setCandidateData({
                        ...candidateData,
                        email: event.target.value,
                      })
                    }
                    fullWidth
                  />

                  <TextField
                    label="CV"
                    variant="outlined"
                    name="cv"
                    type={"file"}
                    InputLabelProps={{ shrink: true }}
                    onChange={handlePDFUpload}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item sm={12} md={12} className={classes.createButton}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  {candidateId ? "Update" : "Create"}
                </Button>
              </Grid>
            </form>

            {candidateId && (
              <>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={handleOpenDialog}
                >
                  Old CV
                </Button>
                <ViewCandidateCV
                  openDialog={openDialog}
                  handleCloseDialog={handleCloseDialog}
                  candidateData={candidateData}
                />
              </>
            )}
            <SnackBar
              handleCloseSnackBar={handleCloseSnackBar}
              openSnackBar={openSnackBar}
              message={
                candidateId
                  ? "Candidate successfully updated"
                  : "Candidate successfully created"
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CreateCandidateForm;
