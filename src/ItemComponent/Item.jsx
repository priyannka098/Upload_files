import  React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Item =(props)=>{
    const[fileType, setFileType] = useState("");
    
    useEffect(() => {
        if(props.file) {
            const fileParts = props.file.split(".");
            setFileType(fileParts[fileParts.length-1]);
        }
    },[]);


    return(
        <>
            <div  className="h-[40px]  bg-rose-200  flex justify-center items-center space-x-2 p-6 ">
              <div className="w-[10%] h-[30px] bg-black text-white">
                {fileType}
              </div>
              <div className=" w-[60%] flex flex-col">
                <span className=" text-[11px] mb-[4px]">{props.file}</span>
                <progress className="progress progress-accent h-1 w-48" value={0} max="100"></progress>
              </div>
        
              <button className="bg-zinc-300 hover:bg-zinc-400 rounded-full h-4 w-4 flex justify-center items-center p-0">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>


            </div>


        
        </>


    )
 
}
export default Item;