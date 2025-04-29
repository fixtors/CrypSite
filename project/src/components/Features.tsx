import React from 'react';
import { Zap, Lock, DollarSign, BarChart3 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Instant Transactions',
      description: 'Execute trades and transfers within seconds, not minutes or hours. Our platform ensures swift processing of all transactions.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Secure Wallets',
      description: 'Industry-leading security protocols protect your assets. Multi-factor authentication and encryption keep your investments safe.'
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Low Fees',
      description: 'Competitive fee structure designed to maximize your profits. Pay less on transactions and keep more of your investments.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Advanced Analytics',
      description: 'Real-time data and insights to inform your investment decisions. Track market trends and optimize your crypto portfolio.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose CryptoNex?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our platform offers everything you need to navigate the crypto world with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;