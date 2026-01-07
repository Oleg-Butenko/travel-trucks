import { getCampers } from "@/lib/api/api";

const Catalog = async () => {
	const response = await getCampers();
	console.log(response.items);

	return <div className="container"></div>;
};

export default Catalog;
