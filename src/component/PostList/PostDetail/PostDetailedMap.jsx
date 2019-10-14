import React from 'react'
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';


const Marker = () => <Icon name='marker'  size='big' color='red' />;

const PostDetailedMap = ({lat, lng}) => {
        const zoom = 10;
    return (
        <Segment attached='bottom' style={{padding: 0}}> 
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyBcYyGUKeYzFKW5HsKt8sTnNvPVPuGTLJc'}}
                defaultCenter={{lat,lng}}
                defaultZoom={zoom}
                >
                <Marker
                    // lat={59.955413}
                    // lng={30.337844}
                    lat={lat}
                    lng={lng}
                    
                />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}

export default PostDetailedMap
