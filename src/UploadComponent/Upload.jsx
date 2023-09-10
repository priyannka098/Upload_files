import React from "react";
import uploadicon from "../Images/uploadicon.svg";

const Upload =()=>{

    return(
        <>
        <div className="h-[80%] w-[40%] bg-[white]  rounded-md ">
        <div className="flex justify-center items-center">
          <p><span className="flex justify-center items-center font-semibold text-[16px] text-[#69779b] mt-[30px] mb-[2px]">UPLOAD FILES</span>
         <span className="text-sm text-[#929ebf]">Upload documents you want to share</span>
         <span className="  mb-[10px] flex justify-center items-center text-sm text-[#929ebf]"> with your team.</span>
          </p>
          </div>
        
         <div className="  h-[50%] w-[80%] border-dashed  border-2 border-slate-500/50 rounded-lg m-[20px] bg-[#f6f9ff]">
            <div className="">
                <img  className=" h-[60px] w-[100px]"src={uploadicon} alt="cloud-upload-icon"></img>
                <p> Drag & Drop your files here</p>
                <p> OR</p>
                <button> Browse Files</button>
            </div>
        
         </div>


         


        </div>
    
        </>

    )    
}
export default Upload;