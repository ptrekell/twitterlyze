import React, { Component } from 'react';
import { compose, withProps, withHandlers } from 'recompose';


//https://tomchentw.github.io/react-google-maps/#introduction
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

import mapStyle from './mapStyle.json';
import twitterIcon from './twitterIcon.svg';



import './Map.css';



const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDUQppaMAmd54CmBNqX2iBeXHQl4uasQ6s&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 40.5692, lng: -98.3321 }}
        defaultOptions={{ styles: mapStyle }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker.photo_id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    label={marker.label}  
                    icon={twitterIcon}               
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);




class Map extends Component {

    state = {
        markers: [
            {
                "photo_id": 27932,
                "longitude": -122.3321 ,
                "latitude": 46.662,
                "label": ""
 
            },
            // {
            //     "photo_id": 522084,
            //     "longitude": -122.3321 ,
            //     "latitude": 47.662,
            //     "label": ""
            // }
        ]
    }

    render() {
        return (
            <div className="Map">
                <MapWithAMarkerClusterer markers={this.state.markers} />
            </div>
        )
    }


}


export default Map;
