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
        
         <div className="  h-[50%] w-[80%] border-dashed  border-2 border-slate-500/50 rounded-lg  m-[20px] bg-[#f6f9ff]">
            <div className="">
                <img  className=" h-[60px] w-[120px]"src={uploadicon} alt="cloud-upload-icon"></img>
                <p className="text-slate-400  font-medium text-[14px] font-sans"> Drag & Drop your files here</p>
                <p className="text-[#929ebf] font-semibold text-[15px] font-sans"> OR</p>
                {/* <button className="h-[50px] w-[30px] bg-[#587c6] text-white rounded">Browse Files</button> */}
                <button className=" w-[130px] bg-[#0867d2] text-white p-1 rounded-md  text-base">Browse Files</button>
            </div>
        
         </div>


         


        </div>
    
        </>

    )    
}
export default Upload;