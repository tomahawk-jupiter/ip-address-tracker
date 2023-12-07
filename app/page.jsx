import React from "react";
import ArrowIcon from "./_components/ArrowIcon";
import DataField from "./_components/DataField";
import Map from "./_components/Map";

console.log("Testing...");
console.log({ env: process.env.NEXT_PUBLIC_API_KEY });
// REQUEST_EXAMPLE=`https://geo.ipify.org/api/v2/country?apiKey=${NEXT_PUBLIC_API_KEY}&ipAddress=8.8.8.8`

async function getLocationData(ipAddress) {
  if (ipAddress) {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`
    );
    return res.json();
  }
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.json();
}

export default async function Home() {
  // const locationData = await getLocationData();
  const locationData = {
    ip: "8.8.8.8",
    location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      lat: 37.40599,
      lng: -122.078514,
      postalCode: "94043",
      timezone: "-07:00",
      geonameId: 5375481,
    },
    domains: [
      "0d2.net",
      "003725.com",
      "0f6.b0094c.cn",
      "007515.com",
      "0guhi.jocose.cn",
    ],
    as: {
      asn: 15169,
      name: "Google LLC",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content",
    },
    isp: "Google LLC",
  };
  const { ip, location, isp } = locationData;
  const { city, region, postalCode, timezone, lat, lng } = location;

  const dataFields = [
    { label: "IP ADDRESS", value: ip },
    { label: "LOCATION", value: `${city}, ${region} ${postalCode}` },
    { label: "TIMEZONE", value: `UTC${timezone}` },
    { label: "ISP", value: isp },
  ];

  return (
    <main className="max-height-screen">
      {/* <div className="relative h-screen"> */}
      <div className="bg-mobile h-72 w-full sm:bg-desktop"></div>
      <div className="flex-grow bg-secondary">
        <Map latitude={lat} longitude={lng} />
      </div>

      <div className=" flex flex-col center justify-center items-center absolute top-0 w-full text-center">
        <h1 className="font-medium my-6 text-gray-100 text-2xl lg:text-4xl">
          IP Address Tracker
        </h1>

        <div className="w-10/12">
          <div className="flex rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-md mb-6 max-w-md lg:max-w-xl mx-auto lg:mb-14">
            <input
              className="py-3 px-5 border-none outline-none w-full text-lg text-custom-gray-dark"
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button className="bg-black text-white p-6 rounded-tr-2xl rounded-br-2xl">
              <ArrowIcon />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-evenly bg-white text-black p-3 rounded-2xl mt-4 shadow-md max-w-md lg:max-w-none mx-auto lg:py-6">
            {/* <DataField label={"IP ADDRESS"} value={"192.212.174.101"} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"LOCATION"} value={"Brooklyn, NY 10001"} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"TIMEZONE"} value={"UTC-05:00"} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"ISP"} value={"SpaceX Starlink"} /> */}

            {/* <DataField label={"IP ADDRESS"} value={locationData.ip} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField
              label={"LOCATION"}
              value={"Brooklyn, NY 10001"`${locationData.location.city}, ${locationData.location.region} ${locationData.location.postalCode}`}
            />
            <div className="hidden vertical-line lg:block"></div>
            <DataField
              label={"TIMEZONE"}
              value={`UTC${locationData.location.timezone}`}
            />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"ISP"} value={locationData.isp} /> */}

            {dataFields.map((field, index) => (
              <React.Fragment key={index}>
                <DataField label={field.label} value={field.value} />
                {index < dataFields.length - 1 && (
                  <div className="hidden vertical-line lg:block"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
