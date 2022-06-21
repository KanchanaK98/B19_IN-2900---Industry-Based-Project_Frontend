import { ContactSupportOutlined } from "@mui/icons-material";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { add } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { updateOrganization } from "../../../Api/ReportersManagementModule/OrganizationApi";

import useStyles from "../DisplayAndUpdateLevels/LevelsStyles";
const positions = [
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

function LevelUpdateDialog({
  jobrole,
  setLevels,
  levels,
  level,
  count,
  setCount,
}) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const [levelInputs, setLevelInputs] = useState(jobrole);
  const [tempLevel, setTempLevel] = useState(level);
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = async (position) => {
    setLevelInputs({ ...levelInputs, jobRole: position });
    //setLevelInputs({levelInputs:[...levelInputs.jobRole,position]})
    // fruits: [ ...this.state.fruits, e.target.value],
    console.log(levelInputs);
    setLevels(levels.filter((Level) => Level !== level));

    // console.log(tempLevel, { message: "jjjjjjjj" });
    setLevels(levels.concat(tempLevel));
    setOpen(false);
    //  console.log(levels)

    const response = await updateOrganization(levelInputs, level._id);
    setCount(++count);
    console.log(response);
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

  const handleDelete = (job) => {
    setLevelInputs(levelInputs.filter((level) => level !== job));
  };
  const handleSave = (position) => {
    setLevelInputs({ ...levelInputs, jobRole: position });
  };
  // console.log(levelInputs, { message: "hi" });
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
        <form autoComplete="off">
          <DialogContent dividers={scroll === "paper"}>
            <TextField
              id="filled-basic"
              variant="filled"
              name="jobRole"
              select
              //   value={levelInputs}
              // onChange={handleChange}
              onChange={(event) => {
                // console.log(levelInputs, { message: "yyyyy" });
                setLevelInputs(levelInputs.concat(event.target.value));

                setTempLevel((prevState) => ({
                  ...prevState,
                  jobRole: [...levels],
                }));

                //   const handleUpdate = (index, todo) => {
                //     const newTodos = [...todos];
                //     newTodos[index] = todo;
                //     setTodos(newTodos);
                //   }
              }}
              //   error={inputErrors.teamName ? true : false}
              //   helperText={inputErrors.teamName}
              fullWidth
            >
              {positions.map((position) => (
                <MenuItem value={position} key={position}>
                  {position}
                </MenuItem>
              ))}
            </TextField>
            <Grid>
              {levelInputs.length > 0 &&
                levelInputs.map((job, i) => (
                  //    console.log(job.jobRole)
                  <Chip
                    label={job}
                    key={i}
                    onDelete={() => handleDelete(job)}
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
        </form>
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
