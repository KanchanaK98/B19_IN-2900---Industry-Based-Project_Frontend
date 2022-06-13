import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { getCandidates } from "../../../Api/ReportersManagementModule/EmployeeApi";

function Candidates() {
  const [candidates, setCandidates] = useState();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [isDisable, setIsDisable] = useState(true);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      setCandidates(await getCandidates());
    }
    fetchData();
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
    // if (!(candidates === undefined)) {
    //   setIsDisable(false);
    // }
  }, [open]);
  //  console.log(candidates)
  return (
    <div>
      <Button
        // disabled={isDisable}
        onClick={handleClickOpen("paper")}
        variant="contained"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#183d78",
        }}
      >
        Initiated Candidates
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
          Initiated Candidates
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {candidates &&
            candidates.map((candidate) => (
              <Card
                key={candidate.NIC}
                sx={{
                  padding: 2,
                  backgroundColor: "#d7dde0",
                  mb: 1,
                  backgroundImage: `linear-gradient(to right, rgba(228, 241, 247), rgba(215, 221, 224))`,
                }}
              >
                <Typography>{candidate.candidateName}</Typography>
                <Typography>{candidate.appliedPosition}</Typography>
                <Typography>{candidate.NIC}</Typography>
              </Card>
            ))}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "#183d78",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Candidates;
