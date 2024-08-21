import React from 'react';
import { FaHandsHelping, FaUsers, FaCheckCircle } from 'react-icons/fa';

const OurImpact = () => {
  return (
    <div className="our-impact-page"> 
    

      {/* Introduction to Impact */}
      <section className="intro bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Making a Difference Together</h2>
          <p className="text-gray-700 text-xl">
            At Saath, our mission is to empower NGOs and communities to create lasting change. Through your support,<br />
            we've been able to make significant impacts across various sectors.
          </p>
        </div>
      </section>


{/* Impact Metrics */}
<section className="metrics bg-gradient-to-r from-blue-100 to-blue-200 py-20">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 text-center w-4/5">
    <div className="metric p-8 bg-white shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-300">
      <FaHandsHelping className="w-12 h-12 mx-auto text-blue-800 mb-4" />
      <h3 className="text-4xl font-bold text-blue-800">200+</h3>
      <p className="text-gray-700 mt-2">NGOs Supported</p>
    </div>
    <div className="metric p-8 bg-white shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-300">
      <FaUsers className="w-12 h-12 mx-auto text-blue-800 mb-4" />
      <h3 className="text-4xl font-bold text-blue-800">500K+</h3>
      <p className="text-gray-700 mt-2">Lives Impacted</p>
    </div>
    <div className="metric p-8 bg-white shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-300">
      <FaCheckCircle className="w-12 h-12 mx-auto text-blue-800 mb-4" />
      <h3 className="text-4xl font-bold text-blue-800">300+</h3>
      <p className="text-gray-700 mt-2">Projects Completed</p>
    </div>
  </div>
</section>


<section className="project-stories bg-gradient-to-r from-blue-50 to-blue-100 py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-bold text-blue-800 mb-12">Project Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="story p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <img src="./images/education.jpg" alt="Education for All" className="h-40 w-full object-cover rounded-t-lg mb-4"/>
        <h4 className="text-3xl font-semibold text-yellow-500 mb-4">Education for All</h4>
        <p className="text-gray-700 mb-4">
          Enabling 50,000+ children to access quality education in remote areas.
        </p>
        <a href="/projects/education" className="text-blue-700 font-medium hover:text-blue-500">Learn More &rarr;</a>
      </div>
      <div className="story p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <img src="./images/health.jpg" alt="Healthcare Initiatives" className="h-40 w-full object-cover rounded-t-lg mb-4"/>
        <h4 className="text-3xl font-semibold text-yellow-500 mb-4">Healthcare Initiatives</h4>
        <p className="text-gray-700 mb-4">
          Reaching over 100,000 individuals with essential healthcare services.
        </p>
        <a href="/projects/healthcare" className="text-blue-700 font-medium hover:text-blue-500">Learn More &rarr;</a>
      </div>
      <div className="story p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <img src="./images/Environmental Conservation.jpg" alt="Environmental Conservation" className="h-40 w-full object-cover rounded-t-lg mb-4"/>
        <h4 className="text-3xl font-semibold text-yellow-500 mb-4">Environmental Conservation</h4>
        <p className="text-gray-700 mb-4">
          Restoring over 1,000 hectares of land through conservation efforts.
        </p>
        <a href="/projects/environment" className="text-blue-700 font-medium hover:text-blue-500">Learn More &rarr;</a>
      </div>
    </div>
  </div>
</section>


      {/* Video Testimonials */}
      <section className="video-testimonials bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Hear from Our Partners</h2>
          <video className="mx-auto rounded-lg shadow-lg" width="800" controls>
            <source src="./videos/impact_testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
{/* 
      {/* Interactive Map */}
      {/* <section className="interactive-map bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Our Global Reach</h2>
          <div className="map bg-gray-300 h-96 rounded-lg">
          </div>
        </div>
      </section>  */}

      {/* Call to Action */}
      <section className="cta bg-blue-700 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8">
            Your support is crucial in continuing our work. Help us reach more communities and create a better future.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurImpact;
