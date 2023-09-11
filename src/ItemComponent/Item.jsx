import  React from "react";
import { useEffect } from "react";
import { useState } from "react";
import storageService from "../firebaseService";
import { ref as storageRef, uploadBytesResumable, getDownloadURL} from "firebase/storage";


const Item =(props)=>{
    const[fileType, setFileType] = useState("");
    const[percent, setPercent] = useState(0);
    const[hasFailed, setHasFailed] = useState(false);
    const[uploaded, setUploaded] = useState(false);

    const[downloadURL, setDownloadURL] = useState("");
    
    useEffect(() => {
        setHasFailed(false);
        if(props.file) {
            const fileParts = props.file.name.split(".");
            setFileType(fileParts[fileParts.length-1]);
            if(!uploaded){
                uploadFile();
            }
 
        }
    },[]);


    const uploadFile = () => {
        setHasFailed(false);
        console.log("Starting upload");
        const firebaseRef = storageRef(storageService, `/files/${props.file.name}`);
       const uploadTask = uploadBytesResumable(firebaseRef, props.file);
       
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                console.log("percent: "+percent);
                setPercent(percent);
            },
            (err) => {setHasFailed(true); console.log(err);},
            () => {
                // download url
                console.log("Upload Complete");
                setUploaded(true);
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url); setDownloadURL(url);
                });
            }
        ); 
    }

   

    return(
        <>
            <div  className="h-[50px] w-[85%] bg-white flex justify-between items-center p-2 ">
              <div className="w-[12%] h-[30px] bg-black text-white text-sm">
                {fileType}
              </div>
              <div className=" w-[65%] flex flex-col">
                <div className="flex justify-between mb-[2px]">
                <span className=" text-[11px]">{props.file.name}</span>
                {!uploaded && <span className=" text-[11px]">{percent + "%"}</span>}
                </div>
                {!hasFailed && !uploaded && <progress className="progress progress-primary h-1 lg:w-48 md:w-36 sm:24" value={percent} max="100"></progress>}
                {hasFailed && <span className="text-[10px] text-red-500">Failed</span>}
                {uploaded && !hasFailed && <a href={downloadURL} className="text-[10px] text-cyan-600">Download</a>}
              </div>
                <div className="w-[12%] h-full flex justify-end items-center text-green-500">
              {!uploaded && !hasFailed && <button className="bg-zinc-300 hover:bg-zinc-400 rounded-full h-4 w-4 flex justify-center items-center p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>}
                { !uploaded && hasFailed && <span className="text-[12px] font-bold text-teal-500 hover:cursor-pointer" onClick={uploadFile}>Retry</span>}

                {uploaded && !hasFailed && <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}

      
                </div>

            </div>


        
        </>


    )
 
}
export default Item;