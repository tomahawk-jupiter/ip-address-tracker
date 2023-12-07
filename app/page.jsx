import ArrowIcon from "./_components/ArrowIcon";
import DataField from "./_components/DataField";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <div className="bg-mobile h-72 w-full sm:bg-desktop"></div>
        <div className="flex-grow bg-secondary"></div>

        {/* <div className=" flex flex-col center justify-center items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center"> */}
        <div className=" flex flex-col center justify-center items-center absolute top-0 w-full text-center">
          <h1 className="font-medium my-6 text-gray-100 text-2xl">
            IP Address Tracker
          </h1>

          <div className="w-10/12">
            <div className="flex rounded-tl-2xl rounded-bl-2xl overflow-hidden shadow-md mb-6">
              <input
                className="py-3 px-5 border-none outline-none w-full text-lg text-custom-gray-dark"
                type="text"
                placeholder="Enter an IP address..."
              />
              <button className="bg-black text-white p-6 rounded-tr-2xl rounded-br-2xl">
                <ArrowIcon />
              </button>
            </div>

            <div className="bg-white text-black p-2 rounded-2xl mt-4 shadow-md">
              <DataField label={"IP ADDRESS"} value={"192.212.174.101"} />
              <DataField label={"LOCATION"} value={"Brooklyn, NY 10001"} />
              <DataField label={"TIMEZONE"} value={"UTC-05:00"} />
              <DataField label={"ISP"} value={"SpaceX Starlink"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}