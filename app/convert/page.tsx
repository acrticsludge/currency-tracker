"use client";
import BackgroundImage from "@/modules/BackgroundImage";
import { useState, useEffect } from "react";

export default function CurrencyConvert() {
  const currencies: [string, string, string, string][] = [
    ["AED", "United Arab Emirates Dirham", "United Arab Emirates", "AE"],
    ["AFN", "Afghan Afghani", "Afghanistan", "AF"],
    ["ALL", "Albanian Lek", "Albania", "AL"],
    ["AMD", "Armenian Dram", "Armenia", "AM"],
    ["AOA", "Angolan Kwanza", "Angola", "AO"],
    ["ARS", "Argentine Peso", "Argentina", "AR"],
    ["AUD", "Australian Dollar", "Australia", "AU"],
    ["AWG", "Aruban Florin", "Aruba", "AW"],
    ["AZN", "Azerbaijani Manat", "Azerbaijan", "AZ"],
    [
      "BAM",
      "Bosnia and Herzegovina Convertible Mark",
      "Bosnia and Herzegovina",
      "BA",
    ],
    ["BBD", "Barbadian Dollar", "Barbados", "BB"],
    ["BDT", "Bangladeshi Taka", "Bangladesh", "BD"],
    ["BGN", "Bulgarian Lev", "Bulgaria", "BG"],
    ["BHD", "Bahraini Dinar", "Bahrain", "BH"],
    ["BIF", "Burundian Franc", "Burundi", "BI"],
    ["BMD", "Bermudian Dollar", "Bermuda", "BM"],
    ["BND", "Brunei Dollar", "Brunei", "BN"],
    ["BOB", "Bolivian Boliviano", "Bolivia", "BO"],
    ["BRL", "Brazilian Real", "Brazil", "BR"],
    ["BSD", "Bahamian Dollar", "Bahamas", "BS"],
    ["BTN", "Bhutanese Ngultrum", "Bhutan", "BT"],
    ["BWP", "Botswana Pula", "Botswana", "BW"],
    ["BYN", "Belarusian Ruble", "Belarus", "BY"],
    ["BZD", "Belize Dollar", "Belize", "BZ"],
    ["CAD", "Canadian Dollar", "Canada", "CA"],
    ["CDF", "Congolese Franc", "Democratic Republic of the Congo", "CD"],
    ["CHF", "Swiss Franc", "Switzerland", "CH"],
    ["CLF", "Unidad de Fomento", "Chile", "CL"],
    ["CLP", "Chilean Peso", "Chile", "CL"],
    ["CNH", "Chinese Yuan (Offshore)", "China", "CN"],
    ["CNY", "Chinese Yuan", "China", "CN"],
    ["COP", "Colombian Peso", "Colombia", "CO"],
    ["CRC", "Costa Rican Colón", "Costa Rica", "CR"],
    ["CUP", "Cuban Peso", "Cuba", "CU"],
    ["CVE", "Cape Verdean Escudo", "Cabo Verde", "CV"],
    ["CZK", "Czech Koruna", "Czech Republic", "CZ"],
    ["DJF", "Djiboutian Franc", "Djibouti", "DJ"],
    ["DKK", "Danish Krone", "Denmark", "DK"],
    ["DOP", "Dominican Peso", "Dominican Republic", "DO"],
    ["DZD", "Algerian Dinar", "Algeria", "DZ"],
    ["EGP", "Egyptian Pound", "Egypt", "EG"],
    ["ETB", "Ethiopian Birr", "Ethiopia", "ET"],
    ["EUR", "Euro", "Eurozone", "EU"], // using EU as pseudo‑code
    ["FJD", "Fijian Dollar", "Fiji", "FJ"],
    ["GBP", "Pound Sterling", "United Kingdom", "GB"],
    ["GEL", "Georgian Lari", "Georgia", "GE"],
    ["GHS", "Ghanaian Cedi", "Ghana", "GH"],
    ["GMD", "Gambian Dalasi", "Gambia", "GM"],
    ["GNF", "Guinean Franc", "Guinea", "GN"],
    ["GTQ", "Guatemalan Quetzal", "Guatemala", "GT"],
    ["GYD", "Guyanese Dollar", "Guyana", "GY"],
    ["HKD", "Hong Kong Dollar", "Hong Kong", "HK"],
    ["HNL", "Honduran Lempira", "Honduras", "HN"],
    ["HTG", "Haitian Gourde", "Haiti", "HT"],
    ["HUF", "Hungarian Forint", "Hungary", "HU"],
    ["IDR", "Indonesian Rupiah", "Indonesia", "ID"],
    ["ILS", "Israeli New Shekel", "Israel", "IL"],
    ["INR", "Indian Rupee", "India", "IN"],
    ["IQD", "Iraqi Dinar", "Iraq", "IQ"],
    ["IRR", "Iranian Rial", "Iran", "IR"],
    ["ISK", "Icelandic Króna", "Iceland", "IS"],
    ["JMD", "Jamaican Dollar", "Jamaica", "JM"],
    ["JOD", "Jordanian Dinar", "Jordan", "JO"],
    ["JPY", "Japanese Yen", "Japan", "JP"],
    ["KES", "Kenyan Shilling", "Kenya", "KE"],
    ["KGS", "Kyrgyzstani Som", "Kyrgyzstan", "KG"],
    ["KHR", "Cambodian Riel", "Cambodia", "KH"],
    ["KMF", "Comorian Franc", "Comoros", "KM"],
    ["KRW", "South Korean Won", "South Korea", "KR"],
    ["KWD", "Kuwaiti Dinar", "Kuwait", "KW"],
    ["KYD", "Cayman Islands Dollar", "Cayman Islands", "KY"],
    ["KZT", "Kazakhstani Tenge", "Kazakhstan", "KZ"],
    ["LAK", "Lao Kip", "Laos", "LA"],
    ["LBP", "Lebanese Pound", "Lebanon", "LB"],
    ["LKR", "Sri Lankan Rupee", "Sri Lanka", "LK"],
    ["LRD", "Liberian Dollar", "Liberia", "LR"],
    ["LSL", "Lesotho Loti", "Lesotho", "LS"],
    ["LYD", "Libyan Dinar", "Libya", "LY"],
    ["MAD", "Moroccan Dirham", "Morocco", "MA"],
    ["MDL", "Moldovan Leu", "Moldova", "MD"],
    ["MGA", "Malagasy Ariary", "Madagascar", "MG"],
    ["MKD", "Macedonian Denar", "North Macedonia", "MK"],
    ["MOP", "Macanese Pataca", "Macau", "MO"],
    ["MRU", "Mauritanian Ouguiya", "Mauritania", "MR"],
    ["MUR", "Mauritian Rupee", "Mauritius", "MU"],
    ["MVR", "Maldivian Rufiyaa", "Maldives", "MV"],
    ["MWK", "Malawian Kwacha", "Malawi", "MW"],
    ["MXN", "Mexican Peso", "Mexico", "MX"],
    ["MYR", "Malaysian Ringgit", "Malaysia", "MY"],
    ["MZN", "Mozambican Metical", "Mozambique", "MZ"],
    ["NAD", "Namibian Dollar", "Namibia", "NA"],
    ["NGN", "Nigerian Naira", "Nigeria", "NG"],
    ["NIO", "Nicaraguan Córdoba", "Nicaragua", "NI"],
    ["NOK", "Norwegian Krone", "Norway", "NO"],
    ["NPR", "Nepalese Rupee", "Nepal", "NP"],
    ["NZD", "New Zealand Dollar", "New Zealand", "NZ"],
    ["OMR", "Omani Rial", "Oman", "OM"],
    ["PAB", "Panamanian Balboa", "Panama", "PA"],
    ["PEN", "Peruvian Sol", "Peru", "PE"],
    ["PGK", "Papua New Guinean Kina", "Papua New Guinea", "PG"],
    ["PHP", "Philippine Peso", "Philippines", "PH"],
    ["PKR", "Pakistani Rupee", "Pakistan", "PK"],
    ["PLN", "Polish Złoty", "Poland", "PL"],
    ["PYG", "Paraguayan Guaraní", "Paraguay", "PY"],
    ["QAR", "Qatari Riyal", "Qatar", "QA"],
    ["RON", "Romanian Leu", "Romania", "RO"],
    ["RSD", "Serbian Dinar", "Serbia", "RS"],
    ["RUB", "Russian Ruble", "Russia", "RU"],
    ["RWF", "Rwandan Franc", "Rwanda", "RW"],
    ["SAR", "Saudi Riyal", "Saudi Arabia", "SA"],
    ["SBD", "Solomon Islands Dollar", "Solomon Islands", "SB"],
    ["SCR", "Seychellois Rupee", "Seychelles", "SC"],
    ["SDG", "Sudanese Pound", "Sudan", "SD"],
    ["SEK", "Swedish Krona", "Sweden", "SE"],
    ["SGD", "Singapore Dollar", "Singapore", "SG"],
    ["SOS", "Somali Shilling", "Somalia", "SO"],
    ["SRD", "Surinamese Dollar", "Suriname", "SR"],
    ["SVC", "Salvadoran Colón", "El Salvador", "SV"],
    ["SZL", "Swazi Lilangeni", "Eswatini", "SZ"],
    ["THB", "Thai Baht", "Thailand", "TH"],
    ["TJS", "Tajikistani Somoni", "Tajikistan", "TJ"],
    ["TMT", "Turkmenistani Manat", "Turkmenistan", "TM"],
    ["TND", "Tunisian Dinar", "Tunisia", "TN"],
    ["TRY", "Turkish Lira", "Turkey", "TR"],
    ["TTD", "Trinidad and Tobago Dollar", "Trinidad and Tobago", "TT"],
    ["TWD", "New Taiwan Dollar", "Taiwan", "TW"],
    ["TZS", "Tanzanian Shilling", "Tanzania", "TZ"],
    ["UAH", "Ukrainian Hryvnia", "Ukraine", "UA"],
    ["UGX", "Ugandan Shilling", "Uganda", "UG"],
    ["USD", "United States Dollar", "United States", "US"],
    ["UYU", "Uruguayan Peso", "Uruguay", "UY"],
    ["UZS", "Uzbekistani Soʻm", "Uzbekistan", "UZ"],
    ["VES", "Venezuelan Bolívar Soberano", "Venezuela", "VE"],
    ["VND", "Vietnamese Đồng", "Vietnam", "VN"],
    ["XAF", "Central African CFA Franc", "CEMAC", "CM"], // using Cameroon as representative
    ["XCD", "East Caribbean Dollar", "OECS", "AG"], // using Antigua and Barbuda
    ["XOF", "West African CFA Franc", "UEMOA", "SN"], // using Senegal
    ["XPF", "CFP Franc", "French territories of the Pacific", "PF"], // French Polynesia
    ["YER", "Yemeni Rial", "Yemen", "YE"],
    ["ZAR", "South African Rand", "South Africa", "ZA"],
    ["ZMW", "Zambian Kwacha", "Zambia", "ZM"],
  ];

  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(1);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(
          `/api/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
        );

        const data = await res.json();

        if (res.ok) {
          setRate(data.result["rate"]);

          return;
        }
        console.log(data.result["rate"]);
      } catch {}
    }
    fetchRates();
  }, [toCurrency, fromCurrency, amount]);

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden mt-20">
      <BackgroundImage />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Currency Converter
        </h1>

        <div className="mb-4">
          <label className="block text-sm text-white/80 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full rounded-lg bg-white/20 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white/80 mb-1">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full rounded-lg bg-white/20 px-3 py-2 text-white outline-none"
          >
            {currencies.map((currency) => (
              <option
                key={currency[0]}
                value={currency[0]}
                className="text-black"
              >
                {currency[0]} — {currency[1]}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-white/80 mb-1">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full rounded-lg bg-white/20 px-3 py-2 text-white outline-none"
          >
            {currencies.map((currency) => (
              <option
                key={currency[0]}
                value={currency[0]}
                className="text-black"
              >
                {currency[0]} — {currency[1]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => rate !== null && setConvertedAmount(amount * rate)}
            className="w-full rounded-xl bg-white text-black py-2 font-medium hover:bg-white/90 transition cursor-pointer"
          >
            Convert
          </button>
          <button
            onClick={handleSwap}
            className="w-full rounded-xl bg-white text-black py-2 font-medium hover:bg-white/90 transition cursor-pointer"
          >
            Swap
          </button>
        </div>
        {convertedAmount !== null && (
          <div className="mt-4 text-center text-white">
            <span className="text-lg font-semibold">
              {convertedAmount.toFixed(2)}
            </span>{" "}
            {toCurrency}
          </div>
        )}
      </div>
    </div>
  );
}
