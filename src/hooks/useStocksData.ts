import { useEffect, useState } from 'react';
import goldImg from '../assets/gold.png';
import lukolImg from '../assets/lukol.png';
import neftImg from '../assets/neft.png';
import sberImg from '../assets/sber.png';
import tbankImg from '../assets/tbank.png';
import yandexImg from '../assets/yandex.png';
import { StockItem } from '../types';

export const TICKER_TO_IMAGE: Record<string, string> = {
  SBER: sberImg,
  T: tbankImg,
  PLZL: goldImg,
  YDEX: yandexImg,
  TRNFP: neftImg,
  LKOH: lukolImg,
};

export const useStocksData = () => {
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/47f58504a837227f958a026649960aac/raw/');
      const data = (await response.json()) as { stocks: StockItem[] };
      setStocks(data.stocks.map(item => ({ ...item, img: TICKER_TO_IMAGE[item.ticker] })));
      setLoading(false);
    };

    fetchData();
  }, []);

  return { stocks, loading };
};
