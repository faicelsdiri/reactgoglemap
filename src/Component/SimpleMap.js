import React, { useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const center = { lat: 36.8356734, lng: 10.2389377 };
    const markerPosition = { lat: 36.835502, lng: 10.238900 };

    const map = new window.google.maps.Map(mapContainerRef.current, {
      center: center,
      zoom: 19,
    });

    // Marker
    const marker = new window.google.maps.Marker({
      position: markerPosition,
      map: map,
      title: "My Marker",
    });

    // Street View
    const streetViewService = new window.google.maps.StreetViewService();
    streetViewService.getPanorama(
      { location: markerPosition, radius: 50 },
      (data, status) => {
        if (status === "OK") {
          const panorama = new window.google.maps.StreetViewPanorama(
            mapContainerRef.current,
            {
              position: data.location.latLng,
              pov: { heading: 100, pitch: 0 },
              zoom: 1,
            }
          );
          map.setStreetView(panorama);
        } else {
          console.error("Street View data not found for this location.");
        }
      }
    );
  }, []);

  const updatedDefaultProps = {
    center: {
      lat: 37.1234, // Updated latitude
      lng: 10.4567, // Updated longitude
    },
    zoom: 15, // Updated zoom level
  };

  return (
    <div style={{ height: "60vh", width: "100%" }} ref={mapContainerRef}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" }}
        defaultCenter={updatedDefaultProps.center}
        defaultZoom={updatedDefaultProps.zoom}
      >
        <AnyReactComponent
          lat={36.835502}
          lng={10.238900}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;