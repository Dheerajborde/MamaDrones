import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface DroneCenter {
  name: {
    en: string;
    mr: string;
  };
  district: {
    en: string;
    mr: string;
  };
  coordinates: [number, number];
  address: string;
  phone: string;
  locationLink: string;
}

const droneCenters: DroneCenter[] = [
  {
    name: { en: "Mangesh Kadam", mr: "मंगेश कदम" },
    district: { en: "Beed", mr: "बीड" },
    coordinates: [75.757, 18.9912],
    address: "droneBuddy Service Centre, Pimpergavhan Road, Ambika Chowk, Beed-431127",
    phone: "9527311651",
    locationLink: "https://maps.app.goo.gl/wpEounubZacibQVV8?g_st=aw",
  },
  {
    name: { en: "Dheeraj Borde", mr: "धीरज बोरडे" },
    district: { en: "Chhatrapati Sambhajinagar", mr: "छत्रपती संभाजीनगर" },
    coordinates: [75.370941, 19.888174],
    address: "STPI, T 17, opp. Garware Stadium, MIDC, Chilkalthana, Chhatrapati Sambhajinagar, Maharashtra 431006",
    phone: "9834512803",
    locationLink: "https://maps.app.goo.gl/LkqQhU25sfg2jdzP6?g_st=aw",
  },
  {
    name: { en: "Vijay Shankar Jadhav (Patil)", mr: "विजय शंकर जाधव (पाटील)" },
    district: { en: "Satara", mr: "सातारा" },
    coordinates: [74.0042, 17.6678],
    address: "Shounak Agro Agency, Atit, Satara District, Maharashtra",
    phone: "9975758649 / 7588684493",
    locationLink: "https://maps.app.goo.gl/k213ggsS5J1K6GGV8?g_st=aw",
  },
  {
    name: { en: "Shivam Madhukar Tale", mr: "शिवम मधुकर तळे" },
    district: { en: "Buldhana", mr: "बुलढाणा" },
    coordinates: [76.5345, 21.0514],
    address: "Shiv Kisaan Drone, Jalgaon Jamod, Buldhana, Maharashtra",
    phone: "8308720010",
    locationLink: "https://maps.app.goo.gl/1TnFcpYK3TcM2ifo9?g_st=aw",
  },
  {
    name: { en: "Pavan Vitthal Dahiphale", mr: "पवन विठ्ठल दहीफळे" },
    district: { en: "Jalna", mr: "जालना" },
    coordinates: [76.4603, 19.4424],
    address: "Pimprakhad Bk, Taluka Ghansavngi, District Jalna, Maharashtra",
    phone: "7378538806",
    locationLink: "https://maps.app.goo.gl/SzgU8ib2XgLZnX2P9?g_st=aw",
  },
  {
    name: { en: "Sumit Thakare", mr: "सुमित ठकारे" },
    district: { en: "Yavatmal", mr: "यवतमाळ" },
    coordinates: [77.7786, 20.2996],
    address: "Main Road, Bori (Arab), Taluka Darwha, District Yavatmal, कृषी ड्रोन फवारणी व विक्री सेवा",
    phone: "9096826031",
    locationLink: "https://maps.app.goo.gl/Rh25DtjLWBe1CGxn8?g_st=aw",
  },
  {
    name: { en: "Sanket Tapkir", mr: "संकल्प टपकीर" },
    district: { en: "Ahilyanagar", mr: "अहिल्यानगर" },
    coordinates: [74.4066, 18.5018],
    address: "118, Kedgoan Industrial Area, Kedgoan, Ahilyanagar, 414005",
    phone: "+91 96998 25051",
    locationLink: "https://maps.app.goo.gl/7w9d2vFE71YsGKLJA?g_st=com.google.maps.preview.copy",
  },
  {
    name: { en: "Gunwant Anil Shelar", mr: "गुणवंत अनिल शेलार" },
    district: { en: "Jalgaon, Dhule", mr: "जळगाव, धुळे" },
    coordinates: [74.996, 20.464],
    address: "Plot no. 15, Behind JJ Anna Tower, Malegaon Naka, Chalisgaon, Jalgaon, Maharashtra-424101",
    phone: "9284085741",
    locationLink: "https://maps.app.goo.gl/h9vHkWLtoP54SdDd7",
  },
];

const translations = {
  en: {
    dronebuddyCenters: "Mama Drones Centers",
    selectLocation: "Select a Location",
    information: "Information",
    seeOnMap: "View on Map",
    district: "District",
    address: "Address",
    phone: "Phone",
  },
  mr: {
    dronebuddyCenters: "मामा ड्रोन्स केंद्रे",
    selectLocation: "स्थान निवडा",
    information: "माहिती",
    seeOnMap: "नकाशावर पहा",
    district: "जिल्हा",
    address: "पत्ता",
    phone: "फोन",
  },
};

interface DronebuddyCentersProps {
  language: "en" | "mr";
}

const DronebuddyCenters: React.FC<DronebuddyCentersProps> = ({ language }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<string>("");

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    if (!mapboxToken) {
      console.error("Mapbox token is missing.");
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    const initialMap = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.5946, 18.975],
      zoom: 6,
    });

    initialMap.on("load", () => {
      setMap(initialMap);

      droneCenters.forEach((center) => {
        const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(`
          <div style="font-family: Arial, sans-serif; padding: 10px;">
            <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">${center.name[language]}</h3>
            <p><strong>${translations[language].district}:</strong> ${center.district[language]}</p>
            <p><strong>${translations[language].address}:</strong> ${center.address}</p>
            <p><strong>${translations[language].phone}:</strong> 
              <a href="tel:${center.phone}" style="color: #007bff; text-decoration: none;">${center.phone}</a>
            </p>
            ${
              center.locationLink
                ? `<p><a href="${center.locationLink}" target="_blank" style="color: #007bff; text-decoration: none;">${translations[language].seeOnMap}</a></p>`
                : ""
            }
          </div>
        `);

        new mapboxgl.Marker({ color: "#FF0000" })
          .setLngLat(center.coordinates)
          .setPopup(popup)
          .addTo(initialMap);
      });
    });

    return () => {
      initialMap.remove();
    };
  }, [mapboxToken, language]);

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locationName = event.target.value;
    setSelectedLocation(locationName);
    const location = droneCenters.find((center) => center.district[language] === locationName);
    if (location && map) {
      const [lng, lat] = location.coordinates;
      map.flyTo({ center: [lng, lat], zoom: 12, essential: true });
      setSelectedAddress(`${location.name[language]} - ${location.address} - ${location.phone}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-auto p-4 bg-gray-100 gap-4 w-full">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-green-600 mb-4 text-center">
          {translations[language].dronebuddyCenters}
        </h2>
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="p-2 border rounded-lg text-base outline-none focus:ring-2 focus:ring-green-500 mb-4 w-60"
        >
          <option value="">{translations[language].selectLocation}...</option>
          {droneCenters.map((center, index) => (
            <option key={index} value={center.district[language]}>
              {center.district[language]}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-1/2 relative p-4">
        <div ref={mapContainer} className="w-full h-[500px] rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default DronebuddyCenters;
