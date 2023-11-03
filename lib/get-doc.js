import { cheerio } from './cheerio';

export default async function get_doc(url) {
  const res = await fetch(url, { mode: 'no-cors' });
  if (!res) return null;

  const html = await res.text();

  return cheerio.load(html);
}
