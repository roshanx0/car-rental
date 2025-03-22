"use client";
import * as React from "react";

const CarRentalSearch = () => {
  // State to store search criteria
  const [location, setLocation] = React.useState("");
  const [pickupDate, setPickupDate] = React.useState("Tue 15 Feb, 09:00");
  const [returnDate, setReturnDate] = React.useState("Thu 16 Feb, 11:00");

  // Function to handle search
  const handleSearch = () => {
    console.log("Searching for cars...");
    console.log("Location:", location);
    console.log("Pickup Date:", pickupDate);
    console.log("Return Date:", returnDate);

    // Add your search logic here (e.g., filter cars, call an API, etc.)
  };

  return (
    <section className="relative px-40 py-16 bg-slate-950 max-md:p-10">
      <div className="flex justify-between items-center max-md:flex-col max-md:text-center">
        <div className="max-w-[390px]">
          <h1 className="relative mb-10 text-5xl font-semibold text-white max-sm:text-3xl">
            <span>Find, book and rent a car </span>
            <span className="text-yellow-400">Easily</span>
            <svg
              className="underline"
              width="110"
              height="18"
              viewBox="0 0 110 18"
              fill="none"
              style={{
                position: "absolute",
                top: "95px",
                left: "210px",
                transform: "rotate(6.009deg)",
              }}
            >
              <path
                d="M109.107 1.48597C46.1133 -3.13922 18.9868 4.67013 0.776656 7.90279C0.493649 10.6003 0.601131 12.819 0.299726 17.1047C49.1274 -0.762454 81.679 2.17377 109.07 3.31197C109.082 2.97266 109.073 2.50389 109.107 1.48597Z"
                fill="#FFCC00"
              />
            </svg>
          </h1>
          <p className="text-lg text-gray-400">
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39e9c099010f442ae1e82970097a60d8807f551c"
          className="h-[432px] w-[765px] max-md:mt-10 max-md:w-full max-md:h-auto"
          alt="Car"
        />
      </div>

      <div className="flex gap-6 items-center mt-10 max-md:flex-col">
        <div className="flex gap-4 items-center pl-6 border-l border-solid border-l-yellow-400 max-md:border-l-[none]">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 17.9067C18.2975 17.9067 20.16 16.0442 20.16 13.7467C20.16 11.4492 18.2975 9.58667 16 9.58667C13.7025 9.58667 11.84 11.4492 11.84 13.7467C11.84 16.0442 13.7025 17.9067 16 17.9067Z"
                stroke="#FF0000"
                strokeWidth="2"
              />
              <path
                d="M4.8267 11.32C7.45336 -0.226643 24.56 -0.21331 27.1734 11.3334C28.7067 18.1067 24.4934 23.84 20.8 27.3867C18.12 29.9734 13.88 29.9734 11.1867 27.3867C7.5067 23.84 3.29336 18.0934 4.8267 11.32Z"
                stroke="#FF0000"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base text-white">Location</h3>
            <input
              type="text"
              placeholder="Search your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm text-white bg-transparent border-b border-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center pl-6 border-l border-solid border-l-yellow-400 max-md:border-l-[none]">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M11.3478 2.66669V6.66669M22.0145 2.66669V6.66669M5.34784 12.1199H28.0145M28.6812 11.3334V22.6667C28.6812 26.6667 26.6812 29.3334 22.0145 29.3334H11.3478C6.68115 29.3334 4.68115 26.6667 4.68115 22.6667V11.3334C4.68115 7.33335 6.68115 4.66669 11.3478 4.66669H22.0145C26.6812 4.66669 28.6812 7.33335 28.6812 11.3334Z"
                stroke="#327F13"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base text-white">Pickup date</h3>
            <input
              type="text"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="text-sm text-white bg-transparent border-b border-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center pl-6 border-l border-solid border-l-yellow-400 max-md:border-l-[none]">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M11.029 2.66669V6.66669M21.6956 2.66669V6.66669M5.02899 12.1199H27.6957M28.3623 11.3334V22.6667C28.3623 26.6667 26.3623 29.3334 21.6956 29.3334H11.029C6.3623 29.3334 4.3623 26.6667 4.3623 22.6667V11.3334C4.3623 7.33335 6.3623 4.66669 11.029 4.66669H21.6956C26.3623 4.66669 28.3623 7.33335 28.3623 11.3334Z"
                stroke="#7F810D"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-base text-white">Return date</h3>
            <input
              type="text"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="text-sm text-white bg-transparent border-b border-white focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="p-2 text-base text-white rounded-lg cursor-pointer bg-neutral-400 border-[none] max-sm:w-full"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default CarRentalSearch;
