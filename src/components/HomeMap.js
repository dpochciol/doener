import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerCustom from "../assets/images/doner-kebab.svg";
import "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";

const Map = ({ values }) => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],
  });
  console.log(values);
  return (
    <MapContainer
      center={[52.520008, 13.404954]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {values &&
        values.map((markerlocation) => (
          <Marker
            position={[
              markerlocation.fields.location.lat,
              markerlocation.fields.location.lon,
            ]}
            icon={icon}
          >
            <Popup>
              <Link to="/community">{markerlocation.fields.storename}</Link>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;
