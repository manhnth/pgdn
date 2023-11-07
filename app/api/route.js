import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param {NextRequest} request
 */

export async function POST(request) {
  console.log("req body", request.body);

  const data = await request.json();

  console.log(data.link);

  return NextResponse.json("hey post");
}
