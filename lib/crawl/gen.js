import get_doc from "./get-doc";

/**
 *
 * @param {string} url
 * @param {number} page
 * @returns
 */

export default async function gen(url, page = 1) {
  const $ = await get_doc(url + "/trang-" + page);

  if ($) {
    const el = $(".list-truyen div[itemscope]");
    const novelList = [];
    const next = $(".pagination a").first().text();
    for (let i = 0; i < el.length; i++) {
      const e = el[i];
      const cover = $(e).find("[data-image]").attr("data-image")?.split("=");
      cover?.pop();

      novelList.push({
        name: $(e).find(".truyen-title > a").text(),
        link: $(e).find(".truyen-title > a").first().attr("href"),
        description: $(e).find(".author").text(),
        cover: cover?.join(),
        host: "https://truyenfull.vn",
      });
    }

    return { novelList: novelList, next: next };
  }

  return null;
}
