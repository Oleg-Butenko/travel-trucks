import { Camper } from "@/types/camper";
import axios from "axios";

export type CampersListResponse = {
	total: number;
	items: Camper[];
};

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
interface CampersParams {
	page: number;
	perPage: number;
	location?: string;
	form?: string;
	transmission?: "automatic" | "manual";
	AC?: boolean;
	bathroom?: boolean;
	kitchen?: boolean;
	TV?: boolean;
}

export const getCampers = async (params?: CampersParams) => {
	const res = await axios.get<CampersListResponse>("/campers", {
		params: {
			page: params?.page ?? 1,
			perPage: params?.perPage ?? 12,

			...(params?.location && { location: params.location }),
			...(params?.form && { form: params.form }),
			...(params?.transmission && {
				transmission: params.transmission,
			}),

			...(params?.AC && { AC: true }),
			...(params?.bathroom && { bathroom: true }),
			...(params?.kitchen && { kitchen: true }),
			...(params?.TV && { TV: true }),
		},
	});

	return res.data;
};
