import React from 'react'
import { FaUserPlus, FaSearch, FaDonate } from 'react-icons/fa';


function Worksteps() {
  return (
    <div>
      {/* How It Works Section */}
      <div className="bg-gray-200 text-white py-5 px-5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-black">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">

            {/* Step 1 - NGOs Register */}
            <div className="text-center md:w-1/3 px-4 bg-red-300   p-5 rounded-md">
              <FaUserPlus className="text-white text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-black">Step 1: NGOs Register</h3>
              <p className="text-black  mb-4">
                NGOs can easily register on our platform by providing essential details about their organization, mission, and projects. This helps donors understand the causes they support.
              </p>
              <p className="text-black">
                After registration, NGOs can regularly update their profiles, share their success stories, and showcase their ongoing projects to attract potential donors.
              </p>
            </div>

            {/* Step 2 - Donors Browse */}
            <div className="text-center md:w-1/3 px-4 bg-red-300  py-9 rounded-md" >
              <FaSearch className="text-white text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-black">Step 2: Donors Browse NGOs</h3>
              <p className="text-black mb-4">
                Donors can explore a wide range of NGOs based on their areas of interest, geographic location, or specific causes they want to support. 
              </p>
              <p className="text-black">
                Each NGO profile provides detailed information, including their mission, past achievements, and current needs, enabling donors to make informed decisions.
              </p>
            </div>

            {/* Step 3 - Donations Make an Impact */}
            <div className="text-center md:w-1/3 px-4 bg-red-300   p-5 rounded-md">
              <FaDonate className="text-white text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-black">Step 3: Donations Make an Impact</h3>
              <p className="text-black mb-4">
                Once donors choose an NGO, they can donate directly through our platform. Each donation, big or small, contributes to meaningful change and supports the NGO's mission.
              </p>
              <p className="text-black">
                Donors receive regular updates on how their contributions are making a difference, with stories and reports from the NGOs they support.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Worksteps
