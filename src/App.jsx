import React, {useState} from 'react';
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import CreateCandidate from "./Pages/RecruitmentModule/CreateCandidateProfile/CreateCandidate";

function App() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{display : 'flex'}}>
    <CssBaseline />
    <SideBar open={open} toggleDrawer={toggleDrawer}/>
    <Grid container >
      <Grid item sm={12} md={12}>
        <NavBar open={open} toggleDrawer={toggleDrawer}/>
      </Grid>
      <Grid item sm={12} md={12} sx={{p : 4}}>
      <BrowserRouter>
     <Routes>
       <Route path="" element={<CreateCandidate />} />
     </Routes>
     </BrowserRouter>
      </Grid>
    </Grid>

    
    </Box>
  );
}

export default App;
