"use client";
import * as React from "react";

function HowItWorks() {
  return (
    <div id="become-a-renter" className="px-40 py-20 c max-md:p-10">
      <div className="mb-20 text-center">
        <div className="px-8 py-4 mb-8 text-sm bg-yellow-400 rounded-lg text-blue-950">
          HOW IT WORKS?
        </div>
        <div className="text-4xl font-medium text-stone-200 max-sm:text-3xl">
          Rent with following 3 working steps
        </div>
      </div>
      <div className="flex gap-52 justify-center max-md:flex-col max-md:gap-10">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex justify-center items-center w-28 h-28 bg-gray-400 rounded-2xl">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M41.24 17.4C39.16 8.14 31.08 4 24 4C24 4 24 4 23.98 4C16.92 4 8.85999 8.14 6.75999 17.38C4.39999 27.7 10.72 36.44 16.44 41.96C18.56 44 21.28 45.02 24 45.02C26.72 45.02 29.44 44 31.54 41.96C37.26 36.44 43.58 27.72 41.24 17.4ZM30.56 19.06L22.56 27.06C22.26 27.36 21.88 27.5 21.5 27.5C21.12 27.5 20.74 27.36 20.44 27.06L17.44 24.06C16.86 23.48 16.86 22.52 17.44 21.94C18.02 21.36 18.98 21.36 19.56 21.94L21.5 23.88L28.44 16.94C29.02 16.36 29.98 16.36 30.56 16.94C31.14 17.52 31.14 18.48 30.56 19.06Z" fill="#152F64"></path></svg>',
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="mb-6 text-xl text-orange-300">Choose location</div>
            <div className="text-sm text-white">
              Choose your and find your best car
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="flex justify-center items-center w-28 h-28 bg-gray-400 rounded-2xl">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M33.5 7.12V4C33.5 3.18 32.82 2.5 32 2.5C31.18 2.5 30.5 3.18 30.5 4V7H17.5V4C17.5 3.18 16.82 2.5 16 2.5C15.18 2.5 14.5 3.18 14.5 4V7.12C9.10003 7.62 6.48003 10.84 6.08003 15.62C6.04003 16.2 6.52003 16.68 7.08003 16.68H40.92C41.5 16.68 41.98 16.18 41.92 15.62C41.52 10.84 38.9 7.62 33.5 7.12Z" fill="#171564"></path></svg>',
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="mb-6 text-xl text-orange-300">Pick-up date</div>
            <div className="text-sm text-white">
              Select your pick up date and time to book your car
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="flex justify-center items-center w-28 h-28 bg-gray-400 rounded-2xl">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M43.5 16.0002C43.5 16.8202 42.82 17.5002 42 17.5002H6C5.18 17.5002 4.5 16.8202 4.5 16.0002C4.5 15.1802 5.18 14.5002 6 14.5002H8.04L8.8 10.8802C9.52 7.38016 11.02 4.16016 16.98 4.16016H31.02C36.98 4.16016 38.48 7.38016 39.2 10.8802L39.96 14.5002H42C42.82 14.5002 43.5 15.1802 43.5 16.0002Z" fill="#152F64"></path></svg>',
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="mb-6 text-xl text-orange-300">Book your car</div>
            <div className="text-sm text-white">
              Book your car and we will deliver it directly to you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;