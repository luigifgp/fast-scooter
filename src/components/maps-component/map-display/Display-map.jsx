
import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";

const URL = "http://localhost:5000/scooterdata/api";

export const icon = new Icon({
  iconUrl: "/img/mech.svg",
  iconSize: [25, 25]
});

class DisplayMap extends React.Component {
  constructor() {
    super();
    this.clickData = this.clickData.bind(this);
    this.state = {
      data: [],
      track: null,
      scooters: "",
    };
  }
 async clickData(id)  {
      this.setState({
        scooters: id,
      });

  await   this.props.dataSc.handleData(this.state.scooters);
  }

  componentDidMount() {
    axios
      .get(URL)
      .then((found) => {
        this.setState({ data: found.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const scooter = this.state.data;
    return (
      <Map center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {scooter.map((scooters) => (
          <Marker
            key={scooters._id}
            position={[
              scooters.currentPosition.lat,
              scooters.currentPosition.lng,
            ]}
            onClick={() => {
              this.setState({ track: scooters });
              this.clickData(scooters._id);
            }}
            icon={icon}
          />
        ))}

        {this.state.track && (
          <Popup
            position={[
              this.state.track.currentPosition.lat,
              this.state.track.currentPosition.lng,
            ]}
            onClose={() => {
              this.setState({ track: null });
            }}
          >
            <div>
              <h2>{this.state.track.date}</h2>
            </div>
          </Popup>
        )}
      </Map>
    );
  }
} 


export default DisplayMap;