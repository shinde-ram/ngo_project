import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ngos from './NgoDetails';
import ScrollToTop from '../ScrollToTop';

function OneNgo() {
    const { id } = useParams();
    const ngo = ngos.find((ngo) => ngo.id === id);

    if (!ngo) {
        return <p className="text-center text-red-500">NGO not found</p>;
    }

    return (
        <>
            <ScrollToTop />
            <div className="bg-gradient-to-b from-blue-50 to-gray-200 shadow-lg rounded-lg p-8 md:p-12 lg:p-16 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <img
                            src={ngo.image}
                            alt={ngo.name}
                            className="w-3/4 md:w-[80%] h-60 rounded-3xl mx-auto md:mx-0 object-cover shadow-md"
                        />
                        <h2 className="text-4xl font-extrabold mt-6">{ngo.name}</h2>
                        <p className="text-lg text-blue-600 mt-2">{ngo.location}</p>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col space-y-6">
                        <div className="flex flex-wrap justify-around gap-6">
                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
                                <h4 className="text-xl font-semibold text-gray-700">Founded</h4>
                                <p className="text-2xl font-bold text-blue-500 mt-2">{ngo.founded}</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
                                <h4 className="text-xl font-semibold text-gray-700">Category</h4>
                                <p className="text-2xl font-bold text-green-500 mt-2">{ngo.category}</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
                                <h4 className="text-xl font-semibold text-gray-700">Rating</h4>
                                <p className="text-2xl font-bold text-yellow-500 mt-2">{ngo.rating}</p>
                            </div>
                        </div>

                        <a
                            href={ngo.website}
                            className="text-lg text-white bg-blue-700 hover:bg-blue-800 shadow-md rounded-lg py-4 text-center transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            Visit Our Website
                        </a>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-lg text-gray-700 w-full md:w-2/3 ">
                        {ngo.description}
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Related Fields</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ngo.relatedFields.map((field, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <img
                                    src={field.image}
                                    alt={field.field}
                                    className="w-20 h-20 rounded-full mb-4 object-cover"
                                />
                                <h4 className="text-xl font-semibold text-gray-700">{field.icon} {field.field}</h4>
                                <p className="text-lg text-gray-600 mt-2">{field.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="bg-white w-full md:w-3/4 shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h3>
                        <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {ngo.email}</p>
                        <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> {ngo.phone}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OneNgo;
