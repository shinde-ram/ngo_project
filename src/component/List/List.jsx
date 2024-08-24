import React from 'react';
import { Link } from 'react-router-dom';
import ngos from './NgoDetails';
import ListTop from './ListTop'

const List = ({ limit }) => {
  return (
    <div className="bg-gray-300 mx-auto  pb-5 p-5">
      {/* Full-screen Background Section */}
      <div
        className="relative bg-cover bg-center h-[20vh] md:h-[40vh]"
        style={{ backgroundImage: "url('./images/listbg.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white pt-[2%] flex items-center ">
          <p className="md:px-20 text-xl md:text-3xl md:mt-5  lg:text-5xl font-bold text-yellow-500 trade-winds w-1/2 ">Small help together makes better life.</p>
        </div>
      </div>
      <br />
      <hr className=" h-[5px] w-full bg-red-500 " />

      {/* Title */}
      <h2 className="text-5xl rubic-scribble text-red-400 font-extrabold mb-8  pt-5 text-center">
        Our partner NGOs
      </h2>

      {/* NGO List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {ngos.map(ngo => (
          <Link key={ngo.id} className="bg-gray-200 border-2  border-black rounded-lg shadow-lg overflow-hidden" to={`${ngo.id}`}>
            <img
              src={ngo.image}
              alt={ngo.name}
              className="w-full h-48 object-cover bg-center p-2 rounded-3xl"
            />
            <hr className=" h-[3px] w-full bg-red-300 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-center">{ngo.name}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3 ">{ngo.description}</p>
              {/* Related Fields */}
              <div className="mt-4 w-full flex flex-wrap text-center">
                {ngo.relatedFields.map((field, index) => (
                  <span
                    key={field}
                    className="text-sm bg-blue-200 text-black px-3 py-1 rounded-full mr-2 mb-2 flex items-center"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <span className="mr-1">▶</span> {/* Replace ★ with any symbol you prefer */}
                    {field.field}
                  </span>
                ))}
              </div>

            </div>
            <div className='text-end pe-5 relative bottom-2'>
            <button className='px-2   rounded-md text-blue-900 font-bold'>More...</button>
            </div>
          </Link>
        ))}
      </div>
      <ListTop/>
    </div>
  );
};

export default List;
