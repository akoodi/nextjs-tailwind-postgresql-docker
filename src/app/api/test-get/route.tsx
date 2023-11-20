import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

    //const name = searchParams.get('name') || '';
    //return NextResponse.json({ name: name });

    const obj = Object.fromEntries(searchParams.entries());
    return NextResponse.json({ obj });
}
