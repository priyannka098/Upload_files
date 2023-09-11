import  React from "react";
import Item from "../ItemComponent/Item";
import { DataContext } from "../Context";
import { useContext } from "react";

const Files =()=>{
    // const[filesList, setFilesList] = useState(["file1.pdf","file2.txt","file3.abc.ydh.gif"]);
    const{files,setFiles}=useContext(DataContext);

    return(
        <>
        <div className="bg-white  w-[50%] md:w-[30%] max-h-[35%] rounded-b-md px-2  ">
        {files.length>0 &&<div className="h-full overflow-auto flex flex-col items-center pb-4">
           { files.map((value,index) =>{
               return <Item file={value}/>
            }
            )}
        </div>}
        </div>
        </>
    )
 
}
export default Files;