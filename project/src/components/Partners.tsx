import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'MetaMask',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png',
      description: 'Leading crypto wallet provider'
    },
    {
      name: 'Binance',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
      description: 'Global cryptocurrency exchange'
    },
    {
      name: 'Coinbase',
      logo: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png',
      description: 'Popular crypto exchange platform'
    },
    {
      name: 'Ledger',
      logo: 'https://www.ledger.com/favicon.ico',
      description: 'Hardware wallet security'
    }
  ];

  const testimonials = [
    {
      quote: "CryptoNex has revolutionized how I manage my crypto portfolio. The intuitive interface and real-time analytics have helped me make informed decisions.",
      name: "Alex Johnson",
      title: "Crypto Investor",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
    },
    {
      quote: "The security features are top-notch! I feel confident that my assets are protected. The low transaction fees are also a major plus.",
      name: "Sophia Rodriguez",
      title: "DeFi Enthusiast",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
    },
    {
      quote: "As someone new to cryptocurrency, CryptoNex made the learning curve much less steep. Their educational resources are invaluable.",
      name: "Michael Chen",
      title: "New Crypto User",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We collaborate with top companies in the crypto space to provide the best experience.
          </p>
        </div>
        
        {/* Partners/Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 w-16 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{partner.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
          What Our Users Say
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-10 w-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;