import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import CardContent from '@material-ui/core/CardContent';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// const useStyles = makeStyles((theme) => ({

//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },

// }));

function DisplayProduct({ product }) {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const { _id, productID, productName, description, teamID, teamName } =
    product;

  console.log(product);
  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <IconButton
            sx={{ backgroundColor: "lightblue" }}
            component={Link}
            to={`/products/update/${_id}`}
            state={{ product }}
          >
            <EditIcon sx={{ color: "gray" }} fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item md={9}>
          <Card
            sx={{
              mb: 2,
              minWidth: 1110,
              backgroundColor: "lightgray",
              padding: 3,
            }}
          >
            <Grid container>
              <Grid item md={3}>
                <Typography>{productID}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>{productName}</Typography>
              </Grid>
              <Grid item md={3}>
                {/*                 
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
                {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         */}
                <Typography>{description}</Typography>
                {/* </CardContent>
      </Collapse> */}
              </Grid>
              <Grid item md={3}>
                <Typography>{teamName}</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DisplayProduct;
