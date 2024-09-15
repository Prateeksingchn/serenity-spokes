import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyCycleBottomSection from "./WhyCycleBottomSection";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function WhyCycle() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  const [cyclingDistance, setCyclingDistance] = useState(0);
  const [timeFrame, setTimeFrame] = useState('today');
  const [achievement, setAchievement] = useState({ threshold: 0, text: "Start cycling to unlock achievements!" });

  const achievements = {
    today: [
      { threshold: 5, text: "Chai Break Rider! You've cycled the length of Marine Drive in Mumbai." },
      { threshold: 20, text: "City Explorer! You've traversed the distance of Delhi's Ring Road." },
      { threshold: 50, text: "Half-Century Champion! You've conquered a serious distance." },
      { threshold: 100, text: "Century Crusher! You've cycled from Mumbai to Pune!" },
    ],
    month: [
      { threshold: 100, text: "Green Commuter! You're significantly reducing your carbon footprint." },
      { threshold: 300, text: "Weekend Warrior! You've cycled the equivalent of Delhi to Agra and back." },
      { threshold: 500, text: "Endurance Enthusiast! You've virtually reached from Mumbai to Goa!" },
      { threshold: 1000, text: "Mega Mileage Master! You've cycled the length of India's western coastline!" },
    ],
    year: [
      { threshold: 1000, text: "Yearly Goal Getter! You're on track for an incredible cycling year." },
      { threshold: 3000, text: "Cross-Country Crusher! You've virtually cycled from Kanyakumari to Kashmir!" },
      { threshold: 5000, text: "Subcontinent Explorer! You've cycled the equivalent of India's Golden Quadrilateral!" },
      { threshold: 10000, text: "Cycling Maharaja! You've achieved a monumental yearly distance!" },
    ]
  };

  const calculateAchievement = (distance, frame) => {
    const relevantAchievements = achievements[frame];
    for (let i = relevantAchievements.length - 1; i >= 0; i--) {
      if (distance >= relevantAchievements[i].threshold) {
        return relevantAchievements[i];
      }
    }
    return { threshold: 0, text: "Every kilometer counts! Keep pedaling!" };
  };

  const handleDistanceChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCyclingDistance(value === '' ? 0 : parseFloat(value));
    }
  };

  const handleTimeFrameChange = (frame) => {
    setTimeFrame(frame);
  };

  useEffect(() => {
    const newAchievement = calculateAchievement(cyclingDistance, timeFrame);
    setAchievement(newAchievement);
  }, [cyclingDistance, timeFrame]);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const text = textRef.current;

    // Initially, set sections together and hide text
    gsap.set([left, right], { x: 0 });
    gsap.set(text, { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to([left, right], {
      x: (index) => (index === 0 ? "-50%" : "50%"),
      ease: "none",
      duration: 1,
    }).to(
      text,
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
      },
      0.5
    );

    return () => {
      // Clean up the ScrollTrigger instance
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#EBE8E5] overflow-hidden">
      <style>
        {`
          @keyframes pedal {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-pedal {
            animation: pedal 4s linear infinite;
            transform-origin: center;
            transform-box: fill-box;
          }
          .gradient-bg {
            background: linear-gradient(135deg, #0C292E 0%, #1A4A4F 50%, #2D6B70 100%);
          }
        `}
      </style>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="flex flex-col justify-center items-center py-10 px-4 text-center">
          <h1 className="text-5xl font-sans font-bold mb-4 text-[#0C292E]">
            Pedal Your Way to Adventure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the thrill of cycling, from urban explorations to mountain trails. 
            Join our community of passionate riders and embrace the journey on two wheels.
          </p>
        </div>
        <div className="flex-grow gap-4 flex relative">
          <div
            ref={leftRef}
            className="w-1/2 h-[70vh] rounded-3xl mb-4 ml-5 gradient-bg p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -top-8 right-3 w-40 h-40 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="bikeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#bikeGradient)" strokeWidth="1.5">
                  {/* Frame */}
                  <path d="M20,70 L35,40 L55,40 L75,55" />
                  <path d="M35,40 L45,70" />
                  <path d="M45,70 L75,70" />
                  
                  {/* Wheels */}
                  <circle cx="25" cy="70" r="20" />
                  <circle cx="75" cy="70" r="20" />
                  
                  {/* Spokes */}
                  <g className="animate-pedal">
                    <line x1="25" y1="50" x2="25" y2="90" />
                    <line x1="5" y1="70" x2="45" y2="70" />
                    <line x1="11" y1="56" x2="39" y2="84" />
                    <line x1="11" y1="84" x2="39" y2="56" />
                  </g>
                  <g className="animate-pedal">
                    <line x1="75" y1="50" x2="75" y2="90" />
                    <line x1="55" y1="70" x2="95" y2="70" />
                    <line x1="61" y1="56" x2="89" y2="84" />
                    <line x1="61" y1="84" x2="89" y2="56" />
                  </g>
                  
                  {/* Pedals */}
                  <circle cx="45" cy="70" r="5" className="animate-pedal" />
                  <line x1="45" y1="65" x2="45" y2="75" className="animate-pedal" />
                  
                  {/* Handlebars */}
                  <path d="M55,40 C60,35 70,40 65,45" />
                  
                  {/* Seat */}
                  <path d="M35,40 C30,35 25,35 20,40" />
                </g>
              </svg>
            </div>
            <span className="text-white text-sm uppercase tracking-wider mb-4 font-sans relative z-10">
              Featured Post
            </span>
            <h2 className="text-3xl font-sans text-white mb-4 font-bold relative z-10">
              Our Top Five Favorite Cycling Routes
            </h2>
            <p className="text-gray-300 mb-6 font-sans relative z-10">
              Discover the most scenic and challenging paths for cyclists of all
              levels, from urban trails to mountain adventures.
            </p>
            <button className="bg-white text-[#0C292E] px-4 py-2 rounded self-start text-sm uppercase tracking-wider font-sans relative z-10">
              Read More
            </button>
          </div>
          <div
            ref={rightRef}
            className="w-1/2 h-[70vh] rounded-3xl mb-4 mr-5 bg-gradient-to-br from-[#0C292E] to-[#2D6B70] text-white px-8 py-6 flex flex-col"
          >
            <h2 className="text-3xl font-bold mb-6">Cycling Achievement Playground</h2>
            <div className="flex-grow flex flex-col justify-center items-center">
              <div className="w-full max-w-md">
                <div className="mb-6">
                  <label htmlFor="distance" className="block text-sm font-medium mb-2">
                    Enter your cycling distance
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="distance"
                      value={cyclingDistance === 0 ? '' : cyclingDistance}
                      onChange={handleDistanceChange}
                      className="w-full px-12 py-3 bg-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-lg appearance-none"
                      placeholder="Enter distance"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 text-lg font-semibold">
                      km
                    </span>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="block text-sm font-medium mb-2">Time frame:</span>
                  <div className="flex space-x-4">
                    {['today', 'month', 'year'].map((frame) => (
                      <button
                        key={frame}
                        onClick={() => handleTimeFrameChange(frame)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                          timeFrame === frame 
                            ? "bg-white text-[#0C292E] shadow-lg" 
                            : "bg-white/20 hover:bg-white/30"
                        }`}
                      >
                        {frame.charAt(0).toUpperCase() + frame.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-white opacity-10 transition-all duration-500 ease-out"
                    style={{ width: `${achievement && achievement.threshold > 0 ? (cyclingDistance / achievement.threshold) * 100 : 0}%`, maxWidth: '100%' }}
                  ></div>
                  <h3 className="text-2xl font-semibold mb-4 relative z-10">Your Achievement</h3>
                  <p className="text-lg relative z-10 mb-4">{achievement ? achievement.text : "Start cycling to unlock achievements!"}</p>
                  {achievement && achievement.threshold > 0 && (
                    <div className="mt-4 relative z-10">
                      <div className="w-full bg-white/20 rounded-full h-4 mb-2">
                        <div 
                          className="bg-white rounded-full h-4 transition-all duration-500 ease-out"
                          style={{ width: `${Math.min((cyclingDistance / achievement.threshold) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-sm">
                        {cyclingDistance >= achievement.threshold 
                          ? "Congratulations! You've reached this milestone!" 
                          : `${(achievement.threshold - cyclingDistance).toFixed(1)} km more to reach the next milestone!`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            ref={textRef}
            className="absolute left-1/2 bottom-[1%] transform -translate-x-1/2 text-center py-12"
          >
            <h3 className="text-4xl font-sans font-semibold mb-2">Embrace the Journey</h3>
            <p className="text-gray-600 max-w-[300px] mx-auto font-sans">
              Every pedal stroke brings you closer to your goals and the beauty
              of the world around you.
            </p>
          </div>
        </div>
      </div>

      {/* Replace the bottom section with the new component */}
      <WhyCycleBottomSection />
    </section>
  );
}

export default WhyCycle;