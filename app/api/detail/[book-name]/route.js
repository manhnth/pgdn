import get_detail from '@/lib/get-detail';
import { NextRequest, NextResponse } from 'next/server';

/**
 *
 * @param {NextRequest} request
 * @returns
 */

export async function GET(request) {
  const url = 'https://truyenfull.vn/' + request.nextUrl.pathname.split('/')[3];

  const details = await get_detail(url);
  console.log('run server');

  return NextResponse.json(details);
}
