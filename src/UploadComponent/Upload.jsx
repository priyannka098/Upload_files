import React from "react";
import uploadicon from "../Images/uploadicon.svg";
import { useContext } from "react";
import { DataContext } from "../Context";
import { useRef } from "react";

const Upload =()=>{

const{files,setFiles}=useContext(DataContext);

const hiddenFileInput = useRef(null);
const drop = useRef(null);

    const handleFiles = (e) => {
        console.log(e.target.files);
        setFiles([...e.target.files]);
    }

    const uploadClick = (e) => {
        setFiles([]);
       hiddenFileInput.current.click();
    }

    React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
      
        return () => {
          drop.current.removeEventListener('dragover', handleDragOver);
          drop.current.removeEventListener('drop', handleDrop);
        };
      }, []);
      
      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {files} = e.dataTransfer;

        if (files && files.length) {
            setFiles([...files]);
        }
      };

    return(
        <>
        <div className=" w-[50%] md:w-[30%] bg-[white] pt-4 rounded-md flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <span className="flex justify-center items-center font-semibold text-[12px] md:text-[16px] text-[#69779b] mb-[2px]">UPLOAD FILES
          </span>
         <div className="text-xs md:text-sm w-[80%] break-normal text-[#929ebf] leading-4 text-center">Upload documents you want to share with your team.</div>
        
        </div>
        
         <div ref={drop} className="w-[80%] border-dashed p-4  border-2 border-slate-500/50 rounded-lg  m-[20px] bg-[#f6f9ff]">
            <div className="flex justify-center items-center flex-col">
                <img  className=" h-[40px] w-[80px]"src={uploadicon} alt="cloud-upload-icon"></img>
                <p className="text-slate-400  font-medium text-[12px] font-sans text-center"> Drag & Drop your files here</p>
                <p className="text-[#929ebf] font-semibold text-[12px] font-sans"> OR</p>
                {/* <button className="h-[50px] w-[30px] bg-[#587c6] text-white rounded">Browse Files</button> */}
            
                    <button onClick={uploadClick} className=" w-[110px] bg-[#0867d2] text-white p-1 text-[11px] rounded-md btn btn-xs mt-2 ">Browse Files</button>
                
                <input type="file" id="fileUpload" className="hidden" multiple onChange={handleFiles} ref={hiddenFileInput}/>
               
            </div>
         </div>
      
        

        </div>
    
    
        </>

    )    
}
export default Upload;