import React from 'react';

const Schedule = () => {
  const timeline = [
    {
      date: '1 September 2025',
      title: 'Registration Opens',
      description: 'Start forming your teams and register for the hackathon',
      icon: '🚀'
    },
    {
      date: '12 September 2025',
      title: 'Registration Closes',
      description: "Last date to register. Don't miss out!",
      icon: '⏰'
    },
    {
      date: '15 September 2025',
      title: 'Hackathon Day',
      description: '24 hours of intense coding, building, and innovation',
      icon: '💻'
    },
    {
      date: '20 September 2025',
      title: 'Results Announced',
      description: 'Winners announced and prizes distributed',
      icon: '🏆'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-400">
            Mark your calendars and don't miss these important dates
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 hidden md:block"></div>
          
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                <div 
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } text-center md:text-left mb-4 md:mb-0`}
                >
                  <div className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-3">{event.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                    <p className="text-indigo-400 font-medium mb-2">{event.date}</p>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10 w-4 h-4 bg-indigo-500 rounded-full border-4 border-black shadow-lg hidden md:block"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
