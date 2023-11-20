import { NextResponse } from "next/server";

type Test = {
	param1?: string;
	param2?: string;
};

export async function POST(req: Request) {
	const data : Test = await req.json();

    const {param1, param2} = data;

	return NextResponse.json({ param1, param2});
}
