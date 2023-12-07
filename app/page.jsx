import ArrowIcon from "./_components/ArrowIcon";
import DataField from "./_components/DataField";
import Map from "./_components/Map";

console.log("Testing...");
console.log({ env: process.env.NEXT_PUBLIC_API_KEY });

export default function Home() {
  return (
    <main className="max-height-screen">
      {/* <div className="relative h-screen"> */}
      <div className="bg-mobile h-72 w-full sm:bg-desktop"></div>
      <div className="flex-grow bg-secondary">
        <Map />
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
            <DataField label={"IP ADDRESS"} value={"192.212.174.101"} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"LOCATION"} value={"Brooklyn, NY 10001"} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"TIMEZONE"} value={"UTC-05:00"} />
            <div className="hidden vertical-line lg:block"></div>
            <DataField label={"ISP"} value={"SpaceX Starlink"} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
