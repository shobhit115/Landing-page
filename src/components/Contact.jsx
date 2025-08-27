import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'codefest2025@gmail.com',
      link: 'mailto:codefest2025@gmail.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: '📱',
      title: 'Instagram',
      value: '@codefest2025',
      link: 'https://instagram.com/codefest2025'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Codefest 2025',
      link: 'https://linkedin.com/company/codefest2025'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">We'd love to hear from you!</p>
        </div>

        {/* Responsive Grid: 1 column on mobile, 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors text-center"
            >
              <div className="text-3xl mb-3">{contact.icon}</div>
              <h4 className="font-semibold mb-1">{contact.title}</h4>
              <p className="text-gray-400 text-sm">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
