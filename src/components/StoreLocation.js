import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import '../css/PDP.css';
import 'leaflet/dist/leaflet.css';
import markerCustom from '../assets/images/doner-kebab.svg'

const StoreLocation = ({lat,lon}) => {
  console.log(lon);
  const icon = new Icon({
  iconUrl: markerCustom,
  iconSize: [35, 35]
});
  return (
    <div>
    <MapContainer center={[lon, lat]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lon, lat]} icon={icon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default StoreLocation;
