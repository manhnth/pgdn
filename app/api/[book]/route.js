import get_detail from "@/lib/crawl/get-detail";
import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param {NextRequest} request
 * @returns
 */

export async function GET(request) {
  const url = "https://truyenfull.vn/" + request.nextUrl.pathname.split("/")[2];

  const details = await get_detail(url);

  return NextResponse.json(details);
}
