import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import useStyles from "./NavBarStyles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Home } from "@mui/icons-material";

const NavBar = ({ open, toggleDrawer }) => {
//   const styleProps = {
//     display: open ? "none" : "flex",
//   };
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} variant="outlined" square className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb">
          <IconButton className={classes.arrowIcon} onClick={toggleDrawer}>
            {open ? <Home /> : <ChevronRightIcon />}
          </IconButton>
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </Paper>
    </>
  );
};

export default NavBar;
