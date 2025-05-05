import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Share2, Heart, Blocks } from 'lucide-react';
import { useNavigate } from 'react-router';

// Event data in JSON format
// const eventsData = [
//   {
//     id: 1,
//     thumbnail: "/api/placeholder/400/250",
//     name: "BASS DROP: Electronic Night",
//     category: "Electronic",
//     date: "15 June 2025",
//     location: "Sonic Arena, Downtown",
//     entryFee: "$35.00",
//     description: "Experience the ultimate bass music showcase featuring top DJs and producers from around the world."
//   },
//   {
//     id: 2,
//     thumbnail: "/api/placeholder/400/250",
//     name: "Techno Revolution",
//     category: "Techno",
//     date: "22 July 2025",
//     location: "Underground Vault, East Side",
//     entryFee: "$40.00",
//     description: "A night dedicated to pure techno with international headliners and local talent."
//   },
//   {
//     id: 3,
//     thumbnail: "/api/placeholder/400/250",
//     name: "House Classics",
//     category: "House",
//     date: "8 August 2025",
//     location: "Skyline Terrace, Marina",
//     entryFee: "$30.00",
//     description: "Relive the golden era of house music with legendary tracks and modern remixes."
//   },
//   {
//     id: 4,
//     thumbnail: "/api/placeholder/400/250",
//     name: "Trance Elevation",
//     category: "Trance",
//     date: "19 August 2025",
//     location: "Celestial Hall, Midtown",
//     entryFee: "$42.00",
//     description: "An uplifting journey through melodic trance and progressive beats."
//   },
//   {
//     id: 5,
//     thumbnail: "/api/placeholder/400/250",
//     name: "Drum & Bass Collective",
//     category: "Drum & Bass",
//     date: "5 September 2025",
//     location: "Thunder Dome, Industrial District",
//     entryFee: "$38.00",
//     description: "High-energy drum and bass night featuring the best of the underground scene."
//   },
//   {
//     id: 6,
//     thumbnail: "/api/placeholder/400/250",
//     name: "Ambient Expedition",
//     category: "Ambient",
//     date: "12 October 2025",
//     location: "Echo Chamber, Arts District",
//     entryFee: "$25.00",
//     description: "Immerse yourself in atmospheric soundscapes and experimental electronic music."
//   }
// ];

// Main component
export default function EventCard({ data }) {
//   const [selectedEvent, setSelectedEvent] = useState(null);
    console.log(data)
    const navigator = useNavigate()

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the hottest electronic music events coming to venues near you. From pulsating techno to euphoric trance, we've got your electronic music cravings covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((event) => (
            <div
              key={event.id}
              className="bg-indigo-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={event.thumbnail}
                alt={event.name}
                className="w-full h-48 object-cover "
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{event.name}</h3>
                  <span className="inline-block bg-purple-600 rounded-full px-3 py-1 text-xs font-semibold text-white">
                    {event.category}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-gray-300 mb-2">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-300 mb-2">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{event.entryFee}</span>
                  </div>
                </div>

                <button
                    onClick={ () => navigator(`/events/${event.id}`)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-colors mb-4 text-white"
                >
                    View more
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
