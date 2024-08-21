import React from 'react';
import ListTop from './ListTop';
import { Link } from 'react-router-dom';
import ngos from './NgoDetails';

const List = ({ limit }) => {
  

  // Determine the limited array based on the limit prop
  // const limitedArray = limit ? ngos.slice(0, limit) : ngos;
  return (
    <div className="container mx-auto text-center pb-5 ">
      <ListTop/>
     <h2 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-500 to-pink-500  text-transparent bg-clip-text pt-5">
     {limit?"Our partner NGO's ": "List of NGO's"}
        </h2>
      {/* <h2 className="text-5xl font-bold text-center mb-8 py-5 w-full">{limit?"Our partner NGO's ": "List of NGO's"}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ngos.map(ngo => (
          <Link key={ngo.id} className="bg-white rounded-lg shadow-lg overflow-hidden" to={`${ngo.id}`}>
            <img
              src={ngo.image}
              alt={ngo.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{ngo.name}</h3>
              <p className="text-gray-700 mb-4">{ngo.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl font-bold mr-2">{ngo.rating}</span>
                <span className="text-gray-600">/ 5</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
