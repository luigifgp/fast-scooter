import React from 'react';
import LeafletReactTrackPlayer from "./laeflet-react-track-player";

import { Map, TileLayer } from "react-leaflet";
import './track-map-styles.scss';
import axios from "axios";

const URL = "http://localhost:5000/scooterdata/api/";

class TrackMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.445745,
      lng: 40.272891666666666,
      zoom: 15,
      type: "time",
      scooter: {},
      show: true,
      incidents: "",
      posiLat: [],
      posiLng: {}
    };
  }

  componentDidMount() {
    axios
      .get(URL + this.props.ScooterData)
      .then((found) => {
        this.setState({ scooter: found.data });
        console.log(found.data);

         const scooter = this.state.scooter.route;
         scooter &&
           this.state.scooter.route.forEach((dt) =>
             this.setState({ posiLat: [dt.lat, dt.lng] })
           );
            const { posiLat, posiLng } = this.state;
            console.log( posiLat);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  render() {
  const { posiLat, posiLng } = this.state;
  console.log( posiLat);
    const position = [posiLng];
    
     return (
      this.state.posiLat ?  null : <div className="leaflet-container">
        <Map center={position} zoom={this.state.zoom}>
          {/* <LeafletReactTrackPlayer
            track={this.state.scooter}
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
          /> */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>  
      </div>  
    );
  }
}


export default TrackMap;