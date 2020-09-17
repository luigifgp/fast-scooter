import React from 'react';
import Modal from "react-bootstrap/Modal";
import DragDrop from './DragDrop-compont/DragDrop';

import './upload.styles.scss';

class UploadFile extends React.Component {
constructor(props){
    super(props);

    this.state = {
        show: true,
        file: ''
    }

}
    showModal = () => {
        if (this.props.Active)
    this.setState((state) => ({
      show: !state.show,
    }));
    }
    handleClose = () => {
        this.setState((state) => ({
      show: !state.show,
    }));
}


    render(){
        
  return (
    <div className="box">
      <Modal
        size="lg"
        show={this.state.show}
        onHide={this.handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <p className="upload-title">Upload your file</p>
        </Modal.Header>
        <Modal.Body>
          <DragDrop />
        </Modal.Body>
        <div className="button-upload">
          <button className="buttonUpload btN1 " onClick={this.handleClose}>
            Cancel
          </button>
          <button className="buttonUpload btN2 " onClick={this.handleClose}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
} 

}

export default UploadFile;