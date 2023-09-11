import React from "react";
import Upload from "../UploadComponent/Upload";
import Files from "../FilesComponent/Files";
import {DataContext} from "../Context";
import { useState } from "react";

const Wrapper =()=>{
    const[files,setFiles]=useState([]);

 return(
    <>
    <div className="h-screen w-screen bg-[blue] flex flex-col justify-center items-center">
    <DataContext.Provider value={{files,setFiles}}> 
    <Upload/>
    <Files/>
    </DataContext.Provider>
    </div>
    </>
     )
}
export default Wrapper;
