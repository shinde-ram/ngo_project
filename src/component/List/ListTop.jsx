import React from 'react'
import { BiSolidDonateHeart } from "react-icons/bi";
import { GiAwareness } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";

function ListTop() {
  return (
    <div>
      <div className=" mx-auto pb-5 pt-10 px-6 bg-gray-200 w-full">
        {/* Introduction Section */}
        <section className="mb-12 text-center ">
          <div className="max-w-4xl mx-auto pb-10">
            <h2 className="text-5xl font-extrabold  mb-6">
              Discover and Support Our Partner NGOs
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-800">
              Our platform connects you with a diverse range of NGOs working tirelessly to create positive change in communities across the globe. Explore their stories, learn about their missions, and discover how you can make a difference.
            </p>

            <div className="flex-row justify-center items-center md:gap-6 space-y-4 md:flex ">

              <div className="bg-blu  shadow-lg p-6 rounded-lg transform transition hover:scale-105" style={{backgroundColor:'#B9B7BD'}}>
                <BiSolidDonateHeart className="h-12 w-12 mx-auto mb-4 object-fit" />
                <h3 className="text-2xl font-semibold text-blue-700">Donate</h3>
                <p className="text-black">Make a financial contribution to support NGO projects.</p>
              </div>

              <div className="shadow-lg p-6 rounded-lg transform transition hover:scale-105" style={{backgroundColor:'#B9B7BD'}}>
                <TiGroup className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-blue-700">Volunteer</h3>
                <p className="text-black">Give your time and skills to help NGOs achieve their goals.</p>
              </div>

              <div className=" shadow-lg p-6 rounded-lg transform transition hover:scale-105" style={{backgroundColor:'#B9B7BD'}}>
                <GiAwareness className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-blue-700">Raise Awareness</h3>
                <p className="text-black">Share the stories of these NGOs to inspire others.</p>
              </div>
            </div>
          </div>
        </section>

        {/* List of NGOs */}
        {/* The list of NGOs would go here, potentially rendered from an array of NGO data */}
      </div>
    </div>
  )
}

export default ListTop
