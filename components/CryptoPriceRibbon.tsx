import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
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
    const interval = setInterval(fetchCoinData, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  const allCoins = [...coins, ...coins];

  return (
    <section className="relative py-2 mt-10 md:mt-16 bg-[#0D0D0D] border-y border-gray-800 overflow-hidden">
      {/* Faded edges for seamless scroll */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

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
                className="flex-shrink-0 flex items-center space-x-4 mx-8 group transition-all duration-300 hover:scale-[1.05]"
                data-cursor-hover
              >
                {/* Coin Icon */}
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-shadow duration-300"
                  loading="lazy"
                />

                {/* Symbol */}
                <span className="text-[#C7A94A] text-sm font-semibold tracking-wide group-hover:text-[#E2C775] transition-colors duration-200">
                  {coin.symbol.toUpperCase()}
                </span>

                {/* Price */}
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                  ${coin.current_price.toLocaleString()}
                </span>

                {/* Price Change with Dynamic Pulse */}
                <span
                  className={`flex items-center text-sm font-medium ${
                    coin.price_change_percentage_24h >= 0
                      ? 'text-green-400 glow-green'
                      : 'text-red-400 glow-red'
                  }`}
                >
                  {coin.price_change_percentage_24h >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  <span className="pulse">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Subtle glowing animation for green and red */
        .glow-green {
          animation: glowGreen 3s ease-in-out infinite alternate;
        }
        .glow-red {
          animation: glowRed 3s ease-in-out infinite alternate;
        }
        @keyframes glowGreen {
          0% {
            text-shadow: 0 0 4px rgba(34, 197, 94, 0.2);
          }
          100% {
            text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
          }
        }
        @keyframes glowRed {
          0% {
            text-shadow: 0 0 4px rgba(239, 68, 68, 0.2);
          }
          100% {
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
          }
        }

        /* Pulse for the percentage text */
        .pulse {
          animation: pulse 2.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default CryptoPriceRibbon;
