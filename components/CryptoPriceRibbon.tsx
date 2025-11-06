import React, { useState, useEffect } from 'react';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoPriceRibbon: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        if (!response.ok) throw new Error('Failed to fetch coin data');
        const data: Coin[] = await response.json();
        setCoins(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  const allCoins = [...coins, ...coins];

  return (
    // Added margin-top (mt-10 on small screens, mt-16 on medium and above)
    <section className="py-2 mt-10 md:mt-16 bg-[#0D0D0D] border-y border-gray-800">
      <div className="marquee-container overflow-hidden whitespace-nowrap">
        <div className="marquee flex animate-marquee">
          {loading ? (
            <div className="flex-shrink-0 flex items-center space-x-4 mx-8">
              <span className="text-gray-400">Loading coin data...</span>
            </div>
          ) : (
            allCoins.map((coin, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center space-x-4 mx-8 group"
                data-cursor-hover
              >
                <span className="text-[#9CA3AF] text-sm font-bold">
                  {coin.symbol.toUpperCase()}
                </span>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-200">
                  ${coin.current_price.toLocaleString()}
                </span>
                <span
                  className={
                    coin.price_change_percentage_24h > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default CryptoPriceRibbon;
