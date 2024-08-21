import React from 'react';

const Event = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Fundraising Gala',
      description: 'Join us for an evening of fine dining, entertainment, and fundraising to support our mission.',
      date: 'October 15, 2024',
      location: 'New York City, NY',
      image: './images/woman.png', // Placeholder image
    },
    {
      id: 2,
      title: 'Community Cleanup',
      description: 'Help us clean up our local parks and streets to make our community a better place.',
      date: 'September 10, 2024',
      location: 'San Francisco, CA',
      image: './images/cleaning.jpg', // Placeholder image
    },
    {
      id: 3,
      title: 'Charity Run',
      description: 'Participate in our annual charity run to raise funds for our various causes.',
      date: 'November 5, 2024',
      location: 'Chicago, IL',
      image: './images/charityRun.jpg', // Placeholder image
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-gray-500">{event.date}</p>
              <p className="text-gray-500 mb-4">{event.location}</p>
              <a
                href={`/events/${event.id}`}
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
