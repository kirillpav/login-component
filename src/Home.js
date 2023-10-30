import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Navbar from "./components/Navbar";

function Home() {
	const [setStudentName, studentName] = useState(""); //this will be used to display dynamic names
	const addClass = (e) => {
		e.preventDefault();

		// further functionality to add class and dynamically add new classes
	};

	let name = "Student";
	return (
		<>
			<Navbar />
			<h1 className="ml-10 mt-10 text-xl">Welcome {name}</h1>
			<div className="m-5">
				<ul className="grid grid-flow-row grid-cols-3 gap-10 my-5">
					<button className="w-full border bg-blue-500 rounded-xl p-5 flex flex-col justify-center items-center">
						<h2 className="text-white text-xl">Class Name</h2>
					</button>
					<button className="w-full  border bg-blue-500 rounded-xl p-5 flex flex-col justify-center items-center">
						<h2 className="text-white text-xl">Class Name</h2>
					</button>
					<button className="w-full  border bg-blue-500 rounded-xl p-5 flex flex-col justify-center items-center">
						<h2 className="text-white text-xl">Class Name</h2>
					</button>
					<button className="w-full  border bg-blue-500 rounded-xl p-5 flex flex-col justify-center items-center">
						<h2 className="text-white text-xl">Class Name</h2>
					</button>
					<button className="w-full  border bg-blue-500 rounded-xl p-5 flex flex-col justify-center items-center">
						<h2 className="text-white text-xl">Class Name</h2>
					</button>
					<button className="w-full  border bg-blue-500 rounded-xl p-5 flex flex-col justify-center items-center">
						<h2 className="text-white text-xl">Class Name</h2>
					</button>
				</ul>
			</div>
			<button
				className="absolute bottom-5 right-5 rounded-full bg-blue-500 p-5"
				onClick={addClass}
			>
				<FaPlus />
			</button>
		</>
	);
}

export default Home;
