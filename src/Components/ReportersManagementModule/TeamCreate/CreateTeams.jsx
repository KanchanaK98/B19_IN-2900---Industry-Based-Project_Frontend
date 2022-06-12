import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
// import { Multiselect } from "multiselect-react-dropdown";
import {
  Avatar,
  IconButton,
  Box,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { MenuItem } from "@mui/material";
import { Chip } from "@mui/material";
import {
  FormLabel,
  TextField,
  Divider,
  Paper,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TeamMemberDialog from "./TeamMemberDialog";
import {
  createTeams,
  getEmployeesWithoutTeam,
} from "../../../Api/ReportersManagementModule/TeamsApi";
import { Link } from "react-router-dom";

function CreateTeams() {
  const [addSuccessfully, setAddSuccessfully] = useState(false);
  const [notAdded, setnotAdded] = useState(false);
  

  const [teaminputs, setTeaminputs] = useState({
    teamName: "",
    teamLead: "",
    teamMembers: [],
  });
  const [teaminputErrors, setTeaminputErrors] = useState({
    teamName: "",
    teamLead: "",
    // teamMembers: "",
  });
  
  const handleChange = (e) => {
    setTeaminputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "teamLead") {
      setMembers(members.filter((mem) => mem !== e.target.value));
    }
  };

  const handleClear = () => {
    setTeaminputs({
      teamName: "",
      teamLead: {},
      teamMembers: [],
    });
  };
  //-----------validation--------------
  const errorHandle = () => {
    let isError = false;

    if (!teaminputs.teamName) {
      setTeaminputErrors((prevState) => ({
        ...prevState,
        teamName: "Team Name is required",
      }));
      isError = true;
    }

    if (!teaminputs.teamLead) {
      setTeaminputErrors((prevState) => ({
        ...prevState,
        teamLead: "Team Lead is required",
      }));
      isError = true;
    }
    console.log(teaminputErrors);
    return isError;
  };
  //console.log(teaminputErrors)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorHandle()) {
      createTeams(teaminputs);
      setAddSuccessfully(true);
      setTimeout(() => {
        setAddSuccessfully(false);
      }, 2000);
      handleClear();
      // setTeaminputs({
      //   teamName: "",
      //   teamLead: {},
      //   teamMembers: [],
      // });
    } else {
      setnotAdded(true);
      setTimeout(() => {
        setnotAdded(false);
      }, 2000);
      handleClear();
    }
  };

  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setMembers(await getEmployeesWithoutTeam());
    }
    fetchData();
  }, []);

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <div>
      <Box padding={4}>
        <Paper sx={{ padding: 4 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{ mb: 5, fontWeight: "bold" }}>
              <GroupAddIcon sx={{ height: 40, width: 40 }} />
              &nbsp; Create Team
            </Typography>
            <Divider sx={{ mb: 5, mt: 2 }}></Divider>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6}>
                <Grid container sx={{ mb: 5 }}>
                  <Grid item sm={4} md={4}>
                    <FormLabel>Team Name:</FormLabel>
                  </Grid>
                  <Grid item sm={8} md={8}>
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      name="teamName"
                      value={teaminputs.teamName}
                      onChange={handleChange}
                      error={teaminputErrors.teamName ? true : false}
                      helperText={teaminputErrors.teamName}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item sm={4} md={4}>
                    <FormLabel>Team Members:</FormLabel>
                  </Grid>

                  <Grid item sm={8} md={8}>
                    <IconButton onClick={handleOpenDialog}>
                      <AddCircleIcon sx={{ color: "gray" }} fontSize="large" />
                    </IconButton>
                    <IconButton
                      onClick={handleOpenDialog}
                      disabled={
                        teaminputs.teamMembers.length === 0 ? true : false
                      }
                    >
                      <EditIcon sx={{ color: "gray" }} fontSize="large" />
                    </IconButton>
                  </Grid>
                  {/* <Grid item md={12}>
                    <Typography
                      fontSize="0.75rem"
                      sx={{ ml: 4, letterSpacing: "0.03333em" }}
                      color="error"
                    >
                      {teaminputErrors.teamMembers}
                    </Typography>
                  </Grid> */}
                </Grid>
                <TeamMemberDialog
                  openDialog={openDialog}
                  setOpenDialog={setOpenDialog}
                  teaminputs={teaminputs}
                  setTeaminputs={setTeaminputs}
                  employees={members}
                  setEmployee={setMembers}
                />

                <Grid container sx={{ mb: 5 }}>
                  <Grid item sm={4} md={4}></Grid>
                  <Grid item sm={8} md={8}>
                    {teaminputs.teamMembers &&
                      teaminputs.teamMembers.map((member) => (
                        <Chip
                          label={member.employeeName}
                          key={member.employeeID}
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

              <Grid item sm={12} md={6}>
                <Grid container>
                  <Grid item sm={4} md={4}>
                    <FormLabel>Team Lead :</FormLabel>
                  </Grid>
                  <Grid item sm={8} md={8}>
                    <TextField
                      id="data"
                      label="Team Leader"
                      variant="filled"
                      name="teamLead"
                      select
                      value={teaminputs.teamLead}
                      error={teaminputErrors.teamLead ? true : false}
                      helperText={teaminputErrors.teamLead}
                      onChange={handleChange}
                      fullWidth
                      SelectProps={{
                        renderValue: (mem) => mem.employeeName,
                      }}
                    >
                      {members &&
                        members.map((mem) => (
                          <MenuItem value={mem} key={mem.employeeID}>
                            <Grid
                              container
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              }}
                            >
                              <Grid item>
                                <Avatar sx={{ height: 35, width: 35 }}>
                                  {mem.employeeFirstName}
                                </Avatar>
                              </Grid>
                              <Grid item>
                                <Typography sx={{ mb: -0.7, ml: 1 }}>
                                  {mem.employeeName}
                                </Typography>
                                <Typography variant="body2" sx={{ ml: 1.3 }}>
                                  {mem.employeeID}
                                </Typography>
                              </Grid>
                            </Grid>
                          </MenuItem>
                        ))}
                    </TextField>
                  </Grid>

                  {/* <Multiselect
              options={members}
              displayValue="fullName"
            ></Multiselect> */}
                </Grid>
              </Grid>
            </Grid>

            {/* <Divider sx={{ mt: 5, mb: 5 }}></Divider> */}
            {/* <FormLabel sx={{ mt: 2, mr: 2 }} className="label">
          Team Members :
          <Multiselect options={members} displayValue="fullName"></Multiselect>
        </FormLabel> */}
            <Grid container>
              <Grid item md={6} sx={{ textAlign: "left" }}>
                {/* <Link to="/teams" sx={{TextDecoder:"inherit"}}> */}
                <Button
                  component={Link}
                  to="/teams"
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#183d78" }}
                >
                  View Teams
                </Button>
                {/* </Link> */}
              </Grid>
              <Grid item md={6} sx={{ textAlign: "right" }}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#183d78" }}
                >
                  Save New Team
                </Button>
              </Grid>
            </Grid>

            {/* <SnackBar
       handleCloseSnackBar={handleCloseSnackBar}
       openSnackBar={openSnackBar}
       message={
         flag
           ? "Team successfully created"
           : "Team connot be created"
       }
     /> */}
          </form>
        </Paper>
        {addSuccessfully ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Team has been successfully added!
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
      </Box>
    </div>
  );
}

export default CreateTeams;
