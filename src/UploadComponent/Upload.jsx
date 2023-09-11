import React from "react";
import uploadicon from "../Images/uploadicon.svg";
import Item from "../ItemComponent/Item";
import { useState } from "react";

const Upload =()=>{

    const[files, setFiles] = useState([]);

    const handleFiles = (e) => {
        console.log(e.target.files);
        setFiles(e.target.files);
    }

    return(
        <>
        <div className="w-[30%] bg-[white] py-4 rounded-md flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <span className="flex justify-center items-center font-semibold text-[16px] text-[#69779b] mb-[2px]">UPLOAD FILES
          </span>
         <div className="text-sm w-[80%] break-normal text-[#929ebf] leading-4 text-center">Upload documents you want to share with your team.</div>
        
        </div>
        
         <div className="w-[80%] border-dashed p-4  border-2 border-slate-500/50 rounded-lg  m-[20px] bg-[#f6f9ff]">
            <div className="flex justify-center items-center flex-col">
                <img  className=" h-[40px] w-[80px]"src={uploadicon} alt="cloud-upload-icon"></img>
                <p className="text-slate-400  font-medium text-[12px] font-sans"> Drag & Drop your files here</p>
                <p className="text-[#929ebf] font-semibold text-[12px] font-sans"> OR</p>
                {/* <button className="h-[50px] w-[30px] bg-[#587c6] text-white rounded">Browse Files</button> */}
                <label htmlFor="fileUpload">
                    <button className=" w-[110px] bg-[#0867d2] text-white p-1 text-[11px] rounded-md btn btn-xs mt-2 ">Browse Files</button>
                </label>
                <input type="file" id="fileUpload" multiple onChange={handleFiles} style={{"display":"none"}}/>
               
            </div>
         </div>
      
        

        </div>
    
    
        </>

    )    
}
export default Upload;