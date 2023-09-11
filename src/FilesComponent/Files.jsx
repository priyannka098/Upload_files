import  React from "react";
import { useState } from "react";
import Item from "../ItemComponent/Item";

const Files =()=>{
    const[filesList, setFilesList] = useState(["file1.pdf","file2.txt","file3.abc.ydh.gif"]);

    return(
        <>
        <div className=" w-[30%] h-[10%] bg-white">
           { filesList.map((value,index) =>{
               return <Item file={value}/>
            }
            )}
        </div>
        </>
    )
 
}
export default Files;