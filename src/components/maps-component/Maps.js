import React from "react";
import DisplayMap from './map-display/Display-map';
import TrackMap from './track-map-componet/track-map';

class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      dataScooter: "",
      change: true
    };
  }

  handleData(data) {
    this.setState({
      dataScooter: data,
    });
    this.setState((state) => ({
       change: !state.change
     }));
  }
  render() {
      const dataScooter = this.state.dataScooter;
      console.log(dataScooter);

    return (
        <div>
    { this.state.change ?  
    <DisplayMap 
    dataSc={
      {dataScooter: this.state.dataScooter,
      handleData:this.handleData.bind(this)}
      }    /> :
    
    
    <TrackMap 
     ScooterData={this.state.dataScooter}   
    />
        
    }
    </div>
    )};
  
}
export default  Maps;