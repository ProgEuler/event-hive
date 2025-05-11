import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function EventsBook() {
    document.title = 'My Bookings | Event Hive';
    const [bookings, setBookings] = useState([]);
    const navigator = useNavigate();

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold text-white mb-4">My Bookings</h1>
        </div>

          <div className="text-center py-16  bg-opacity-50 rounded-lg">
            <svg className="mx-auto h-20 w-20 text-purple-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <h3 className="mt-4 text-2xl font-bold text-white">No Bookings Found</h3>
            <p className="mt-2 text-gray-300 max-w-md mx-auto">
              You haven't booked any events yet. Explore our upcoming events and secure your tickets today!
            </p>
            <button
                onClick={() => navigator('/')}
            className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300">
              Browse Events
            </button>
          </div>

      </div>
    </div>
  );
}
