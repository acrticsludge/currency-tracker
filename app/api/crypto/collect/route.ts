export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const fromCryptoCurrency = searchParams.get("from") ?? "BTC";
  const key = process.env.EXCONVERT_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: "Missing API key" }), {
      status: 500,
    });
  }

  const res = await fetch(
    `https://api.exconvert.com/crypto/fetchAll?from=${fromCryptoCurrency}&access_key=${key}`
  );

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: res.status });
}
