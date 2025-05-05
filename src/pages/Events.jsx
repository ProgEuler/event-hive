import React from 'react';
import { Calendar, Clock, MapPin, Music, Users, Share2, Heart, Blocks } from 'lucide-react';

export default function EventDetailsPage() {
  // Mock data for the event
  const event = {
    id: 1,
    title: "TRAFFIC: Electronic Music Festival",
    subtitle: "The world's largest wildlife trade monitoring network",
    date: "29 September 2025",
    time: "21:00 - 05:00",
    location: "Club Nightlife, 123 Party Street, Downtown",
    description: "Join us for an unforgettable night of electronic music featuring world-renowned DJs and stunning visual performances. TRAFFIC brings together the best talent in the industry for a night of pure musical bliss.",
    ticketPrice: "$45.00",
    ticketsRemaining: 142,
    totalCapacity: 500,
    genre: "Electronic, House, Techno",
    organizer: "Event Hive Productions",
    featuredArtists: [
      { name: "DJ Pulse", role: "Headliner" },
      { name: "Electra Beats", role: "Support" },
      { name: "Neon Collective", role: "Opening Act" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      {/* Header/Hero Section */}
      <div className="relative h-96">
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/337/642/non_2x/ai-generative-concert-stage-scenery-with-spotlights-colored-lights-smoke-free-photo.jpg"
          alt={event.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold">
                {event.genre.split(',')[0]}
              </span>
              <span className="text-sm text-gray-300">{event.date}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-2">{event.title}</h1>
            <p className="text-xl text-gray-300">{event.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Event Details */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Event Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <InfoItem
                  icon={<Calendar className="w-5 h-5 text-purple-400" />}
                  title="Date"
                  content={event.date}
                />
                <InfoItem
                  icon={<Clock className="w-5 h-5 text-purple-400" />}
                  title="Time"
                  content={event.time}
                />
                <InfoItem
                  icon={<MapPin className="w-5 h-5 text-purple-400" />}
                  title="Location"
                  content={event.location}
                />
                <InfoItem
                  icon={<Blocks className='w-5 h-5 text-purple-400'/>}
                  title="Category"
                  content={event.genre}
                />
                <InfoItem
                  icon={<Users className="w-5 h-5 text-purple-400" />}
                  title="Organizer"
                  content={event.organizer}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">About This Event</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {event.description}
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in felis euismod, commodo nisi at, viverra libero. Aenean fringilla justo at mi tempor, id scelerisque ipsum eleifend. Praesent sed neque sed nulla tempor commodo.
                <br /><br />
                Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
              </p>

              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="rounded-lg overflow-hidden h-64 mb-6">
                <img
                  src="/api/placeholder/800/400"
                  alt="Event location map"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300">
                <MapPin className="inline w-4 h-4 mr-2" />
                {event.location}
              </p>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Share2 className="w-5 h-5" />
                Share Event
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Heart className="w-5 h-5" />
                Save Event
              </button>
            </div>
          </div>

          {/* Right Column - Ticket Info */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sticky top-8">
              <h2 className="text-2xl font-semibold mb-6">Get Tickets</h2>

              <div className="flex justify-between items-center mb-6">
                <span>Price per ticket</span>
                <span className="text-2xl font-bold">{event.ticketPrice}</span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  style={{ width: `${(event.ticketsRemaining / event.totalCapacity) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm text-gray-300 mb-8">
                <span>{event.ticketsRemaining} tickets left</span>
                <span>{event.totalCapacity} capacity</span>
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-2">Number of tickets</label>
                <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors">-</button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value="1"
                    className="w-full bg-transparent border-none text-center focus:outline-none py-2"
                    readOnly
                  />
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors">+</button>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-colors mb-4">
                Buy Tickets
              </button>

              <div className="text-center text-sm text-gray-300">
                <p className="mb-2">Secure payment processing</p>
                <p>Tickets will be sent to your email</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

// Helper component for info items
function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-300">{title}</h4>
        <p className="font-medium">{content}</p>
      </div>
    </div>
  );
}
