import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Modal from './AssignModel';
import AssetUpdateModule from './AssetUpdateModule';
import { availableAssetsApi,unavailableAssetsApi,allAssets,modelViewApi,unassignAsset,releaseFaultAsset, createFaultAsset, assignAssets, searchAssetCategory } from '../../Api/AssetManagementModule/assetViewApi';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
//import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {Typography} from "@mui/material";
import useStyles from "./AssetViewListStyles";
import AssetViewStats from './AssetViewStats';

const  ViewAsset = () => {
    const [assets,setAssets] = useState([]);
    const [eachAsset, setEachAsset] = useState([]);
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);
    const [empID, setEmployee] = useState("");
    const [assignAsset, setAssignAsset] = useState("");
    const [error,seterror] = useState(false);
    const [number,setNumber] = useState({available:0,nonAvailable:0,fault:0})
    useEffect(()=>{
        axios.get("http://localhost:8070/assets/").then((res)=>{
            // console.log(res)
            setAssets(res.data.assets);
            setNumber({available:res.data.availableCount,nonAvailable:res.data.nonavblCount,fault:res.data.faultCount})
            // console.log(number.available)
        }).catch((err)=>{
            alert(err.message);
        })

        
    },[])

    const handleSearch = async (status) =>
    {
        
        if(status === "Available"){
            const response = await availableAssetsApi();
            setAssets(response);
            
        }
        if(status === "Non-Available"){
            
            const response = await unavailableAssetsApi();
            setAssets(response);
        }
        if(status === "All"){
            
            const response = await allAssets();
            console.log(response)
            setAssets(response.assets);
        }
    }

    const showModal = () =>
    {
        
        setShow(true);
    }
    const hideModal = () =>
    {
        setShow(false);
    }
    const ShowModalView = async (id) => 
    {
        
        const response = await modelViewApi(id);
        setEachAsset(response);
        setShow2(true);
        // console.log(eachAsset);
       
        
        
    }
    const hideModalView = () =>
    {
        setShow2(false);
        setEachAsset("");
        
    }
    
    const unassign = async (id) =>
    {
        
        const response = await unassignAsset(id);
        if(response.success === true)
        {
            const index = assets.findIndex((assets)=>assets._id===id)
            const newAssets = [...assets]
            newAssets[index].status="Available";
            setAssets(newAssets)
            setEmployee("")
            setNumber({available:++number.available,nonAvailable:--number.nonAvailable,fault:number.fault})
        }else
        {
            seterror(true);
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
        

    }
    const releaseFault = async (id) =>
    {
        const response = await releaseFaultAsset(id);
        if(response.success === true)
        {
            const index = assets.findIndex((assets)=>assets._id===id)
            const newAssets = [...assets]
            newAssets[index].status="Available";
            setAssets(newAssets)
            setEmployee("")
            setNumber({available:++number.available,nonAvailable:number.nonAvailable,fault:--number.fault})
        }else{
            seterror(true);
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
        

    }
    const createFault = async (id) =>
    {
        const response = await createFaultAsset(id);
        if(response.success === true)
        {
            const index = assets.findIndex((assets)=>assets._id===id)
            const newAssets = [...assets]
            newAssets[index].status="Fault";
            setAssets(newAssets)
            setEmployee("")
            setNumber({available:--number.available,nonAvailable:number.nonAvailable,fault:++number.fault})
        }else{
            seterror(true);
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }

    }
    

    const sendData = async (e) =>
    {
        e.preventDefault();
        const employee = {empID}
        const response = await assignAssets(assignAsset,employee);
        if(response.success === true)
        {
            setShow(false);
            const index = assets.findIndex((assets)=>assets._id===assignAsset)
            const newAssets = [...assets]
            newAssets[index].status="Non-Available";
            setAssets(newAssets)
            setNumber({available:--number.available,nonAvailable:++number.nonAvailable,fault:number.fault})
        }else
        {
            seterror(true);
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
       
        setEmployee("")
    }
    const searchCategoryBar = async (category) =>
    {
        
            const response = await searchAssetCategory(category);
            if(response.success === true)
            {
                setAssets(response.data);
            }else
            {
                seterror(true);
                setTimeout(() => {
                    seterror(false);
                }, 2000);
            }
        

    }
    const updateAssetFunction = async (id,asset) =>
    {
        const index = assets.findIndex((assets)=>assets._id===id)
        const newAssets = [...assets]
        newAssets[index].assetCategory=asset.assetCategory
        newAssets[index].model=asset.model
        newAssets[index].serialNumber=asset.serialNumber
        newAssets[index].status=asset.status;
        setAssets(newAssets)
    }
    const classes = useStyles();
    return (
        // <div >
        
        // <div className='container' >
        // {/* dropdown must have scripts and link files to  work properly. there are in index.html file  */}
        // <div style={{ display:"flex",flexDirection:'row',justifyContent:"space-between" }}>
        //     <div className="dropdown" style={{ marginTop:5}}>
        //         <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        //         Status
        //         </button>
        //         <div className="dropdown-menu" labelled="dropdownMenu2">
        //         <button className="dropdown-item" type="button" onClick={()=>{handleSearch("Available")}}>Available</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{handleSearch("Non-Available")}}>Non-Available</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{handleSearch("All")}}>All</button>
        //         </div>
        //     </div>
        //     <div className="dropdown" style={{ marginTop:5 }}>
        //         <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        //         Category
        //         </button>
        //         <div className="dropdown-menu" labelled="dropdownMenu2">
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Laptop")}}>Laptop</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Mobile")}}>Mobile</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Tablet")}}>Tablet</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Keyboard")}}>Keyboard</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Router")}}>Router</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("UPS")}}>UPS</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Printer")}}>Printer</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Monitor")}}>Monitor</button>
        //         <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Headphone")}}>Headphone</button>
        //         </div>
        //     </div>
        // </div><br/>
        // {error?(<Stack sx={{ width: '100%' }} spacing={2}><Alert variant="filled" severity="error">
        //                     Something was wrong! 
        //     </Alert></Stack>):null}
        
        
        
        //         <table className="table table-striped">
        //             <thead>
        //                 <tr>
        //                 <th scope="col">Asset ID</th>
        //                 <th scope="col">Category</th>
        //                 <th scope="col">Model</th>
        //                 <th scope="col">Serial Number</th>
        //                 <th scope="col">Status</th>
        //                 <th scope="col">Action</th>
        //                 </tr>
        //             </thead>
        //             {assets.map(asset=>
                    
        //             <tbody key={asset._id} style={{ color:"white" }}>
        //                 {/* <tr style={asset.status==='Fault'?{backgroundColor:'red'}:{backgroundColor:'blue'}}> */}
        //                 <tr style={asset.status==='Fault'?{background: "linear-gradient(#f54242, #f56f42)"}:{background: "linear-gradient(#7242f5, #426ff5)"}}>
                        
        //                 <th scope="row" style={rowStyle}>{asset.assetID}</th>
        //                 <td style={rowStyle}>{asset.assetCategory}</td>
        //                 <td style={rowStyle}>{asset.model}</td>
        //                 <td style={rowStyle}>{asset.serialNumber}</td>
        //                 <td style={rowStyle}>{asset.status}</td>
        //                 {asset.status === 'Available'?
        //                     (<td>
        //                         <button className='btn btn-primary announce' onClick={()=>{showModal();setAssignAsset(asset._id);}}>Assign</button>
        //                         <button className='btn btn-danger' onClick={()=>createFault(asset._id)} style={{ marginLeft:"5px" }}>Fault</button>
        //                         <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>Update</button>
        //                     </td>)

        //                     :asset.status === 'Fault'?
        //                     (<td>
        //                         <button className='btn btn-danger' onClick={()=>releaseFault(asset._id)}>Release Fault</button>
        //                         <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>Update</button>
        //                     </td>):
        //                     (<td>
        //                         <button className='btn btn-primary announce' onClick={()=>unassign(asset._id)}>Un-Assign</button>
        //                         <button className='btn btn-danger' onClick={()=>createFault(asset._id)} style={{ marginLeft:"5px" }}>Fault</button>
        //                         <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>Update</button>
        //                     </td>)
        //                 }
                        
        //                 </tr>
                    
        //             </tbody>
                    
        //             )}
        //         </table>
        //     {/* modal for assign asset */}
            
        //     <Modal show={show} handleClose={hideModal}>
        //     <div className='container'>
            
        //     <form id="form" onSubmit={sendData}>
        //         <div className="form-group">
        //             <label htmlFor ="email">Employee ID</label>
        //             <input type="text" className="form-control" id="empID" placeholder="Enter Employee ID" value={empID} onChange={(e)=>{setEmployee(e.target.value)}}/>
        //         </div><br/>
                
                
        //         <button type="submit" className="btn btn-primary">Assign</button>
        //     </form>

        //     </div>
        //     </Modal> 

        //     {/* modal end 


        //     {/* modal for update asset */}
        //     { show2===true?(<AssetUpdateModule data={eachAsset} show={true} handleClose={hideModalView} updateFun={updateAssetFunction}/>):null }

        //     {/* <Modal show={show2} handleClose={hideModalView}>


        //     </Modal> */}
            
        // </div>
        // </div> 
        <>
        <AssetViewStats countAvailable={number.available} countNonAvailable={number.nonAvailable} countFault={number.fault}/>    
        <Paper elevation={6} className={classes.paper}>
        <div style={{ display:"flex",flexDirection:'row',justifyContent:"space-between" }} className={classes.topics}>
             <div className="dropdown" style={{ marginTop:5}}>
                 <button className="btn btn-secondary dropdown-toggle" style={{ borderRadius:15}}  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                 Status
                 </button>
                 <div className="dropdown-menu" labelled="dropdownMenu2">
                 <button className="dropdown-item" type="button" onClick={()=>{handleSearch("Available")}}>Available</button>
                 <button className="dropdown-item" type="button" onClick={()=>{handleSearch("Non-Available")}}>Non-Available</button>
                 <button className="dropdown-item" type="button" onClick={()=>{handleSearch("All")}}>All</button>
                 </div>
          </div>
            <div className="dropdown" style={{ marginTop:5 }}>
               <button className="btn btn-secondary dropdown-toggle" style={{ borderRadius:15}}  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                 Category
                 </button>
                 <div className="dropdown-menu" labelled="dropdownMenu2">
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Laptop")}}>Laptop</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Mobile")}}>Mobile</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Tablet")}}>Tablet</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Keyboard")}}>Keyboard</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Router")}}>Router</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("UPS")}}>UPS</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Printer")}}>Printer</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Monitor")}}>Monitor</button>
                 <button className="dropdown-item" type="button" onClick={()=>{searchCategoryBar("Headphone")}}>Headphone</button>
                 </div>
            </div>
        </div><br/>
         {error?(<Stack sx={{ width: '100%' }} spacing={2}><Alert variant="filled" severity="error">
                             Something was wrong! 
            </Alert></Stack>):null}
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center">
              <Typography variant='button'>Asset ID</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='button'>Category</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='button'>Model</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='button'>Serial Number</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant='button'>Status</Typography>
            </TableCell>
            <TableCell align="center">
                <Typography variant='button'>Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {assets.map(asset=>
            (
              <TableRow key={asset._id} className={classes.tableRow} >
                <TableCell align="center">
                  <Typography style={{ color:'black' }}>{asset.assetID}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography style={{ color:'black' }}>{asset.assetCategory}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography style={{ color:'black' }}>
                    {asset.model}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography style={{ color:'black' }}> {asset.serialNumber}</Typography>
                </TableCell>
                <TableCell align="center">
                { asset.status === 'Fault'?(<Typography style={{ color:'red' }}> {asset.status}</Typography>):null} 
                {asset.status === 'Available'?(<Typography style={{ color:'blue' }}> {asset.status}</Typography>):null}
                {asset.status === 'Non-Available'?(<Typography style={{ color:'green' }}> {asset.status}</Typography>):null}
                </TableCell>
                
                {asset.status === 'Available'?
                           (<TableCell align="center">
                               <button className='btn btn-primary announce' onClick={()=>{showModal();setAssignAsset(asset._id);}}>Assign</button>
                                <button className='btn btn-danger' onClick={()=>createFault(asset._id)} style={{ marginLeft:"5px" }}>Fault</button>
                                <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>Update</button>
                                </TableCell>)

                           :asset.status === 'Fault'?
                           (<TableCell align="center">
                               <button className='btn btn-danger' onClick={()=>releaseFault(asset._id)}>Release Fault</button>
                               <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>Update</button>
                               </TableCell>):
                           (<TableCell align="center">
                                <button className='btn btn-primary announce' onClick={()=>unassign(asset._id)}>Un-Assign</button>
                                <button className='btn btn-danger' onClick={()=>createFault(asset._id)} style={{ marginLeft:"5px" }}>Fault</button>
                                <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>Update</button>
                            </TableCell>)
                }
                
               
                
              </TableRow>
            ))}
        </TableBody>
      </Table>
           {/* modal for assign asset */}
            
                 <Modal show={show} handleClose={hideModal}>
                 <div className='container'>
                
                 <form id="form" onSubmit={sendData}>
                     <div className="form-group">
                         <label htmlFor ="email">Employee ID</label>
                         <input type="text" className="form-control" id="empID" placeholder="Enter Employee ID" value={empID} onChange={(e)=>{setEmployee(e.target.value)}}/>
                     </div><br/>
                    
                    
                     <button type="submit" className="btn btn-primary">Assign</button>
                 </form>
    
                 </div>
                 </Modal> 
    
                {/* modal end 
    
    
                 {/* modal for update asset */}
                 { show2===true?(<AssetUpdateModule data={eachAsset} show={true} handleClose={hideModalView} updateFun={updateAssetFunction}/>):null }
    
    </Paper>
    </>           
        
    );

    
}




export default ViewAsset;