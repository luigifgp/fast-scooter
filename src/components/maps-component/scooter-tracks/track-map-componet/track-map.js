import React, {Component} from 'react';
import LeafletReactTrackPlayer from "./laeflet-react-track-player";
import demo from "./scooter";
import { Map, TileLayer } from "react-leaflet";
import './display-map-styles.scss';
import axios from "axios";

const URL = "http://localhost:5000/scooterdata/api";

class TrackMap extends Component {
  state = {
    lat: 47.445745,
    lng: 40.272891666666666,
    zoom: 15,
    type: "time",
    demo: demo,
    show: true,
    incidents: ""
  };

  async componentDidMount() {
    const res = await axios.get(URL);
    this.setState({ incidents: res.data });
    console.log(res.data);
  }

  render() {

    const position = [demo[demo.length - 1].lat, demo[demo.length - 1].lng];
    return (
      <div className="leaflet-container">
        <Map center={position} zoom={this.state.zoom}>
          <LeafletReactTrackPlayer
            track={this.state.demo}
            optionMultyIdxFn={function (p) {
              return p.status;
            }}
            optionsMulty={[
              { color: "#b1b1b1" },
              { color: "#06a9f5" },
              { color: "#202020" },
              { color: "#D10B41" },
              { color: "#78c800" },
            ]}
            useControl={true}
            progressFormat={this.state.type}
            customMarker={true}
            defaultSpeed={1000}
            streamData={false}
            changeCourseCustomMarker={true}
            iconCustomMarker={"/img/mech.svg"}
          />
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}


export default TrackMap;