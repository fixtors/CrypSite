import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-base text-gray-600 dark:text-gray-400">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "What is cryptocurrency?",
      answer: "Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on a technology called blockchain. Unlike traditional currencies issued by governments (fiat), cryptocurrencies are typically decentralized and operate on distributed ledger technology."
    },
    {
      question: "How do I start investing in crypto?",
      answer: "To start investing in cryptocurrency, you'll need to: 1) Choose a reputable exchange or platform, 2) Complete identity verification, 3) Connect a payment method, 4) Place your first order, and 5) Consider secure storage options like hardware wallets for larger investments. Start with small amounts while learning."
    },
    {
      question: "Is cryptocurrency safe?",
      answer: "Cryptocurrency safety has multiple dimensions. The blockchain technology behind most cryptocurrencies is generally secure, but there are risks associated with exchanges, wallets, market volatility, and scams. Using reputable exchanges, enabling two-factor authentication, and storing large amounts in hardware wallets can help mitigate some of these risks."
    },
    {
      question: "What is a crypto wallet?",
      answer: "A crypto wallet is a digital tool that allows you to store, send, and receive cryptocurrencies. Wallets contain private keys (secret codes) that prove your ownership of digital assets and allow you to authorize transactions. They come in various forms: software wallets (hot wallets) that are connected to the internet and hardware wallets (cold wallets) that are physical devices offering offline storage."
    },
    {
      question: "What are gas fees?",
      answer: "Gas fees are transaction fees paid to miners or validators who process transactions on blockchain networks like Ethereum. These fees compensate for the computational energy required to validate and add transactions to the blockchain. Gas fees fluctuate based on network congestion—when more people are using the network, fees typically increase."
    },
    {
      question: "What is the difference between coins and tokens?",
      answer: "Coins (like Bitcoin or Ethereum) operate on their own blockchain and typically function as a medium of exchange or store of value. Tokens are built on existing blockchains (most commonly Ethereum) and represent assets or utilities within specific applications or ecosystems. For example, tokens might represent voting rights, access to services, or ownership of digital or physical assets."
    }
  ];
  
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about cryptocurrency and our platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions? We're here to help.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;