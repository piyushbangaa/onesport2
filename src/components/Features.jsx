import React from 'react';
import Tilt from 'react-parallax-tilt';

const FeatureCard = ({ title, description }) => {
  return (
    <Tilt
      className="mt-20 w-[300px] h-[260px] bg-black border-2 p-6 rounded-lg shadow-xl ml-7"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.05}
      transitionSpeed={500}
    >
      <div className="text-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="mt-4 font-semibold">{description}</p>
      </div>
    </Tilt>
  );
};

const Features = () => {
  return (
    <div className="min-h-[550px] mt-20 ml-20">
      <h1 className="text-5xl ml-15 font-bold">
      Trusted by athletes, teams, and sports enthusiasts for seamless turf and <br /> field bookings
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <FeatureCard
          title="99.99% Booking Uptime"
          description="Ensuring uninterrupted access to sports fields across schools & colleges, even during peak hours."
        />
        <FeatureCard
          title="86% faster reservations"
          description="Our platform streamlines the booking process, making it 86% faster than traditional methods."
        />
        <FeatureCard
          title="70% Peak-Hour Availability"
          description="70% of users successfully secure their preferred slots, even during high-demand periods."
        />
      </div>
    </div>
  );
};

export default Features;
