import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

function CarListing() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const colors = {
    primaryBlue: "#3361AC",
    lightBg: "#E7E6DD",
    primaryYellow: "#E8C766",
    accentYellow: "#E8AF30",
    darkBlue: "#162F65",
    navyBlue: "#0F2043",
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cars");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCars(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        // Load fallback data in case API is not available
        setCars([
          {
            _id: "1",
            make: "Toyota",
            model: "Camry",
            year: 2023,
            price: 50,
            image: "https://via.placeholder.com/300x200",
          },
          {
            _id: "2",
            make: "Honda",
            model: "Accord",
            year: 2022,
            price: 45,
            image: "https://via.placeholder.com/300x200",
          },
          {
            _id: "3",
            make: "Tesla",
            model: "Model 3",
            year: 2023,
            price: 75,
            image: "https://via.placeholder.com/300x200",
          },
          {
            _id: "4",
            make: "BMW",
            model: "3 Series",
            year: 2022,
            price: 65,
            image: "https://via.placeholder.com/300x200",
          },
        ]);
      }
    };

    fetchCars();
  }, []);

  // Filter and sort cars
  const filteredCars = cars.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedCars = [...filteredCars];
  if (sortOption === "price-low") {
    sortedCars.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high") {
    sortedCars.sort((a, b) => b.price - a.price);
  } else if (sortOption === "year-new") {
    sortedCars.sort((a, b) => b.year - a.year);
  }

  if (loading) {
    return (
      <div
        className="flex justify-center items-center h-64"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"
          style={{ borderColor: colors.accentYellow }}
        ></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-extrabold mb-4"
            style={{ color: colors.primaryYellow }}
          >
            Available Vehicles
          </h1>
          <div
            className="h-1 w-24 mx-auto"
            style={{ backgroundColor: colors.accentYellow }}
          ></div>
        </div>

        {error && (
          <div
            className="rounded-lg p-4 mb-8 border-l-4"
            style={{
              backgroundColor: "rgba(50, 50, 50, 0.7)",
              borderColor: colors.accentYellow,
            }}
          >
            <p style={{ color: "white" }}>Error loading cars: {error}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search cars..."
            className="flex-grow px-4 py-3 border rounded-md focus:outline-none focus:ring-2"
            style={{
              borderColor: colors.primaryBlue,
              backgroundColor: "white",
              color: "black",
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 cursor-pointer"
            style={{
              borderColor: colors.accentYellow,
              backgroundColor: colors.accentYellow,
              color: "black",
            }}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="year-new">Year: Newest First</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sortedCars.map((car, index) => (
            <div
              key={car._id}
              className="transform transition duration-300 hover:scale-105"
              style={{
                animation: `fadeIn 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <CarCard car={car} colorTheme={colors} />
            </div>
          ))}
        </div>

        {sortedCars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl" style={{ color: "white" }}>
              No cars match your search criteria.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-6 py-2 rounded-md font-medium transition-colors"
              style={{ backgroundColor: colors.accentYellow, color: "black" }}
            >
              Clear Search
            </button>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default CarListing;
