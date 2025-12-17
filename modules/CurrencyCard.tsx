export default function CurrencyCard(params: {
  currency: [string, string, string, string];
  base: string;
  rate: number;
}) {
  const [code, name, country, countryCode] = params.currency;
  const base = params.base;
  const rate = params.rate;
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="
        w-12 h-12
        flex items-center justify-center
        rounded-lg
        bg-gray-100
        border border-gray-200
        shrink-0
      "
          >
            <img
              src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
              alt={code}
              className="w-8 h-8 object-contain"
            />
          </div>

          <div>
            <p className="text-xs text-gray-500">{code}</p>
            <p className="font-semibold text-gray-900 leading-tight">{name}</p>
          </div>
        </div>

        <p className="text-lg font-bold text-blue-600 tabular-nums">
          {rate.toFixed(5)}
        </p>
      </div>
    </div>
  );
}
