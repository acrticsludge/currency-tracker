"use client";
import CryptoBackgroundImage from "@/modules/CryptoBackgroundImage";
import { useState, useEffect } from "react";
import CryptoCurrencyCard from "@/modules/CryptoCurrencyCard";
export default function CryptoPage() {
  const [currencies, setCurrencies] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);
  const [rate, setRate] = useState<Record<string, number> | null>(null);
  const [base, setBase] = useState<string>("BTC");

  useEffect(() => {
    async function fetchCryptoCurrencies() {
      try {
        const res = await fetch(`/api/crypto/currencies`);

        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          setError(data.error);
          return;
        }
        const parsedData = Object.entries(data.currencies);
        setCurrencies(parsedData);
        setError("");
        console.log(parsedData);
      } catch {
        setError("Failed to load rates");
      }
    }
    fetchCryptoCurrencies();
  }, []);

  useEffect(() => {
    async function fetchCryptoCurrencies() {
      try {
        const res = await fetch(`/api/crypto/collect?from=${base}`);

        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          setError(data.error);
          return;
        }
        setRate(data.result);
        setError2("");
      } catch {
        setError("Failed to load rates");
      }
    }
    fetchCryptoCurrencies();
  }, [base]);

  return (
    <div className="">
      <CryptoBackgroundImage />
      <div className="relative z-10 flex flex-col items-center justify-center pt-14 pb-8 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold text-center
      bg-linear-to-r from-blue-400 via-purple-400 to-pink-400
      bg-clip-text text-transparent mb-3"
        >
          Crypto Rates
        </h1>

        <p className="text-gray-200 text-center text-base md:text-lg max-w-xl leading-relaxed">
          View real-time crypto rates, updated every minute
        </p>
      </div>
      <div className="relative z-10 flex justify-center px-4 pb-10">
        <div
          className="
      flex items-center gap-4
      rounded-2xl
      bg-white/10 backdrop-blur-md
      border border-white/15
      px-6 py-4
      shadow-lg
        "
        >
          <label
            htmlFor="base"
            className="text-sm font-medium text-gray-200 whitespace-nowrap"
          >
            Base currency
          </label>

          <div className="relative w-56">
            <select
              id="base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="
        w-full appearance-none
        rounded-xl
        bg-white text-gray-900
        px-4 py-2.5 pr-10
        text-sm font-medium
        shadow-sm
        transition
        border border-gray-300
        hover:border-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-blue-400/60
        focus:border-blue-500
          "
            >
              {currencies.map(([code, name]: [string, string]) => (
                <option key={code} value={code}>
                  {code} — {name}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currencies.map(([code, name]: [string, string]) => (
            <CryptoCurrencyCard
              key={code}
              currency={[code, name]}
              rate={rate ? rate[code] : 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
