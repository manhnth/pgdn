/**
 *
 * @param {string} url
 * @returns
 */

export default async function get_detail(url) {
  const $ = await get_doc(url);

  if ($) {
    return {
      name: $('h3.title').text(),
      cover: $('div.book img').attr('src'),
      author: $('div.info div a').first().text(),
      description: $('div.desc-text').html(),
      details: $('div.info').html()?.replaceAll('</h3>', ' '),
      ongoing: $('div.info').html()?.indexOf('>Đang ra<') > 0,
      host: 'truyenfull.vn',
    };
  }

  return null;
}
