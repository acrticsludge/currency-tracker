export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const toCurrency = searchParams.get("to") ?? "USD";
  const fromtCurrency = searchParams.get("from") ?? "INR";
  const amount = searchParams.get("amount") ?? "1";

  const key = process.env.EXCONVERT_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: "Missing API key" }), {
      status: 500,
    });
  }

  const res = await fetch(
    `https://api.exconvert.com/convert?access_key=${key}&from=${fromtCurrency}&to=${toCurrency}&amount=${amount}`
  );
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: res.status });
}
