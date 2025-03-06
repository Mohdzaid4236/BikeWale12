import React from 'react';
import BikeCard from './BikeCard';
import "tailwindcss";

const bikes = [
  { id: 1, name: 'Bike Model 1', price: '₹1,00,000' },
  { id: 2, name: 'Bike Model 2', price: '₹1,50,000' },
  { id: 3, name: 'Bike Model 3', price: '₹2,00,000' },
];

function BikeList() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Bikes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
}

export default BikeList;
