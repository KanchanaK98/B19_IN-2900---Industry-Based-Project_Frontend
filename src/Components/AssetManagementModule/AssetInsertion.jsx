import React, { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
    Alert,
    Stack,
    AlertTitle
  } from "@mui/material";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useStyles from "./AssetInsertionStyles";
import { assetInsertionApi } from '../../Api/AssetManagementModule/assetInsertionApi';

function AssetInsertion() {
    const [assetID, setAssetID] = useState("");
    const [assetCategory, setAssetCategory] = useState("");
    const [model, setModel] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [status, setStatus] = useState("Available");
    const [error, seterror] = useState(false);
    const [added, setadded] = useState(false);
    const [alreadyID, setalreadyID] = useState(false);

    const sendData = async (e) =>
    {
        e.preventDefault();
        const asset = {assetID, assetCategory, model, serialNumber, status}
        if(assetID&&assetCategory&&model&&serialNumber)
            {
                // axios.post("http://localhost:8070/assets/add",asset).then(()=>{
                
                // setAssetID("");
                // setAssetCategory("");
                // setModel("");
                // setSerialNumber("");
                // setStatus("Available");
                // setadded(true);
                // setTimeout(() => {
                //     setadded(false);
                // }, 2000);

                // }).catch((err)=>{
                //     console.log(err.response.data.message)
                
                // })
                const response = await assetInsertionApi(asset);
                if(response.success === true)
                {
                    setAssetID("");
                    setAssetCategory("");
                    setModel("");
                    setSerialNumber("");
                    setStatus("Available");
                    setadded(true);
                    setTimeout(() => {
                        setadded(false);
                    }, 2000);
                }
                if(response.success === false){
                    setalreadyID(true);
                    setTimeout(() => {
                        setalreadyID(false);
                    }, 2000);
                }
                
        }else
        {
            seterror(true);
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
        
        
    }
    const classes = useStyles();
    return (
        
    <Box>
      <Paper elevation={5} className={classes.form}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.formHeader}>
            <LaptopChromebookIcon />
            <Typography variant="h4">
              Asset Insertion
            </Typography>
          </Grid>
            {error?(<Stack sx={{ width: '100%' }} spacing={2}><Alert variant="filled" severity="error">
                            Please enter all the details! 
            </Alert></Stack>):null}
            {alreadyID?(<Stack sx={{ width: '100%' }} spacing={2}><Alert variant="filled" severity="error">
                            Asset ID already exists 
            </Alert></Stack>):null}
            
          <Grid item sm={12} md={12}>
            <Divider variant="middle" />
            <Divider variant="middle" />
          </Grid>

          <Grid item sm={12} md={12}>
            <form autoComplete="off" onSubmit={sendData}>
              <Grid container>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <TextField
                    label="Asset ID"
                    variant="outlined"
                    name="assetID"
                    value={assetID}
                    onChange={(e)=>{setAssetID(e.target.value)}}
                    fullWidth
                  />
                  <TextField
                    label="Asset Category"
                    variant="outlined"
                    name="assetCategory"
                    value={assetCategory}
                    onChange={(e)=>{setAssetCategory(e.target.value)}}
                    fullWidth
                  />
                  
                </Grid>
                <Grid item sm={12} md={6} className={classes.inputs}>
                  <TextField
                    label="Asset Model"
                    variant="outlined"
                    name="model"
                    value={model}
                    onChange={(e)=>{setModel(e.target.value)}}
                    fullWidth
                  />
                  <TextField
                    label="Serial Number"
                    variant="outlined"
                    name="serialNumber"
                    value={serialNumber}
                    onChange={(e)=>{setSerialNumber(e.target.value)}}
                    fullWidth
                  />

                </Grid>
                 <Grid item sm={12} md={6} className={classes.inputs}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={status}
                    label="Status"
                    onChange={(e)=>{setStatus(e.target.value)}}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Available">Available</MenuItem>
                    <MenuItem value="Non-Available">Non-Available</MenuItem>
                    <MenuItem value="Fault">Fault</MenuItem>
                    </Select>
                    <FormHelperText>Status of Asset</FormHelperText>
                </FormControl>
                </Grid>
              </Grid>
              <Grid item sm={12} md={12} className={classes.createButton}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Add Asset
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
      {added?(<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                            Asset has been successfully added! — <strong>check it out!</strong>
                    </Alert>  </Stack>):null}
    </Box>
    );
}

export default AssetInsertion;