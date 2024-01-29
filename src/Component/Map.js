import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 36.8356734,
      lng: 10.2389377,
        },
    zoom: 19
  };

  return (
   
    <div style={{ height: '500px', width: '500px'  }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={36.835502}
          lng={ 10.238900}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}