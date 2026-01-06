import { getCampers } from "@/lib/api/api";

const Catalog = async () => {
	const campers = await getCampers();
	console.log("campers", campers.items);
	return <div className="container"></div>;
};

export default Catalog;
