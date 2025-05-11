import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Share2, Heart, Blocks } from 'lucide-react';
import { useLoaderData, useParams } from 'react-router';
import { useToast } from '../components/ui/ToastProvider';
import DynamicTitle from '../components/ui/DynamicTitle';

export default function EventDetails() {

    const events = useLoaderData()
    const {id} = useParams()
    const { showToast } = useToast()
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const isFormValid = username && email
    const event = events.find((event) => event.id === parseInt(id))
    const {
        thumbnail,
        name,
        category,
        date,
        location,
        entryFee,
        description,
        organizer,
    } = event
    // console.log( event)

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
         })
    },[event])


  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <DynamicTitle event={event} />
      {/* Header/Hero Section */}
      <div className="relative h-96">
        <img
          src={thumbnail}
          alt={event.title}
          className="w-full  h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold">
                {category.split(',')[0]}
              </span>
              <span className="text-sm text-gray-300">{date}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-2">{name}</h1>
            <p className="text-lg text-gray-300 mb-4">{location}</p>
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
                  content={date}
                />

                <InfoItem
                  icon={<MapPin className="w-5 h-5 text-purple-400" />}
                  title="Location"
                  content={location}
                />
                <InfoItem
                  icon={<Blocks className='w-5 h-5 text-purple-400'/>}
                  title="Category"
                  content={category}
                />
                <InfoItem
                  icon={<Users className="w-5 h-5 text-purple-400" />}
                  title="Organizer"
                  content={organizer}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">About This Event</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {description}
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
                {location}
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
              <h2 className="text-2xl font-semibold mb-6">Reserve Your Seat</h2>

              <div className="flex justify-between items-center mb-6">
                <span>Price per ticket</span>
                <span className="text-2xl font-bold">{entryFee}</span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-2">
              </div>

              <form className="mb-6">
                <label className="block text-sm mb-2">Name & Email</label>
                <div className="flex flex-col items-center gap-2">

                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    type="text"
                    placeholder='Name'
                    className="w-full bg-transparent border border-white/20 rounded-lg overflow-hidden text-center focus:outline-none py-2"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    placeholder='Email'
                    className="w-full bg-transparent border border-white/20 rounded-lg overflow-hidden text-center focus:outline-none py-2"
                  />

                </div>

              <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                    showToast('Seat reserved successfully!', 'success')}
                }
                disabled={!isFormValid}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-colors my-4">

                Reserve Now
                </button>
              </form>


              <div className="text-center text-sm text-gray-300">
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
