"use client";
import { useState, useEffect } from "react";
import CurrencyCard from "@/modules/CurrencyCard";
import BackgroundImage from "@/modules/BackgroundImage";

export default function page() {
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

  const [base, setBase] = useState("INR");
  const [rates, setRates] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(`/api/rates?from=${base}`);

        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          setError(data.error);
          return;
        }
        setRates(data.result);
        setError("");
      } catch {
        setError("Failed to load rates");
      }
    }
    fetchRates();
  }, [base]);
  console.log(rates);
  const rate = rates?.["USD"] || 0;
  console.log("Rate USD:", rate);

  return (
    <div className="relative min-h-screen">
      <BackgroundImage />

      <div className="relative z-10 flex flex-col items-center justify-center pt-14 pb-8 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold text-center
      bg-linear-to-r from-blue-400 via-purple-400 to-pink-400
      bg-clip-text text-transparent mb-3"
        >
          Currency Rates
        </h1>

        <p className="text-gray-200 text-center text-base md:text-lg max-w-xl leading-relaxed">
          View real-time currency exchange rates, updated every minute
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
              {currencies.map((currency) => (
                <option key={currency[0]} value={currency[0]}>
                  {currency[0]} — {currency[1]}
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
          {currencies.map((currency) => (
            <CurrencyCard
              key={currency[0]}
              currency={currency}
              base={base}
              rate={rates ? rates[currency[0]] : "Loading..."}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
