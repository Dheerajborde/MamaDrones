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
    name: { en: "Dheeraj Subhash Borde", mr: "धीरज सुभाष बोरडे" },
    district: { en: "Chhatrapati Sambhajinagar", mr: "छत्रपती संभाजीनगर" },
    coordinates: [75.370941, 19.888174],
    address: "MHSTPI, T 17, opp. Garware Stadium, MIDC, Chilkalthana, Chhatrapati Sambhajinagar, Maharashtra 431006",
    phone: "9322418319 / 8412891141",
    locationLink: "https://maps.app.goo.gl/ycgXHpRvazEem8dj6",
  },
  {
    name: { en: "Nikhil Khetmalas", mr: "निखिल खेतमलास" },
    district: { en: "Ahilyanagar", mr: "अहिल्यानगर" },
    coordinates: [74.65, 18.95], // Approximate
    address: "Khetalas krishi kendra, Ahilyanagar - Solapur Rd, Mirajgaon, Maharashtra 414401",
    phone: "8208699869 / 9168908927",
    locationLink: "https://maps.app.goo.gl/U8N9K6rAtz9T2Got6",
  },
  {
    name: { en: "ManikPrabhu Sutar", mr: "माणिकप्रभु सुतार" },
    district: { en: "Solapur", mr: "सोलापूर" },
    coordinates: [75.92, 17.68], // Approximate
    address: "Beleshwar krishi seva kendra, A/P Belati, North, Solapur, Maharashtra 413002",
    phone: "9011850055 / 9637777955",
    locationLink: "https://maps.app.goo.gl/iPxqWdEAQLwyRqYp7",
  },
  {
    name: { en: "Prajwal Gawate", mr: "प्रज्वल गवते" },
    district: { en: "Wardha", mr: "वर्धा" },
    coordinates: [78.60, 20.75],
    address: "Mama Drones, PJX9+4RQ, Snehalnagar, Nalwadi, Maharashtra 442001",
    phone: "7020564675",
    locationLink: "https://maps.app.goo.gl/7gXxwaHdNuuja1KQ6",
  },
  {
    name: { en: "Devendra Katre", mr: "देवेंद्र कात्रे" },
    district: { en: "Gondiya", mr: "गोंदिया" },
    coordinates: [80.19, 21.46], // Approximate
    address: "Aamgaon, Gondiya, Maharashtra",
    phone: "9307288341",
    locationLink: "",
  },
  {
    name: { en: "Pandurang Tarange", mr: "पांडुरंग तरंगे" },
    district: { en: "Solapur", mr: "सोलापूर" },
    coordinates: [75.55, 18.05], // Approximate
    address: "4GCH+RQ4, Papnas, Maharashtra 413250",
    phone: "7083856999",
    locationLink: "https://maps.app.goo.gl/hVUH4c2UdnykYfMq7",
  },
  {
    name: { en: "Gunwant Anil Shelar", mr: "गुणवंत अनिल शेलार" },
    district: { en: "Jalgaon", mr: "जळगाव" },
    coordinates: [74.996, 20.464],
    address: "Plot no. 15, Behind JJ Anna Tower, Malegaon Naka, Chalisgaon, Jalgaon, Maharashtra-424101",
    phone: "9284085741",
    locationLink: "https://maps.app.goo.gl/V6oQJwhANFoVnGPHA",
  },
  {
    name: { en: "Vijay Shankar Jadhav", mr: "विजय शंकर जाधव" },
    district: { en: "Satara", mr: "सातारा" },
    coordinates: [74.0042, 17.6678],
    address: "Shounak Agro Agency, Atit, Satara District, Maharashtra",
    phone: "9975758649 / 7588684493",
    locationLink: "https://maps.app.goo.gl/szw5e3A1T3d8tvybA",
  },
  {
    name: { en: "Pradip Jagtap", mr: "प्रदीप जगताप" },
    district: { en: "Pune", mr: "पुणे" },
    coordinates: [74.0265, 18.4866],
    address: "Pune-Solapur Highway, Theur Phata, Maruti Nagar, Haveli Taluka, near Bank of Baroda, At-Post Kunjirwadi, Maharashtra 412201",
    phone: "8625941220",
    locationLink: "https://maps.app.goo.gl/6wEr8JqobGq4s7zDA",
  },
  {
    name: { en: "Pavan Vitthal Dahiphale", mr: "पवन विठ्ठल दहीफळे" },
    district: { en: "Jalna", mr: "जालना" },
    coordinates: [76.4603, 19.4424],
    address: "Pimparkhed Bk, Taluka Ghansawangi, District Jalna, Maharashtra",
    phone: "7378538806",
    locationLink: "https://maps.app.goo.gl/ZbKyvF7BJN1EriwbA",
  },
  {
    name: { en: "Kiranbhai Dahnjibhai Chaudahry", mr: "કિરણભાઈ ધનજીભાઈ ચૌધરી" },
    district: { en: "Banaskantha", mr: "બનાસકાંઠા" },
    coordinates: [71.75, 24.35], // Approximate for Tharad area
    address: "Village Karanpura, Taluka Tharad, District Banaskantha, Gujarat 385565",
    phone: "7874467466",
    locationLink: "https://maps.app.goo.gl/m2WW9U9BkDejhH7AA",
  },
  {
    name: { en: "Anand Meena", mr: "आनंद मीणा" },
    district: { en: "Raisen", mr: "रायसेन" },
    coordinates: [77.85, 23.35], // Approximate
    address: "Village Dhaniyakhedi, Post Tarawali, Tehsil Gairatganj, District Raisen, Madhya Pradesh 464551",
    phone: "9685377277",
    locationLink: "",
  },
  {
    name: { en: "Madhusudhan Yellala Reddy", mr: "మధుసూదన్ యెల్లాల రెడ్డి" },
    district: { en: "Vemulwada", mr: "వేములవాడ" },
    coordinates: [78.89, 18.42],
    address: "H No. B-4-65/1, Sai Nagar, Vemulawada, Telangana 505302, India",
    phone: "7675816363 / 9063637922",
    locationLink: "https://share.google/w3gmIkfttq0wCtt15",
  },
  {
    name: { en: "Krishna Moni", mr: "কৃষ্ণ মণি" },
    district: { en: "Bankura", mr: "বাঁকুড়া" },
    coordinates: [87.32, 23.25],
    address: "Opposite to rajapara mode, yellow color 2 storeyed building with black gate. Near Anchuri PHC, near poultry farm, Bankura, West Bengal 722102",
    phone: "9239532745",
    locationLink: "https://maps.app.goo.gl/MbqNKw6KcidxZGAF9",
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
