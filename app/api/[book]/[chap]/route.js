import get_chap from "@/lib/crawl/chap";
import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param {NextRequest} request
 */

export async function POST(request) {
  console.log("run here");

  const res = await request.json();

  const link = res.link;

  const chapData = await get_chap("https://truyenfull.vn" + link);

  return NextResponse.json(chapData);
}
