import React from 'react'
import UpcomingEvents from '../components/UpcomingEvents'
import { useLoaderData } from 'react-router'
import EventCard from '../components/EventCard'
import { Music, Heart, Star } from 'lucide-react';


export default function Home() {
    document.title = 'Event Hive'
    const data = useLoaderData()
    // console.log(data.length)
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen flex flex-col items-center justify-center p-4 pt-16">
        <UpcomingEvents data={data} />
        <EventCard data={data} />

        {/* Mission & Values */}
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16 text-white">
                <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
                <div className="w-16 h-1 bg-purple-500 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We believe in the transformative power of music and communal experiences to connect people and create lasting memories.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard
                    icon={<Music className="w-8 h-8 text-purple-400" />}
                    title="Musical Excellence"
                    description="We curate diverse lineups that showcase both established talents and emerging artists, offering our audience a journey of musical discovery."
                />
                <ValueCard
                    icon={<Heart className="w-8 h-8 text-purple-400" />}
                    title="Inclusive Community"
                    description="Our events are safe spaces where people of all backgrounds can express themselves freely and form meaningful connections."
                />
                <ValueCard
                    icon={<Star className="w-8 h-8 text-purple-400" />}
                    title="Immersive Experiences"
                    description="From lighting design to sound engineering, we obsess over every detail to create multisensory experiences that transcend ordinary events."
                />
                </div>
        </div>
    </div>
  )
  function ValueCard({ icon, title, description }) {
      return (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      );
    }
}
