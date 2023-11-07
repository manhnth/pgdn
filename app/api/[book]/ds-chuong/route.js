import get_list_chapter from "@/lib/crawl/get-list-chapter";
import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param {NextRequest} request
 */

export async function POST(request) {
  const name = request.nextUrl.pathname.split("/")[2];

  const res = await request.json();

  const page = res.page;

  const listChapter = await get_list_chapter(
    "https://truyenfull.vn/" + name + "/trang-" + page + "/#list-chapter"
  );
  console.log(
    "run ds-chuong",
    request.nextUrl.pathname,
    name,
    page,
    listChapter
  );

  return NextResponse.json(listChapter);
}
