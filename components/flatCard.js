export default function FlatCard({ loading, flat }) {
  if (loading)
    return (
      <div className="animate-pulse w-full">
        <div className="flex justify-center items-center w-full h-28 bg-gray-300 rounded dark:bg-gray-700 ">
          <svg
            className="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="w-full mt-3">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  return (
    <div className="w-full h-full rounded-md overflow-hidden shadow-xl dark:bg-gray-700">
      <div className="w-full h-36">
        <img src={flat.imageUrl} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 p-2 text-sm">
        <h6 className="text-center text-base font-extralight dark:text-white text-red-800">
          {flat.address}
        </h6>
        {flat.area && (
          <div className="flex justify-between pb-1 border-b-[1px]">
            <p>Wohnfläche</p>
            <p>{flat.area} &#x33A1;</p>
          </div>
        )}
        {flat.rooms && (
          <div className="flex justify-between pb-1 border-b-[1px]">
            <p>Zimmer</p>
            <p>{flat.rooms}</p>
          </div>
        )}
        <div className="flex justify-between pb-1">
          <p>Kaltmiete</p>
          <p>{flat.price}</p>
        </div>
      </div>
    </div>
  );
}
