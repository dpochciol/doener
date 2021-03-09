import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png";


const Map = () => {
  const arr = [1, 2, 3]
  return (
    <MapContainer center={[52.520008, 13.404954]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {arr.map(item => (
        <Marker position={[52.520008 + item, 13.404954 + item]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>))}
    </MapContainer>
  );
};

export default Map;
