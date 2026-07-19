import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const payload = await request.text();

    return NextResponse.json(payload);
  } catch (error) {
    console.error('error', error);
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
};
