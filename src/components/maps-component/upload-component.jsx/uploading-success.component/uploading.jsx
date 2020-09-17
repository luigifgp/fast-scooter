import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import { remove } from "react-icons-kit/fa/remove";
import { Icon } from "react-icons-kit";


export default class Uploading extends React.Component{
  render(){
       const counter = this.props.counter;
      return(      <div className="files-preview-container ip-scrollbar">
              {counter === 100 ? (<div className="file">
                  <img className="imagen-uploading" src="image/donefile.jpeg" alt="img-data" />
              <p className="successFile-name">Successfull Uploaded.</p>
              </div>
              ) : 
    <div className="file">
        <img className="imagen-uploading" src="image/uploading.jpeg" alt="img-data" />
        <p className="file-name">Uploading...</p>
        <div className="containerr">
            <span className="progress-bar"></span>
            <span
                className="remove-btn"
                      onClick={() => this.removeLoadedFile(document),console.log(counter) }
            >
                <Icon icon={remove} size={19} />
            </span>
        </div>
              <ProgressBar className="barProgress" now={counter} label={`${counter}%`} srOnly />
    </div>}
      
</div>
)}

}

 