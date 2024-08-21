import React, { useState, useEffect } from 'react';

const quotes = [
  "“The best way to find yourself is to lose yourself in the service of others.” – Mahatma Gandhi",
  "“No act of kindness, no matter how small, is ever wasted.” – Aesop",
  "“The best way to not feel hopeless is to get up and do something.” – Barack Obama",
  "“Alone we can do so little; together we can do so much.” – Helen Keller",
];

const ContactUs = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      {/* Quotes Section */}
      <div className="text-center bg-blue-800 text-white py-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl italic">{quotes[currentQuote]}</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-700 mb-8 text-center text-lg">
          Whether you have a question about our projects, need assistance, or you're interested in getting involved with our initiatives, we’d love to hear from you. Reach out to us using the form below, and we'll get back to you as soon as possible.
        </p>

        {/* Form Section */}
        <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded-md font-bold hover:bg-blue-900 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Additional Content */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            We are here to support you in any way we can. Together, we can make a difference!
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Feel free to reach out to us via email at <a href="mailto:info@yourngo.com" className="text-blue-800 underline">info@yourngo.com</a> or call us at <a href="tel:+1234567890" className="text-blue-800 underline">+123-456-7890</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
