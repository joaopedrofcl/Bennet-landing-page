import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './Graficos.css';

// Registrando os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graficos: React.FC = () => {
  const [bitcoinData, setBitcoinData] = useState<any>(null);
  const [cryptoComparisonData, setCryptoComparisonData] = useState<any>(null);

  useEffect(() => {
    // Função para buscar os dados do Bitcoin em relação ao Real
    const fetchBitcoinData = async () => {
      const res = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?currency=BRL&for=yesterday');
      const data = await res.json();
      const dates = Object.keys(data.bpi);
      const values = Object.values(data.bpi);

      setBitcoinData({
        labels: dates,
        datasets: [
          {
            label: 'Crescimento do Bitcoin (BRL)',
            data: values,
            fill: false,
            borderColor: '#f39c12',
            tension: 0.1,
          },
        ],
      });
    };

    // Função para buscar os dados das criptomoedas
    const fetchCryptoComparisonData = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=bitcoin,ethereum,ripple,litecoin');
      const data = await res.json();

      setCryptoComparisonData({
        labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin'],
        datasets: [
          {
            label: 'Valor das Criptomoedas no Último Mês (BRL)',
            data: data.map((coin: any) => coin.current_price),
            backgroundColor: ['#f39c12', '#8e44ad', '#3498db', '#2ecc71'],
            borderColor: ['#f39c12', '#8e44ad', '#3498db', '#2ecc71'],
            borderWidth: 1,
          },
        ],
      });
    };

    // Chama as funções para buscar os dados
    fetchBitcoinData();
    fetchCryptoComparisonData();
  }, []);

  return (
    <section className="graficos">
      <h2>Gráficos</h2>
      <h3>Os gráficos a seguir foram feitos usando Chart.js e os dados consumidos de uma API.</h3>

      <div className="graficos__chart">
        {bitcoinData && (
          <div className="graficos__line-chart">
            <h4>Crescimento do Bitcoin em relação ao Real (Último Mês)</h4>
            <Line data={bitcoinData} />
          </div>
        )}

        {cryptoComparisonData && (
          <div className="graficos__bar-chart">
            <h4>Comparação do valor do Bitcoin com outras criptomoedas (Último Mês)</h4>
            <Bar data={cryptoComparisonData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Graficos;
