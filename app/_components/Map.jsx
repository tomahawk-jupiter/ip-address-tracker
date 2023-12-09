"use client";
import { useEffect } from "react";

const Map = ({ latitude, longitude }) => {
  useEffect(() => {
    const map = L.map("map", {
      zoomControl: false,
      maxZoom: 15,
      minZoom: 15,
    }).setView([latitude, longitude], 15);

    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);

    // Clean up function to remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return <div id="map"></div>;
};

export default Map;
