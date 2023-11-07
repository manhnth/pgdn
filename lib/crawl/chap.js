import get_doc from "./get-doc";

export default async function get_chap(url) {
  const $ = await get_doc(url);

  if ($) {
    $("noscript").remove();
    $("script").remove();
    $("iframe").remove();
    $("div.ads-responsive").remove();
    $("[style=font-size.0px;]").remove();
    $("a").remove();

    let txt = $("div.chapter-c");
    txt.find("p").last().remove();
    txt = txt
      .html()
      .replace("<em>.*?Chương này có nội dung ảnh.*?</em>", "</?em>");

    return txt;
  }

  return null;
}
