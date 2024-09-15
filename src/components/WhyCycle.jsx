import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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
      { threshold: 5, text: "Morning Energizer! You've cycled the length of Central Park." },
      { threshold: 20, text: "Urban Explorer! You've traversed Manhattan." },
      { threshold: 50, text: "Half-Century Rider! You've conquered a serious distance." },
      { threshold: 100, text: "Century Crusher! You've completed a milestone ride." },
    ],
    month: [
      { threshold: 100, text: "Consistent Commuter! You're reducing your carbon footprint." },
      { threshold: 300, text: "Weekend Warrior! You're making the most of your free time." },
      { threshold: 500, text: "Endurance Enthusiast! You're building impressive stamina." },
      { threshold: 1000, text: "Mega Mileage Master! You've cycled the length of Britain!" },
    ],
    year: [
      { threshold: 1000, text: "Yearly Goal Getter! You're on track for a great cycling year." },
      { threshold: 3000, text: "Cross-Country Crusher! You've virtually cycled across the USA." },
      { threshold: 5000, text: "Globe Trotter! You've cycled 1/8th of the Earth's circumference!" },
      { threshold: 10000, text: "Cycling Centurion! You've achieved a monumental yearly distance!" },
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
    const distance = parseFloat(e.target.value);
    setCyclingDistance(isNaN(distance) ? 0 : distance);
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
            className="w-1/2 h-[70vh] rounded-3xl mb-4 mr-5 bg-gradient-to-br from-[#0C292E] to-[#2D6B70] text-white p-8 flex flex-col"
          >
            <h2 className="text-3xl font-bold mb-6">Cycling Achievement Playground</h2>
            <div className="flex-grow flex flex-col justify-center items-center">
              <div className="w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="distance" className="block text-sm font-medium mb-2">
                    Enter your cycling distance (km):
                  </label>
                  <input
                    type="number"
                    id="distance"
                    value={cyclingDistance}
                    onChange={handleDistanceChange}
                    className="w-full px-3 py-2 bg-white/10 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter distance"
                  />
                </div>
                <div className="mb-6">
                  <span className="block text-sm font-medium mb-2">Time frame:</span>
                  <div className="flex space-x-4">
                    {['today', 'month', 'year'].map((frame) => (
                      <button
                        key={frame}
                        onClick={() => handleTimeFrameChange(frame)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                          timeFrame === frame ? "bg-white text-[#0C292E]" : "bg-white/20"
                        }`}
                      >
                        {frame}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-white opacity-10 transition-all duration-500 ease-out"
                    style={{ width: `${achievement && achievement.threshold > 0 ? (cyclingDistance / achievement.threshold) * 100 : 0}%`, maxWidth: '100%' }}
                  ></div>
                  <h3 className="text-xl font-semibold mb-4 relative z-10">Your Achievement</h3>
                  <p className="text-lg relative z-10">{achievement ? achievement.text : "Start cycling to unlock achievements!"}</p>
                  {achievement && achievement.threshold > 0 && (
                    <p className="mt-4 text-sm relative z-10">
                      {cyclingDistance >= achievement.threshold 
                        ? "Congratulations! You've reached this milestone!" 
                        : `${achievement.threshold - cyclingDistance} km more to reach the next milestone!`}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300 mb-2">Unlock new achievements and track your progress!</p>
              <button className="bg-white text-[#0C292E] px-6 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#EBE8E5]">
                View All Achievements
              </button>
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

      {/* Revamped bottom section */}
      <div className="w-full bg-gradient-to-b from-[#EBE8E5] to-[#F8F8F8] ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Why Cycling is Good section */}
          <div className="rounded-lg py-4 mb-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0C292E]">
              Why Cycling is Good for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Physical Health",
                  description:
                    "Cycling is a low-impact exercise that improves cardiovascular fitness, builds muscle strength, and enhances overall endurance.",
                  icon: "🚴‍♂️",
                },
                {
                  title: "Mental Wellbeing",
                  description:
                    "Regular cycling can reduce stress, anxiety, and depression while boosting mood and cognitive function.",
                  icon: "🧠",
                },
                {
                  title: "Environmental Impact",
                  description:
                    "Choosing a bike over a car reduces carbon emissions, contributing to a cleaner and healthier environment.",
                  icon: "🌿",
                },
                {
                  title: "Social Connections",
                  description:
                    "Cycling can be a social activity, allowing you to join clubs, participate in events, and make new friends.",
                  icon: "👥",
                },
                {
                  title: "Cost-Effective",
                  description:
                    "Compared to owning and maintaining a car, cycling is a more affordable mode of transportation.",
                  icon: "💰",
                },
                {
                  title: "Exploration",
                  description:
                    "Cycling opens up new ways to explore your surroundings, discover hidden gems, and experience nature.",
                  icon: "🗺️",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-4xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0C292E]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completely revamped Elevate Your Ride section */}
          <div className="pb-10">
            <h2 className="text-3xl font-semibold mb-12 text-center text-[#0C292E] leading-tight">
              Elevate Your Ride: Where Passion Meets Performance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0C292E] text-white p-8 rounded-3xl flex flex-col justify-between transform transition duration-300 hover:shadow-xl">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Premium Bikes</h3>
                  <p className="mb-6">Discover our curated selection of top-tier bicycles, engineered for peak performance and unmatched style.</p>
                  <ul className="list-disc list-inside mb-8">
                    <li>Carbon fiber frames</li>
                    <li>Electronic shifting systems</li>
                    <li>Aerodynamic designs</li>
                    <li>Custom color options</li>
                  </ul>
                </div>
                <div className="relative inline-block group">
                  <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:bg-opacity-80"></span>
                  <Link 
                    to="/shop" 
                    className="relative inline-block px-6 py-3 text-[#0C292E] font-semibold transition-colors duration-300 rounded-full group-hover:text-[#1A4A4F]"
                  >
                    Explore Our Collection
                  </Link>
                </div>
              </div>

              <div className="relative h-80 md:h-auto overflow-hidden rounded-3xl transform transition duration-300 hover:shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1485965120208-91b3a4cc78be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Premium Bike" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <p className="absolute bottom-4 left-4 text-white text-lg font-semibold group-hover:bottom-6 transition-all duration-300">Featured: Carbon Aero Pro</p>
              </div>

              <div className="relative h-80 md:h-auto overflow-hidden rounded-3xl transform transition duration-300 hover:shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Pro Accessories" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <p className="absolute bottom-4 left-4 text-white text-lg font-semibold group-hover:bottom-6 transition-all duration-300">High-Performance Gear</p>
              </div>

              <div className="bg-[#0C292E] text-white p-8 rounded-3xl flex flex-col justify-between transform transition duration-300 hover:shadow-xl">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Expert Fitting & Pro Accessories</h3>
                  <p className="mb-6">Experience our personalized fitting service and elevate your cycling with top-tier accessories.</p>
                  <ul className="list-disc list-inside mb-8">
                    <li>3D body scanning technology</li>
                    <li>Customized bike adjustments</li>
                    <li>Pro-level components</li>
                    <li>Performance-enhancing gear</li>
                  </ul>
                </div>
                <div className="relative inline-block group">
                  <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:bg-opacity-80"></span>
                  <Link 
                    to="/booking" 
                    className="relative inline-block px-6 py-3 text-[#0C292E] font-semibold transition-colors duration-300 rounded-full group-hover:text-[#1A4A4F]"
                  >
                    Book a Fitting Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyCycle;