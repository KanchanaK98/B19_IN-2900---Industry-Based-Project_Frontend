import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { add } from "date-fns";
import React, { useEffect, useRef, useState } from "react";

import useStyles from "../DisplayAndUpdateLevels/LevelsStyles";

function LevelUpdateDialog({ level }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const [levelInputs, setLevelInputs] = useState({
    jobRole: level.jobRole,
  });

  const handleChange = (e) => {
    setLevelInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const classes = useStyles();

  console.log(levelInputs.jobRole);
  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleClickOpen("paper")}
        variant="contained"
        sx={{
          backgroundColor: "#183d78",
        }}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{ color: "#183d78", fontWeight: "bold" }}
        >
          Update Level
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <TextField
            id="filled-basic"
            variant="filled"
            name="jobRole"
            value={levelInputs.jobRole}
            onChange={handleChange}
            //   error={inputErrors.teamName ? true : false}
            //   helperText={inputErrors.teamName}
            fullWidth
          ></TextField>
          <Grid>
            {levelInputs.length > 0 &&
              levelInputs.jobRole.map((job, i) => (
                //    console.log(job.jobRole)
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#183d78",
              textAlign: "center",
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LevelUpdateDialog;
