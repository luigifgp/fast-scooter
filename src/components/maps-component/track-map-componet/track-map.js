import React from "react";
import { Map, TileLayer, Marker, Popup, Tooltip, Polyline} from "react-leaflet";
import axios from 'axios';
import { Icon } from "leaflet";
import Control from "react-leaflet-control";

const URL = "http://localhost:5000/scooterdata/api/";

export const icon = new Icon({
  iconUrl: "/img/mech.svg",
  iconSize: [25, 25]
});

class TrackMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      scooter: {},
      route: {},
      lat: 51.315,
      lng: -0.09,
      zoom: 13,
      positions:  []
    };
  }
    componentDidMount() {
      axios
        .get(URL + this.props.ScooterData)
        .then((found) => {
          
          this.setState({ scooter: [found.data] });
          console.log(found.data)

          this.setState({ route: found.data.route });

         const posi = this.state.route.map(routes =>(
             [routes.lat, routes.lng] 
          ))

          this.setState({positions: posi})
          console.log(this.state.positions[0])
        })
        .catch((err) => {
          console.log(err);
        })};


  zoomOut = () => {
    const map = this.mapRef.current;
    if (map != null) {
      map.leafletElement.zoomOut();
    }
  };
  zoomOut() {
    alert("zoomOut");
    window.map = this.map;
    this.map.setZoom(0);
    //this.setState({ ...this.state, zoom: this.state.zoom - 1 });
  }
  reload() {
    window.location.reload();
  }

  renderPositions(positions) {
    return (
      <>
        <Polyline color="#48C9B0" positions={positions} />
       
      </>
    );
  }
  render() {
    const center = this.state.positions[0];
    const positions = this.state.positions;
 
   
    return (
      <Map
        ref={this.mapRef}
        onContextmenu={() => this.zoomOut()}
        center={center}
        zoom={this.state.zoom}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Control position="topleft">
          <div
            className="map-reload"
            style={{
              fontweight: "bold",
            }}
          >
            <div>
              <button
                className="reload-button"
                value="Reload Page"
                onClick={this.reload}>
                Reload 
              </button>
            </div>
          </div>
        </Control>
        <Marker position={center} icon={icon}>
          <Popup>
            <b>lat:</b> asd <br />
            <b>lng:</b> zd <br />
          </Popup>
          <Tooltip direction="auto" offset={[0, 10]} opacity={1}>
            toolTip
          </Tooltip>
        </Marker>
        {this.renderPositions(positions)}
      </Map>
    );
  }
}

export default TrackMap;