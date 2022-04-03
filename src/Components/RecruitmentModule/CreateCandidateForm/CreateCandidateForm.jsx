import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Snackbar,
  IconButton,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./CreateCandidateFormStyles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  createCandidate,
  updateCandidate,
} from "../../../Api/RecruitmentModule/CandidateApi";
import { Viewer } from "@react-pdf-viewer/core";
import AppsIcon from "@mui/icons-material/Apps";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Close } from "@mui/icons-material";

const CreateCandidateForm = ({
  candidateData,
  setCandidateData,
  candidateId
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
        console.log("hi");
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
                <Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
                  <DialogTitle>
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                      <AppsIcon fontSize="large" sx={{ mr: 1 }} />
                      <Typography variant="h5">
                        {candidateData.firstName +
                          " " +
                          candidateData.lastName +
                          "'s CV"}
                      </Typography>
                    </Grid>
                  </DialogTitle>
                  <Divider variant="middle" />
                  <Divider variant="middle" />
                  <DialogContent>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                      <Viewer fileUrl={candidateData.cv} />
                    </Worker>
                  </DialogContent>
                </Dialog>
              </>
            )}

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
                {candidateId
                  ? "Candidate successfully updated"
                  : "Candidate successfully created"}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CreateCandidateForm;
