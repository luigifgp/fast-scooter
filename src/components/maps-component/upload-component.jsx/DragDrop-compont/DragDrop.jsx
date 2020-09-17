import React from 'react';
import { AnchorButton, Intent} from "@blueprintjs/core";
import './DragDrop-styles.scss';
import _ from "lodash";
import ReactDropzone from "react-dropzone";
import axios from 'axios';
import Uploading from '../uploading-success.component/uploading';

const URL = "http://localhost:5000/scooterdata/api/uploadfile";

export default class DragDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedFiles: [],
      document: "",
      icon: true,
      uploadPercentage: 0
      
    };
  }

  onFileLoad(e) {
 
    let data = new FormData();
    data.append("uploadfile");
    console.warn(this.state.document)
   
const file =  this.setState({ document: e.currentTarget.files[0]  });

console.log(file);

    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor((loaded * 100) / total)
        console.log( `${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100){
          this.setState({ uploadPercentage: percent})
          console.log(this.state.uploadPercentage)
        }
      }
    }

    axios.post(URL, data, options).then(res =>  {
      console.log(res)
      this.setState({uploadPercentage: 100}, () => {
        setTimeout(() => {
          this.setState({uploadPercentage : 0})
        },1000)
      })
    })
 }
  removeLoadedFile(file) {
    //Remove file from the State
    this.setState((prevState) => {
      let loadedFiles = prevState.loadedFiles;
      let newLoadedFiles = _.filter(loadedFiles, (ldFile) => {
        return ldFile !== file;
      });
      return {loadedFiles: newLoadedFiles};
    });
  }

  removeAllLoadedFile() {
    this.setState({loadedFiles: []});
  }

 

  onUpload() {
    const {document} = this.state;


    this.setState({ percent: +1 });
      //Simulate a REAL WEB SERVER DOING IMAGE UPLOADING
   
    
  }  
    moveBar()  {
     

    }
  render() {
    console.log(this.state.loadedFiles, this.state.document, this.state.uploadPercentage)
    return (
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
            name="file-browser-input"
            ref={(input) => (this.fileInput = input)}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={this.onFileLoad.bind(this)}
            onChange={this.onFileLoad.bind(this)}
          />
       
          {this.state.document ? <Uploading counter={this.state.uploadPercentage} /> : (
            <div>
              <div className="helper-text">
                <img
                  className="upload-image-logo"
                  src="image/upload-logo.jpeg"
                  alt="upload-logo"
                ></img>
                <p>Drag and Drop Your File Here</p>
              </div>
              <div className="file-browser-container">
                <AnchorButton
                  className="browse-file"
                  text="Browse File"
                  intent={Intent.PRIMARY}
                  minimal={true}
                  onClick={() => this.fileInput.click()}
                />
              </div>
            </div>
          )}
          <div></div>
        </div>
      </div>
    );

  }

}