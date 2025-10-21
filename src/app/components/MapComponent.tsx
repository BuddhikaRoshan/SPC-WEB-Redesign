"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Next.js
const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const MapComponent = ({ locations, activeOutlet, setActiveOutlet }: any) => {
    const mapRef = useRef<L.Map | null>(null);
    const markersRef = useRef<L.Marker[]>([]);

    useEffect(() => {
        // Only run on client-side
        if (typeof window === "undefined") return;

        // Initialize map
        if (!mapRef.current && locations.length > 0) {
            const map = L.map("map").setView(
                [locations[0].position[0], locations[0].position[1]],
                12
            );

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            mapRef.current = map;

            // Add markers
            markersRef.current = locations.map((location: any, index: number) => {
                const marker = L.marker(
                    [location.position[0], location.position[1]],
                    { icon: defaultIcon }
                )
                    .addTo(map)
                    .bindPopup(`
            <div class="p-2">
              <h3 class="font-bold">${location.name}</h3>
              <p class="text-sm">${location.address}</p>
              <p class="text-sm">${location.phone}</p>
              <a href="mailto:${location.email}" class="text-blue-600 text-sm">${location.email}</a>
            </div>
          `);

                marker.on("click", () => {
                    setActiveOutlet(index);
                });

                return marker;
            });
        }

        // Center map on active outlet
        if (activeOutlet !== null && mapRef.current) {
            const location = locations[activeOutlet];
            mapRef.current.setView(
                [location.position[0], location.position[1]],
                15
            );
            markersRef.current[activeOutlet]?.openPopup();
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                markersRef.current = [];
            }
        };
    }, [locations, activeOutlet, setActiveOutlet]);

    return <div id="map" style={{ height: "100%", width: "100%" }} />;
};

export default MapComponent;