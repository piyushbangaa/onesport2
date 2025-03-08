import React from 'react';

const Video = () => {
  return (
    <div className="mt-15 w-screen h-screen flex items-center justify-center bg-black p-[45px] box-border overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="src/assets/Screen Recording 2025-03-08 at 1.35.24 AM.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
