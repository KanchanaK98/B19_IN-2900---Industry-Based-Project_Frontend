import { React } from "react";
import { Typography, Grid, Card,  } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

// const getTeams = async () => {
//   return await axios
//     .get("http://localhost:8070/employee/getTeam")
//     .then((res) => res.data.data)
//     .catch((err) => {
//       console.log(err);
//     });
// };

function DisplayProduct({ product }) {
  const { _id, productID, productName, description, teamID, teamName } =
    product;
  // const [teams, setTeams] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     setTeams(await getTeams());
  //   }
  //   fetchData();
  // }, []);

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
                <Typography>{description}</Typography>
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
