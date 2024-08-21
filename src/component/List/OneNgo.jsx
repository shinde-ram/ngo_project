import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ngos from './NgoDetails'; // Import your NGO data array
import { Worksteps } from '../Home';
import ScrollToTop from '../ScrollToTop';

function OneNgo() {
    const { id } = useParams(); 
    const ngo = ngos.find((ngo) => ngo.id === id);

    if (!ngo) {
        return <p className="text-center text-red-500">NGO not found</p>;
    }

    return (
      <>
      <ScrollToTop/>
        <div className="ps-[10%] pb-7 w-full bg-white shadow-md rounded-lg">
            <div className="text-center ">
                <img
                    src={ngo.image} // Assuming there's an image property
                    alt={ngo.name}
                    className="w-32 h-32 rounded-full mx-auto"
                />
                <h2 className="text-2xl font-bold mt-4">{ngo.name}</h2>
                <p className="text-gray-600">{ngo.location}</p>
            </div>

            <div className="mt-6">
                <p className="text-gray-700">{ngo.description}</p>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Details</h3>
                <ul className="list-disc list-inside">
                    <li>Founded: {ngo.founded}</li>
                    <li>Category: {ngo.category}</li>
                    <li>Rating: {ngo.rating}</li>
                    {/* Add more details as needed */}
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-700">Email: {ngo.email}</p>
                <p className="text-gray-700">Phone: {ngo.phone}</p>
                <p className="text-gray-700">Website: <a href={ngo.website} className="text-blue-500 hover:underline">{ngo.website}</a></p>
            </div>
        </div>
            <Worksteps/>
        </>
    );
}

export default OneNgo;
