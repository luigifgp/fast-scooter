   import React, { useState, useEffect, useRef } from "react";
   import ProgressBar from "react-bootstrap/ProgressBar";

const UploadedDone = ({currentFile, progress}) => {
    console.log(currentFile, progress);
   return (
     <div className="files-preview-container ip-scrollbar">
       {progress === 100 ? (
         <div className="file">
           <img
             className="imagen-uploading"
             src="image/donefile.jpeg"
             alt="img-data"
           />
           <p className="successFile-name">Successfull Uploaded.</p>
         </div>
       ) : (
         <div className="file">
           <img
             className="imagen-uploading"
             src="image/uploading.jpeg"
             alt="img-data"
           />
           <p className="file-name">Uploading...</p>
           <div className="containerr">
             <span className="progress-bar"></span>
           </div>
           <ProgressBar
             className="barProgress"
             now={progress}
             label={`${100}%`}
             srOnly
           />
         </div>

         
       )}
     </div>
   );
}

export default UploadedDone;