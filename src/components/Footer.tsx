import getConfig from "next/config";

//const { publicRuntimeConfig } = getConfig();

export default function Footer() {
	const today = new Date();

	return (
		<>
			<footer test-id="footer">
				<div className="text-center text-sm te mb-0 mt-0 pt-2 pb-2 bg-gray-300 text-gray-900">{today.toLocaleString()}</div>
			</footer>
		</>
	);
}
