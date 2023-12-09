import { NextResponse } from "next/server";

const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function GET() {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${NEXT_PUBLIC_API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(null);
    }
    const locationData = await response.json();
    return NextResponse.json(locationData);
  } catch (error) {
    return NextResponse.json(null);
  }
}

export async function POST(req, res) {
  const userInput = await req.json();
  let url = null;

  if (!userInput) return NextResponse.json(null); // make sure user input is not empty

  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex =
    /^(?=.*[^:]{2,})(([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{1,4}|:)$/;
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

  if (ipv4Regex.test(userInput) || ipv6Regex.test(userInput)) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${NEXT_PUBLIC_API_KEY}&ipAddress=${userInput}`;
  }

  if (domainRegex.test(userInput)) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${NEXT_PUBLIC_API_KEY}&domain=${userInput}`;
  }

  if (!url) return NextResponse.json(null);

  const response = await fetch(url);

  if (!response.ok) {
    return NextResponse.json(null);
  }

  const locationData = await response.json();
  return NextResponse.json(locationData);
}
