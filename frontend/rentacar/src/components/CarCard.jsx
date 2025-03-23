import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Gauge, Snowflake, DoorOpen } from 'lucide-react';

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-xs hover:shadow-xl transition">
      {/* Clickable Card */}
      <Link to={`/cars/${car._id}`} className="block">
        {/* Car Image */}
        <img 
          src={car.image || "/api/placeholder/320/200"}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </Link>

      {/* Car Details */}
      <div className="px-4 pb-4">
        {/* Name and Rating */}
        <div className="mb-2">
          <h2 className="text-lg font-bold">{car.make} {car.model}</h2>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm">{car.rating} ({car.reviews} reviews)</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4 mb-2">
            <Users className="w-4 h-4 mr-1" />
            <span>{car.seats || 2} Passengers</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <Gauge className="w-4 h-4 mr-1" />
            <span>{car.transmission || 'Auto'}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <Snowflake className="w-4 h-4 mr-1" />
            <span>Air Conditioning</span>
          </div>
          <div className="flex items-center mb-2">
            <DoorOpen className="w-4 h-4 mr-1" />
            <span>{car.doors || 2} Doors</span>
          </div>
        </div>

        {/* Price and Button */}
        <div>
          <p className="text-sm font-medium mb-2">Price</p>
          <p className="text-lg font-bold mb-3">Rs. {car.price}/day</p>
          
          {/* Button links to car details */}
          <Link to={`/cars/${car._id}`}>
            <button className="w-full bg-blue-800 text-white py-2 px-4 rounded flex items-center justify-center">
              <span>View Details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
