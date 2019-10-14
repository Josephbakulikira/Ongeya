import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker'  size='big' color='red' />;

class SimpleMap extends Component {
  static defaultProps = {
    // center: {
    //   lat: 59.95,
    //   lng: 30.33
    // },
    zoom: 11
  };

  render() {
      const {latlng} = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBcYyGUKeYzFKW5HsKt8sTnNvPVPuGTLJc'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            // lat={59.955413}
            // lng={30.337844}
            lat={latlng.lat}
            lng={latlng.log}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;