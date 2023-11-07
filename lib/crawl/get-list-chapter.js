import get_doc from "./get-doc";

export default async function get_list_chapter(url) {
  const $ = await get_doc(url);
  const listChapter = [];
  const cl = $(".list-chapter > li");

  // var truyenId = $("input#truyen-id").attr("value");
  // var truyenAscii = $("input#truyen-ascii").attr("value");
  // var page = $("input#total-page").attr("value");
  // if (page) page = parseInt(page);
  // else page = 1;

  for (let i = 0; i < cl.length; i++) {
    const c = cl[i];

    listChapter.push({
      name: $(c).find("a").text(),
      input: $(c).find("a").attr("href"),
    });
  }

  return listChapter;
}
