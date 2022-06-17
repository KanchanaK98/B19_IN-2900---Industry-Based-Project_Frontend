import {
  Box,
  Button,
  Chip,
  Divider,
  FormLabel,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import useStyles from "./OrganizationStyles";
import GridViewIcon from "@mui/icons-material/GridView";
import { createOrganization } from "../../../Api/ReportersManagementModule/OrganizationApi";
import JobRoleDialogBox from "./JobRoleDialogBox";
function Organization() {
  const [organizationInputs, setOrganizationInputs] = useState({
    level: "",
    jobRole: [],
  });
  const handleChange = (e) => {
    setOrganizationInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClear = () => {
    setOrganizationInputs({ level: "", jobRole: [] });
  };
  const handleSubmit = async (e) => {
    console.log("hi");
    e.preventDefault();
    const response = await createOrganization(organizationInputs);
    console.log(response);
    console.log(organizationInputs);
    handleClear();
  };
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const classes = useStyles();
  return (
    <div>
      <Box padding={8} bgcolor="#d7dde0" mt={5}>
        <form>
          <Paper sx={{ padding: 8 }}>
            <Typography variant="h5" fontWeight="bold" className={classes.head}>
              <GridViewIcon />
              &nbsp; Create Organization Structure
            </Typography>
            <Divider sx={{ mt: 4, mb: 5 }}></Divider>
            <Grid container>
              <Grid item md={6}>
                <Grid container>
                  <Grid item md={3}>
                    <FormLabel sx={{ mt: 2, fontWeight: "bold" }}>
                      Level :
                    </FormLabel>
                  </Grid>
                  <Grid item md={9}>
                    <TextField
                      id="filled-basic"
                      label="Level"
                      variant="filled"
                      name="level"
                      onChange={handleChange}
                      value={organizationInputs.level}
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} textAlign="right">
                <Button className={classes.button} variant="contained">
                  Organization structure
                </Button>
              </Grid>
            </Grid>

            <Grid container sx={{ mt: 6 }}>
              <Grid item md={6}>
                <Grid container>
                  <Grid item md={3}>
                    <FormLabel sx={{ mt: 2, fontWeight: "bold" }}>
                      Job Role :
                    </FormLabel>
                  </Grid>
                  <Grid item md={9}>
                    {/* <TextField
                      id="filled-basic"
                      label="Level"
                      variant="filled"
                      name="level"
                      onChange={handleChange}
                      value={organizationInputs.jobRole}
                      fullWidth
                    ></TextField> */}

                    <IconButton onClick={handleOpenDialog}>
                      <AddCircleIcon sx={{ color: "gray" }} fontSize="large" />
                    </IconButton>

                    <JobRoleDialogBox
                      openDialog={openDialog}
                      setOpenDialog={setOpenDialog}
                      organizationInputs={organizationInputs}
                      setOrganizationInputs={setOrganizationInputs}
                    />
                    <Grid container sx={{ mb: 5 }}>
                      <Grid item sm={4} md={4}></Grid>
                      <Grid item sm={8} md={8}>
                        {organizationInputs.jobRole &&
                          organizationInputs.jobRole.map((job, i) => (
                            <Chip
                              label={job}
                              key={i}
                              sx={{
                                mr: 0.5,
                                mt: 1,
                                bgcolor: "rgba(49, 24, 62, 1)",
                                color: "white",
                                "& .MuiSvgIcon-root": {
                                  color: "white",
                                },
                              }}
                            />
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} textAlign="right">
                <Button
                  onClick={handleSubmit}
                  className={classes.button}
                  variant="contained"
                >
                  create
                </Button>
              </Grid>
            </Grid>

            <Grid container sx={{ mt: 10 }}>
              <Grid item md={6}></Grid>
              <Grid item md={6}></Grid>
            </Grid>
          </Paper>
        </form>
      </Box>
    </div>
  );
}

export default Organization;
