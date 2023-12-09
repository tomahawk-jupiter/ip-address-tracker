"use client";
import React, { useEffect, useState } from "react";
import ArrowIcon from "./_components/ArrowIcon";
import DataField from "./_components/DataField";
import Map from "./_components/Map";

// const baseUrl =
//   process.env.NEXT_PUBLIC_VERCEL_URL ||
//   process.env.NEXT_PUBLIC_NEXTAUTH_URL ||
//   "http://localhost:3000";

const initialState = {
  ip: "192.212.174.101",
  location: {
    city: "Brooklyn",
    region: "NY",
    postalCode: "10001",
    timezone: "-05:00",
    lat: 43.7319759709348,
    lng: 7.41489295600398,
  },
  isp: "SpaceX Starlink",
};

export default function Home() {
  const [locationData, setLocationData] = useState(initialState);
  const { ip, location, isp } = locationData;
  const { city, region, postalCode, timezone } = location;
  const [latitude, setLatitude] = useState(location.lat);
  const [longitude, setLongitude] = useState(location.lng);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const baseURL = window.location.origin;
      try {
        const res = await fetch(`${baseURL}/api`);
        const data = await res.json();
        setLocationData(data);
        setLatitude(data.location.lat);
        setLongitude(data.location.lng);
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(null);

    try {
      const baseURL = window.location.origin;
      const res = await fetch(`${baseURL}/api`, {
        method: "POST",
        body: JSON.stringify(inputValue),
        headers: {
          "content-type": "application/json",
        },
      });
      const resJSON = await res.json();

      if (!resJSON) {
        setErrorMessage("Oops, something went wrong!");
        return;
      }
      setLocationData(resJSON);
      setLatitude(resJSON.location.lat);
      setLongitude(resJSON.location.lng);
    } catch (error) {
      console.error(error);
    }
    setInputValue("");
  };

  const dataFields = [
    { label: "IP ADDRESS", value: ip },
    { label: "LOCATION", value: `${city}, ${region} ${postalCode}` },
    { label: "TIMEZONE", value: `UTC${timezone}` },
    { label: "ISP", value: isp },
  ];

  return (
    <main className="max-height-screen">
      <div className="bg-mobile h-72 w-full sm:bg-desktop"></div>
      <div className="flex-grow bg-secondary">
        <Map latitude={latitude} longitude={longitude} />
      </div>

      <div className=" flex flex-col center justify-center items-center absolute top-0 w-full text-center">
        <h1 className="font-medium my-6 text-gray-100 text-2xl lg:text-4xl">
          IP Address Tracker
        </h1>

        <div className="w-10/12">
          {errorMessage && (
            <p className="text-red-700 bg-red-300 inline-block font-bold absolute px-2 py-1 left-1/2 transform -translate-x-1/2 translate-y-20">
              {errorMessage}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-md mb-6 max-w-md lg:max-w-xl mx-auto lg:mb-14"
          >
            <input
              className="py-3 px-5 border-none outline-none w-full text-lg text-custom-gray-dark"
              type="text"
              placeholder="Search for any IP address or domain"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-6 rounded-tr-2xl rounded-br-2xl"
              disabled={!inputValue}
            >
              <ArrowIcon />
            </button>
          </form>

          <div className="flex flex-col lg:flex-row lg:justify-evenly bg-white text-black p-3 rounded-2xl mt-4 shadow-md max-w-md lg:max-w-none mx-auto lg:py-6">
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
    </main>
  );
}
