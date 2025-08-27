import React from 'react';

const About = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Amazing Prizes',
      description: 'Win exciting prizes and recognition for your innovative solutions'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with like-minded developers, mentors, and industry experts'
    },
    {
      icon: '🚀',
      title: 'Exposure',
      description: 'Showcase your skills and get noticed by potential employers'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Transform your creative ideas into working prototypes'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Codefest 2025
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A 24-hour hackathon for students to build, innovate, and collaborate. 
            Join us for an incredible journey of coding, creativity, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
