import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function WhyCycle() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

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
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="flex justify-center items-center py-10">
          <h1 className="text-4xl font-serif font-bold text-center py-8">
            The Cycling Journal
          </h1>
        </div>
        <div className="flex-grow gap-4 flex relative">
          <div
            ref={leftRef}
            className="w-1/2 h-[73vh] rounded-2xl mb-4 ml-5 bg-[#0C292E] p-8 flex flex-col justify-center"
          >
            <span className="text-white text-sm uppercase tracking-wider mb-4">
              Featured Post
            </span>
            <h2 className="text-3xl font-serif text-white mb-4">
              Our Top Five Favorite Cycling Routes
            </h2>
            <p className="text-gray-300 mb-6">
              Discover the most scenic and challenging paths for cyclists of all
              levels, from urban trails to mountain adventures.
            </p>
            <button className="bg-white text-[#0C292E] px-4 py-2 rounded self-start text-sm uppercase tracking-wider">
              Read More
            </button>
          </div>
          <div
            ref={rightRef}
            className="w-1/2 h-[73vh] rounded-2xl mb-4 mr-5 overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGluZ3xlbnwwfDB8MHx8fDA%3D"
              alt="Cycling in Nature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-8">
              <h3 className="text-2xl font-semibold mb-2">Featured Route</h3>
              <p className="text-center">
                Explore our top pick for this month's most exhilarating cycling
                experience.
              </p>
            </div>
          </div>
          <div
            ref={textRef}
            className="absolute left-1/2 bottom-[1%] transform -translate-x-1/2 text-center py-12"
          >
            <h3 className="text-4xl font-semibold mb-2">Embrace the Journey</h3>
            <p className="text-gray-600 max-w-[300px] mx-auto">
              Every pedal stroke brings you closer to your goals and the beauty
              of the world around you.
            </p>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="w-full text-black bg-[#EBE8E5] pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-20 text-center text-[#0C292E] leading-tight">
            Elevate Your Ride:
            <br />
            Where Passion Meets Performance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Premium Bikes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C292E] to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Premium Bikes
                </h3>
              </div>
              <div className="p-6">
                <p className="text-[#4A5568] mb-4">
                  Discover our curated selection of top-tier bicycles,
                  engineered for peak performance and unmatched style.
                </p>
                <a
                  href="#"
                  className="text-[#0C292E] font-semibold hover:underline"
                >
                  Explore Collection →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGN5Y2xpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="Expert Fitting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C292E] to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Expert Fitting
                </h3>
              </div>
              <div className="p-6">
                <p className="text-[#4A5568] mb-4">
                  Experience our personalized fitting service, ensuring your
                  ride is tailored for comfort and efficiency.
                </p>
                <a
                  href="#"
                  className="text-[#0C292E] font-semibold hover:underline"
                >
                  Book Appointment →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y3ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Pro Accessories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C292E] to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Pro Accessories
                </h3>
              </div>
              <div className="p-6">
                <p className="text-[#4A5568] mb-4">
                  Elevate your cycling experience with our range of
                  high-performance accessories and gear.
                </p>
                <a
                  href="#"
                  className="text-[#0C292E] font-semibold hover:underline"
                >
                  Shop Accessories →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 bg-[#0C292E] text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFFFFF"
                  d="M39.9,-65.7C54.1,-60.5,69.3,-53.4,79.9,-41.7C90.5,-30,96.4,-15,93.9,-1.4C91.4,12.1,80.4,24.3,71.1,37.1C61.8,50,54.1,63.7,42.5,71.5C30.9,79.4,15.4,81.5,1.2,79.6C-13.1,77.7,-26.2,71.8,-36.5,63.5C-46.8,55.2,-54.3,44.5,-63.3,33.3C-72.3,22.1,-82.8,11,-85.6,-1.6C-88.4,-14.3,-83.5,-28.5,-74.3,-39C-65.1,-49.5,-51.7,-56.2,-38.8,-62.1C-25.9,-68,-13,-73.1,0.5,-74C13.9,-74.8,27.8,-71.4,39.9,-65.7Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-6">
                Join Our Cycling Community
              </h3>
              <p className="mb-8 max-w-2xl">
                Be part of a passionate group of cyclists. Get exclusive access
                to events, tips from pros, and special offers tailored just for
                you.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#0C292E]"
                />
                <button className="bg-white text-[#0C292E] px-8 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyCycle;
