import React, { useState } from 'react';
import '../App.css';
import { CryptoCard } from './CryptoCard';
import { ReactComponent as TrendingLogo } from '../assets/svgs/activity.svg';
import data from '../asset-data.json';

export const TrendingCryptoList = () => {
  const [coinData] = useState(() => data);

  return (
    <div className="2xl:pt-44 xl:pt-28 lg:pt-10 md:pt-8 pl-12 pr-12">
      <div className="flex flex-row items-center">
        <TrendingLogo style={{ width: 16, height: 16 }} />
        <p className="trendingAssets">Trending Assets</p>
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-12">
        {coinData.map((coin) => (
          <CryptoCard key={coin.ticker} coin={coin} />
        ))}
      </div>
    </div>
  )
}
