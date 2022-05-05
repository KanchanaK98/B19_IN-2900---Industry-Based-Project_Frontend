import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Modal from './AssignModel';
import { availableAssetsApi,unavailableAssetsApi,allAssets,modelViewApi,unassignAsset,releaseFaultAsset, createFaultAsset, assignAssets, searchAssetCategory } from '../../Api/AssetManagementModule/assetViewApi';

const  ViewAsset = () => {
    const [assets,setAssets] = useState([]);
    const [eachAsset, setEachAsset] = useState([]);
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);
    const [empID, setEmployee] = useState("");
    const [assignAsset, setAssignAsset] = useState("");
    const [error,seterror] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:8070/assets/").then((res)=>{
            setAssets(res.data);
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
            setAssets(response);
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
        
        
    }
    const hideModalView = () =>
    {
        setShow2(false);
        setEachAsset("")
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
    const rowStyle={
        color:"white"
    }
    return (
        <div >
        
        <div className='container' >
        {/* dropdown must have scripts and link files to  work properly. there are in index.html file  */}
        <div style={{ display:"flex",flexDirection:'row',justifyContent:"space-between" }}>
            <div className="dropdown" style={{ marginTop:5}}>
                <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Status
                </button>
                <div className="dropdown-menu" labelled="dropdownMenu2">
                <button className="dropdown-item" type="button" onClick={()=>{handleSearch("Available")}}>Available</button>
                <button className="dropdown-item" type="button" onClick={()=>{handleSearch("Non-Available")}}>Non-Available</button>
                <button className="dropdown-item" type="button" onClick={()=>{handleSearch("All")}}>All</button>
                </div>
            </div>
            <div className="dropdown" style={{ marginTop:5 }}>
                <button className="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
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
        
        
        
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Asset ID</th>
                        <th scope="col">Category</th>
                        <th scope="col">Model</th>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {assets.map(asset=>
                    
                    <tbody key={asset._id} style={{ color:"white" }}>
                        {/* <tr style={asset.status==='Fault'?{backgroundColor:'red'}:{backgroundColor:'blue'}}> */}
                        <tr style={asset.status==='Fault'?{background: "linear-gradient(#f54242, #f56f42)"}:{background: "linear-gradient(#7242f5, #426ff5)"}}>
                        
                        <th scope="row" style={rowStyle}>{asset.assetID}</th>
                        <td style={rowStyle}>{asset.assetCategory}</td>
                        <td style={rowStyle}>{asset.model}</td>
                        <td style={rowStyle}>{asset.serialNumber}</td>
                        <td style={rowStyle}>{asset.status}</td>
                        {asset.status === 'Available'?
                            (<td>
                                <button className='btn btn-primary announce' onClick={()=>{showModal();setAssignAsset(asset._id);}}>Assign</button>
                                <button className='btn btn-danger' onClick={()=>createFault(asset._id)} style={{ marginLeft:"5px" }}>Fault</button>
                                <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>View</button>
                            </td>)

                            :asset.status === 'Fault'?
                            (<td>
                                <button className='btn btn-danger' onClick={()=>releaseFault(asset._id)}>Release Fault</button>
                                <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>View</button>
                            </td>):
                            (<td>
                                <button className='btn btn-primary announce' onClick={()=>unassign(asset._id)}>Un-Assign</button>
                                <button className='btn btn-danger' onClick={()=>createFault(asset._id)} style={{ marginLeft:"5px" }}>Fault</button>
                                <button className='btn btn-success' onClick={()=>{ShowModalView(asset._id)}} style={{ marginLeft:"5px" }}>View</button>
                            </td>)
                        }
                        
                        </tr>
                    
                    </tbody>
                    
                    )}
                </table>
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


            {/* modal for view asset */}

            <Modal show={show2} handleClose={hideModalView}>
            <div className='container'>
            
            <form id="form">
                <div className="form-group">
                    <h3>Asset ID
                    <span className="badge badge-secondary" style={{ color:"blue" }}>{eachAsset.assetID}</span></h3>
                    <h3>Asset Category
                    <span className="badge badge-secondary" style={{ color:"blue" }}>{eachAsset.assetCategory}</span></h3>
                    <h3>Model
                    <span className="badge badge-secondary" style={{ color:"blue" }}>{eachAsset.model}</span></h3>
                    <h3>Serial Number
                    <span className="badge badge-secondary" style={{ color:"blue" }}>{eachAsset.serialNumber}</span></h3>
                    <h3>Status
                    <span className="badge badge-secondary" style={{ color:"blue" }}>{eachAsset.status}</span></h3>
                </div><br/>
                
                
                
            </form>

            </div>
            </Modal>

            {/* modal end  */}
        </div>
        </div>                
        
    );

    
}




export default ViewAsset;