import React from 'react';
import { Calendar, Users, Award, Music } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: "120+", label: "Events Organized" },
    { icon: <Users className="w-6 h-6" />, value: "50,000+", label: "Happy Attendees" },
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Years Experience" },
    { icon: <Music className="w-6 h-6" />, value: "300+", label: "Artists Featured" },
  ];

  const testimonials = [
    {
      text: "Event Hive consistently delivers the most electrifying nights out in the city. Their attention to production quality and artist selection is unmatched.",
      author: "Electronic Music Monthly",
      role: "Industry Publication"
    },
    {
      text: "What sets Event Hive apart is their commitment to creating safe, inclusive spaces while pushing creative boundaries.",
      author: "DJ Pulse",
      role: "Resident DJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20211001/pngtree-blue-light-background-image_908944.png"
          alt="Event Hive atmosphere"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Event Hive</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Creating unforgettable moments through music, art, and community since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-purple-500 mb-8"></div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Event Hive began as a small collective of music enthusiasts hosting underground parties in warehouse spaces. What started as a passion project quickly evolved into one of the most respected event production companies in the industry.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our journey has been defined by a commitment to musical innovation, stunning visual productions, and creating safe spaces where people from all walks of life can come together in celebration.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Today, we operate across multiple venues and festivals, bringing world-class talent to audiences while maintaining the intimate, community-focused atmosphere that defined our earliest events.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-purple-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What People Say</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <div className="text-5xl text-purple-400 mb-4">"</div>
              <p className="text-lg mb-6 italic text-gray-300">{testimonial.text}</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-purple-300">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
