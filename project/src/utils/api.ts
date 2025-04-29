// API utilities for fetching cryptocurrency data

/**
 * Fetches top cryptocurrency prices from CoinGecko API
 * @returns Array of cryptocurrency objects with price data
 */
export const fetchCryptoPrices = async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    
    // Return mock data as fallback if API call fails
    return [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        current_price: 43150.25,
        price_change_percentage_24h: 2.54,
        market_cap: 845762930926
      },
      {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        current_price: 3275.89,
        price_change_percentage_24h: 1.27,
        market_cap: 393797371173
      },
      {
        id: 'binancecoin',
        symbol: 'bnb',
        name: 'BNB',
        image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
        current_price: 580.42,
        price_change_percentage_24h: -0.85,
        market_cap: 88642045933
      },
      {
        id: 'solana',
        symbol: 'sol',
        name: 'Solana',
        image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
        current_price: 147.98,
        price_change_percentage_24h: 3.61,
        market_cap: 65282168459
      },
      {
        id: 'ripple',
        symbol: 'xrp',
        name: 'XRP',
        image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
        current_price: 0.52,
        price_change_percentage_24h: -1.32,
        market_cap: 29127215819
      }
    ];
  }
};