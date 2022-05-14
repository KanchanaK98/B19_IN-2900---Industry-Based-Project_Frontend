// // import * as React from "react";
// // import Button from "@mui/material/Button";
// // import Dialog from "@mui/material/Dialog";
// // import DialogActions from "@mui/material/DialogActions";
// // import DialogContent from "@mui/material/DialogContent";
// // import DialogContentText from "@mui/material/DialogContentText";
// // import DialogTitle from "@mui/material/DialogTitle";
// // import Paper from "@mui/material/Paper";
// // import Draggable from "react-draggable";
// // import { useState } from "react";

// // function PaperComponent(props) {
// //   return (
// //     <Draggable
// //       handle="#draggable-dialog-title"
// //       cancel={'[class*="MuiDialogContent-root"]'}
// //     >
// //       <Paper {...props} />
// //     </Draggable>
// //   );
// // }

// // export default function DraggableDialog() {
// //   const [open, setOpen] = useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <div>
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         Open draggable dialog
// //       </Button>
// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         PaperComponent={PaperComponent}
// //         aria-labelledby="draggable-dialog-title"
// //       >
// //         <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
// //           Subscribe
// //         </DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             To subscribe to this website, please enter your email address here.
// //             We will send updates occasionally.
// //           </DialogContentText>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button autoFocus onClick={handleClose}>
// //             Cancel
// //           </Button>
// //           <Button onClick={handleClose}>Subscribe</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending
//             anonymous location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
