import { useState } from 'react';
import video1 from '../select.mp4'
import video2 from '../design.mp4'
import video3 from '../earn.mp4'

const Steps = () => {
    const [activeSection, setActiveSection] = useState(1);
    const [isFading, setIsFading] = useState(false);
  
    const videos = [
      video1,
      video2,
      video3
    ];
    const handleSectionChange = (section) => {
        if (activeSection !== section) {
          setIsFading(true);
          setTimeout(() => {
            setActiveSection(section);
            setIsFading(false);
          }, 300);  // Transition duration in ms
        }
      };


    return(
        <div className="antialiased bg-gray-100 mt-28 flex justify-center">
            <div className="rounded  md:w-3/4 max-w-5xl flex align-middle justify-center">
                <div className=" grid grid-cols-1 sm:grid-cols-2 h-full gap-16 p-8">
                    <div>
                        <h1 className="text-5xl sm:translate-y-12 font-bold">Start With $0 Investment</h1>
                        <div
            className={` mt-16 sm:mt-32 cursor-pointer p-4 ${activeSection === 1 ? " text-green-600 border-b border-green-500" : "border-transparent"}`}
            onClick={() => handleSectionChange(1)}
          >
            <h2 className="text-xl font-semibold">1. Select your product</h2>
            <p className="text-gray-600">Choose from over 1000 top-quality products including brands you know and love.</p>
          </div>

          <div
            className={`cursor-pointer p-4  ${activeSection === 2 ? " text-green-600 border-b border-green-500" : "border-transparent"}`}
            onClick={() => handleSectionChange(2)}
          >
            <h2 className="text-xl font-semibold">2. Add your design</h2>
            <p className="text-gray-600">Designing your products is easy and fun!</p>
          </div>

          <div
            className={`cursor-pointer p-4 ${activeSection === 3 ? " text-green-600 border-b border-green-500" : "border-transparent"}`}
            onClick={() => handleSectionChange(3)}
          >
            <h2 className="text-xl font-semibold">3. Start selling</h2>
            <p className="text-gray-600">You set your profit margin, we take care of production and delivery.</p>
          </div>
          <button className="mt-12 hidden sm:block bg-lime-700 px-4 py-2 text-white rounded-md hover:bg-lime-300 transition-all hover:text-black font-bold">
            Start Designing</button>
                    </div>
                    <div>
                        <video
                        autoPlay
                        loop
                            src={videos[activeSection - 1]}
                            alt={`Section ${activeSection}`}
                            className={`object-cover rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
                            isFading ? "opacity-0" : "opacity-100"
                            }`}
                        />
                    </div>
                    <button className="mt-12 mx-16 sm:hidden bg-lime-700 px-2 py-3 text-white rounded-md hover:bg-lime-300 transition-all hover:text-black font-bold">
                    Start Designing</button>
                </div>
            </div>
        </div>
    )
}

export default Steps;