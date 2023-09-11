import React from "react";
import Upload from "../UploadComponent/Upload";
import Files from "../FilesComponent/Files";

const Wrapper =()=>{
 return(
    
    <div className="h-screen w-screen bg-[blue] flex flex-col justify-center items-center">
    <Upload/>
    <Files/>
    </div>

    )
}
export default Wrapper;