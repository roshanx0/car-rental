import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cars/${id}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setCar(data);
      } catch (err) {
        setError(err.message);
        setCar({
          _id: id,
          make: 'Toyota',
          model: 'Camry',
          year: 2023,
          price: 50,
          transmission: 'Automatic',
          seats: 5,
          fuelType: 'Hybrid',
          available: true,
          image: 'https://c4.wallpaperflare.com/wallpaper/126/745/144/white-background-toyota-toyota-camry-wallpaper-preview.jpg',
          category: 'Sedan',
          description: 'Comfortable mid-size sedan with excellent fuel economy and reliability.',
          features: ['Bluetooth', 'Backup Camera', 'Lane Departure Warning', 'Adaptive Cruise Control'],
          licensePlate: 'CAM-2023'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <p className="text-center">Loading car details...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6  bg-slate-950">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Back to Listings</Link>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src={car.image} alt={car.model} className="w-200 mx-auto h-75 object-cover rounded-lg mb-6" />

        <h1 className="text-3xl font-bold">{car.make} {car.model} ({car.year})</h1>
        <p className="text-gray-600">{car.category} - <span className="font-bold">${car.price}/day</span></p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <p><span className="font-bold">Transmission:</span> {car.transmission}</p>
          <p><span className="font-bold">Seats:</span> {car.seats}</p>
          <p><span className="font-bold">Fuel Type:</span> {car.fuelType}</p>
          <p><span className="font-bold">Available:</span> {car.available ? 'Yes' : 'No'}</p>
          <p><span className="font-bold">License Plate:</span> {car.licensePlate}</p>
        </div>

        <p className="mt-4 text-gray-700">{car.description}</p>

        <h3 className="mt-6 text-xl font-semibold">Features</h3>
        <ul className="list-disc pl-5">
          {car.features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CarDetails;
