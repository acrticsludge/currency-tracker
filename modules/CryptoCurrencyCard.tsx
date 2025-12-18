import Image from "next/image";
export default function CryptoCurrencyCard(params: {
  currency: [string, string];
  rate: number;
}) {
  const [code, name] = params.currency;

  const rate = params.rate;

  return (
    // <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
    //   <div className="flex items-center gap-3 mb-3">
    //     <Image
    //       src={`https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/${code.toLowerCase()}.svg`}
    //       alt={code}
    //       width={40}
    //       height={40}
    //     />
    //     <div>
    //       <h3 className="font-semibold text-gray-900">{code}</h3>
    //       <p className="text-sm text-gray-500">{name}</p>
    //     </div>
    //   </div>
    //   <div className="text-2xl font-bold text-gray-900">
    //     {rate ? `${rate.toFixed(2)}` : "NaN"}
    //   </div>
    // </div>
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
            <Image
              src={`https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/${code.toLowerCase()}.svg`}
              alt={code}
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="text-xs text-gray-500">{code}</p>
            <p className="font-semibold text-gray-900 leading-tight">{name}</p>
          </div>
        </div>

        <p className="text-lg font-bold text-blue-600 tabular-nums">
          {rate ? Number(rate).toFixed(5) : "—"}
        </p>
      </div>
    </div>
  );
}
