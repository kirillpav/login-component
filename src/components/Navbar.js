import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";

function Navbar() {
	return (
		<nav className="w-100 p-4 bg-gray-500">
			<button type="button">
				<FaHome fontSize="2em" className="ml-5" />
			</button>
		</nav>
	);
}

export default Navbar;
