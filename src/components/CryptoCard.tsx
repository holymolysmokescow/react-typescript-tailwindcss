import React from 'react';
import { ReactComponent as InfoCard } from '../assets/svgs/info-card.svg';

type CryptoCardProps = {
  coin: {
    logoUrl: string;
    name: string;
    ticker: string;
    price: number;
    currency: string;
    change: number;
    isUp: boolean;
    changeType: string;
    tvl: number;
    popularPairs: string[];
  }
}

export const CryptoCard = (props: CryptoCardProps) => {
  const {
    logoUrl,
    name,
    ticker,
    price,
    currency,
    change,
    isUp,
    changeType,
    tvl,
    popularPairs,
  } = props.coin;

  const getImgUrl = (urn: string) => require(`../assets/svgs/${urn}.svg`);

  return (
    <div className="container grid justify-center mb-12">
      <div className="col-start-1 row-start-1 mt-12">
        <InfoCard className="infoCard" />
      </div>

      <div className="col-start-1 row-start-1">
        <div className="grid justify-center">
          <div className="iconBgCrcl grid justify-center content-center">
            <img src={getImgUrl(ticker)} alt={name} />
          </div>
        </div>

        <div className="mt-4">
          <div className="paraValue mb-2">
            <p>{name} ({ticker})</p>
          </div>

          <div className="inputBg flex">
            <p className="flex-1" />
            <p className="shrink-0 inputValue">
              {currency}{price}
            </p>
            <p className="flex-1 inputChange" style={{ color: isUp ? '#00FFA3' : '#FF4D4D' }}>
              {isUp ? '+' : '-'}{change}{changeType}
            </p>
          </div>

          <div className="paraValue mb-2">
            <p>Price</p>
          </div>

          <div className="inputBg">
            <p className="inputValue">
              {currency}{tvl}
            </p>
          </div>

          <div className="paraValue mb-2">
            <p>TVL</p>
          </div>

          <div className="minIconBg flex flex-row justify-evenly w-6">
            {popularPairs.map((pop) => (
              <img
                key={pop}
                alt={pop}
                width="24"
                height="24"
                src={getImgUrl(pop)}
              />
            ))}
          </div>
          <p className="paraValue">Popular pairs</p>
        </div>
      </div>
    </div>
  );
};
