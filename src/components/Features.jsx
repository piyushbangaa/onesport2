import React from "react";
import Tilt from "react-parallax-tilt";

const FeatureCard = ({ imageSrc, h1 }) => {
  return (
    <Tilt
      className="mt-20 w-[300px] h-[260px] bg-black border-2 rounded-lg shadow-xl ml-7 flex justify-center items-center"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={500}
    >
      <img
        src={imageSrc}
        alt="Feature"
        className="w-full h-full object-cover rounded-md"
      />
    </Tilt>
  );
};

const Features = () => {
  return (
    <div className="min-h-[550px] mt-20 ml-20">
      <h1 className="text-5xl font-bold">
        Trusted by athletes, teams, and sports enthusiasts for seamless turf and <br /> field bookings
      </h1>
      <div className="flex flex-col md:flex-row gap-12">
        <FeatureCard imageSrc="https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <FeatureCard imageSrc="https://images.unsplash.com/photo-1602357280104-742c517a1d82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbCUyMGNvdXJ0fGVufDB8fDB8fHww" />
        <FeatureCard imageSrc="https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVubmlzJTIwY291cnR8ZW58MHx8MHx8fDA%3D" />
      </div>
    </div>
  );
};

export default Features;
