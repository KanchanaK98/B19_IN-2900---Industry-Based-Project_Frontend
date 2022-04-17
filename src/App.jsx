import React, { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import CreateCandidate from "./Pages/RecruitmentModule/CreateCandidateProfile/CreateCandidate";
import ViewAsset from "./Components/AssetManagementModule/ViewAsset";
// import ViewAsset from './Pages/AssetManagementModule/ViewAsset'
import Login from "./Components/Login/Login";
import AssetInsertion from "./Components/AssetManagementModule/AssetInsertion";
import RequestLeaves from "./Pages/LeaveManagementModule/RequestLeaves/RequestLeaves";

function App() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {user && <SideBar open={open} toggleDrawer={toggleDrawer} />}
      <Grid container>
        <Grid item sm={12} md={12}>
          {user && <NavBar open={open} toggleDrawer={toggleDrawer} />}
        </Grid>
        <Grid item sm={12} md={12} sx={{ p: !user ? 0 : 4 }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login setUser={setUser} />} />
              <Route path="candidate" element={<CreateCandidate />} />
              <Route path="/asset" element={<ViewAsset />} />
              <Route path="/assetInsertion" element={<AssetInsertion />} />

              <Route path="/requestLeave" element={<RequestLeaves />} />

            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
