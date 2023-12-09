import { NextResponse } from "next/server";

export async function GET() {
  // TODO: use the external api for geo location data
  const locationData = {
    ip: "192.212.174.101",
    location: {
      country: "US",
      region: "NY",
      city: "Brooklyn",
      lat: 37.40599,
      lng: -122.078514,
      postalCode: "10001",
      timezone: "-05:00",
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
    isp: "SpaceX Starlink",
  };

  return NextResponse.json(locationData);
}

export async function POST(req, res) {
  const newIP = await req.json();
  // TODO: use the external api for geo location data
  // TODO: include some more user validation using regex

  if (!newIP) return; // make sure user input exists

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

/************* Regex validation examples ****************/

// const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
// const ipAddress = "192.168.1.1";

// if (ipv4Regex.test(ipAddress)) {
//   console.log("Valid IPv4 address");
// } else {
//   console.log("Invalid IPv4 address");
// }

// const ipv6Regex =
//   /^(?=.*[^:]{2,})(([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{1,4}|:)$/;
// const ipv6Address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";

// if (ipv6Regex.test(ipv6Address)) {
//   console.log("Valid IPv6 address");
// } else {
//   console.log("Invalid IPv6 address");
// }

// const domainRegex = /^(?!:\/\/)([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
// const domain = "example.com";

// if (domainRegex.test(domain)) {
//   console.log("Valid domain name");
// } else {
//   console.log("Invalid domain name");
// }
