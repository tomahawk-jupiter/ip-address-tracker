import { NextResponse } from "next/server";

export async function GET() {
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

  return NextResponse.json(locationData);
}

export async function POST(req, res) {
  const newIP = await req.json();
  const locationData = {
    ip: newIP,
    location: {
      country: "US",
      region: "California",
      city: "New City!!!",
      lat: 35,
      lng: -120,
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

  return NextResponse.json(locationData);
}

// console.log("Testing...");
// console.log({ env: process.env.NEXT_PUBLIC_API_KEY });
// REQUEST_EXAMPLE=`https://geo.ipify.org/api/v2/country?apiKey=${NEXT_PUBLIC_API_KEY}&ipAddress=8.8.8.8`

// async function getLocationData(ipAddress) {
//   if (ipAddress) {
//     const res = await fetch(
//       `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ipAddress}`
//     );
//     return res.json();
//   }
//   const res = await fetch(
//     `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
//   );
//   return res.json();
// }
