import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function UpcomingEvents({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock event data
  const events = [
    {
      id: 1,
      date: '29. 9. 2016',
      views: 21,
      type: 'Share',
      title: "The second single to be taken from Coldplay's",
      image: "https://www.shutterstock.com/image-photo/crowd-partying-stage-lights-live-600nw-2297236461.jpg",
      hasTickets: false
    },
    {
      id: 2,
      date: '29. 9. 2016',
      views: 21,
      type: 'View',
      title: "TRAFFIC, the world's largest wildlife trade monitoring network",
      image: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
      hasTickets: true
    },
    {
      id: 3,
      date: '29. 9. 2016',
      views: 21,
      type: 'View',
      title: "Girl, please tell me why",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-concert-tabloid-template-design-5377f80872b327e6c6b27d95ae17f3d1_screen.jpg?ts=1637003154",
      hasTickets: false
    },
    {
      id: 4,
      date: '30. 9. 2016',
      views: 15,
      type: 'Share',
      title: "Summer festival highlights",
      image: "/api/placeholder/600/400",
      hasTickets: true
    },
    {
      id: 5,
      date: '01. 10. 2016',
      views: 32,
      type: 'View',
      title: "Late night DJ sessions",
      image: "/api/placeholder/600/400",
      hasTickets: true
    }
  ];

  const totalSlides = events.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Show 3 cards at a time (or fewer on smaller screens)
  const visibleEvents = [
    events[currentSlide % totalSlides],
    events[(currentSlide + 1) % totalSlides],
    events[(currentSlide + 2) % totalSlides]
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 lg:p-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left section with title and navigation */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-white text-5xl font-bold mb-2">Upcoming <br />Events</h2>
              <div className="w-16 h-1 bg-white mb-6"></div>
              <p className="text-gray-300 text-sm mb-8">
                Discover the latest events and experiences happening in your area. From concerts to festivals, we have something for everyone. Join us and make unforgettable memories!
              </p>

              <div className="flex items-center gap-2 text-gray-300 mb-8">
                <Calendar className="w-5 h-5" />
                <span className="uppercase text-sm font-medium">Timetable</span>
              </div>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-white">
                {currentSlide + 1}/{totalSlides}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

            {visibleEvents.map((event, index) => (
            <div
                key={event.id}
                className="relative overflow-hidden group w-[300px]"
                style={{
                display: index < 3 ? 'block' : 'none'
                }}
            >
                <div className="aspect-[3/4] relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Event info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 group-hover:translate-y-[-20%]">
                    <div className="flex justify-between items-center mb-2 text-sm">
                    <span>{event.date}</span>
                    <span className="flex items-center gap-1">
                        {event.views} {event.type}
                    </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">
                    {event.title}
                    </h3>

                    <button className="bg-transparent uppercase border border-white px-6 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-purple-900">
                        Buy Tickets
                    </button>

                </div>
                </div>
            </div>
            ))}

        </div>
      </div>

    </div>
  );
}
