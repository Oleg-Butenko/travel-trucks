import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../api";

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;

		const location = searchParams.get("location") ?? "";
		const form = searchParams.get("form") ?? "";
		const transmission = searchParams.get("transmission") ?? "";

		const page = Number(searchParams.get("page") ?? 1);
		const perPage = Number(searchParams.get("perPage") ?? 4);

		const AC = searchParams.get("AC") === "true";
		const bathroom = searchParams.get("bathroom") === "true";
		const kitchen = searchParams.get("kitchen") === "true";
		const TV = searchParams.get("TV") === "true";

		const { data } = await api("/campers", {
			params: {
				page,
				perPage,

				...(location && { location }),
				...(form && { form }),
				...(transmission && { transmission }),

				...(AC && { AC: true }),
				...(bathroom && { bathroom: true }),
				...(kitchen && { kitchen: true }),
				...(TV && { TV: true }),
			},
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{
				error:
					(error as ApiError).response?.data?.error ??
					(error as ApiError).message,
			},
			{ status: (error as ApiError).status }
		);
	}
}
