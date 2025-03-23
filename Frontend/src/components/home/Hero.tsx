import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const images = [
    "https://pbs.twimg.com/media/GdAURdoW4AAn8o1?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GdAURdqWYAAA8in?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GdAURduXEAAwAZn?format=jpg&name=4096x4096",
    "https://media.licdn.com/dms/image/v2/D4D22AQHRwLS6UH6oBg/feedshare-shrink_800/feedshare-shrink_800/0/1728625702353?e=1745452800&v=beta&t=oGe7WvN8mTiGvo4SmScXaQD39NxSZRTVo-v_crYWnGg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column (Text) */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Empowering Developers with the Best Resources
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your one-stop destination for curated developer resources.
              Discover, learn, and grow with our comprehensive collection.
            </p>
            <button className="bg-black hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md">
              Explore Resources
            </button>
          </div>

          {/* Right Column (Carousel) */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-500 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;