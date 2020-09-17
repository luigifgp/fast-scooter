import React from "react";
import DisplayMap from './map-display/Display-map';
import TrackMap from './track-map-componet/track-map';
import "./Maps-styles.scss";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import UploadFile from './upload-component.jsx/upload-compnt';

const URL = "http://localhost:5000/scooterdata/api/";

class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      dataScooter: "",
      change: true,
    };
  }

  handleData(data) {
    this.setState({
      dataScooter: data,
    });
    this.setState((state) => ({
      change: !state.change,
    }));
  }

  ShowUploadModal(){
    this.setState((state) => ({
      active: !state.active,
  }));
}
  
  uploadFile = (err, res) => {
    const data = new FormData();
    data.append("uploadfile", this.state.file);
    console.warn(this.state.file);

    axios
      .post(URL + "uploadfile", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.warn(res);
      });
  };
  render() {
    const dataScooter = this.state.dataScooter;
    console.log(dataScooter);

    return (
      <div className="map-background">
        <Button variant="primary" onClick={() => this.ShowUploadModal()}>
          Export
        </Button>

        {this.state.active ? null : <UploadFile  Active={this.state.active}/>}

        {this.state.change ? (
          <DisplayMap
            dataSc={{
              dataScooter: this.state.dataScooter,
              handleData: this.handleData.bind(this),
            }}
          />
        ) : (
          <TrackMap ScooterData={this.state.dataScooter} />
        )}
      </div>
    );
  }
}
export default  Maps;