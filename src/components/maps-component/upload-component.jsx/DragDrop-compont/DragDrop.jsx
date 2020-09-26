
import React, { useState, useEffect, useRef } from "react";
import './DragDrop-styles.scss';
import UploadService from './Service/FileUploadService';
import UploadedDone from './successfull-uploaded/uploadedDone';

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);
  const refInput = useRef();

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

 const selectFile = async(event) => {

    const file = event.target.files;

    setSelectedFiles(file);
    console.log(file);

 
 }
 
  const upload = () => {
     let currentFile =  selectedFiles[0];
/// for fix if the file is named "scooter" have to give error
      setProgress(0);
      setCurrentFile(currentFile);

      UploadService.upload(currentFile, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      })
        .then((response) => {
          setMessage(response.data.message);
          return UploadService.getFiles();
        })
        .then((files) => {
          setFileInfos(files.data);
        })
        .catch(() => {
          setProgress(0);
          setMessage("Could not upload the file!");
          alert(message);
          setCurrentFile(undefined);
        });

      setSelectedFiles(undefined);
    };
 console.log(currentFile, message);

 if (selectedFiles) {
   upload();
 }
 
 
    return (
      <div>
        {currentFile ? (
          <UploadedDone progress={progress} currentFile={currentFile} />
        ) : (
          <div
            className="inner-container"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="draggable-container">
              <input
                type="file"
                id="file-browser-input"
                // fix the ref to get the button show the library for upload
                ref={(input) => refInput}
                name="file-browser-input"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={selectFile}
                onChange={selectFile}
              />

              <div className="helper-text">
                <img
                  className="upload-image-logo"
                  src="image/upload-logo.jpeg"
                  alt="upload-logo"
                ></img>
                <p>Drag or Drop Your File Here</p>
              </div>
              <div className="file-browser-container">
                <button
                  className="browse-file"
                  disabled={!selectedFiles}
                  onClick={console.log("hello")}
                >
                  Browse File
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );

  }

export default UploadFiles;