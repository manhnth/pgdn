import { cheerio } from "../cheerio";

export default async function get_doc(url) {
  const res = await fetch(url, { mode: "no-cors" });
  if (!res.ok) return null;

  const html = await res.text();

  return cheerio.load(html);
}
