import React from "react";
import Navbar from "./components/Navbar";

function Staff() {
	return (
		<>
			<Navbar />
			<div className="flex w-full h-screen">
				{/* Side Panel */}
				<div className="flex flex-col w-1/4 bg-gray-700 text-white p-4 ">
					<button className="mb-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
						Calendar
					</button>
					<button className="mb-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
						Staff
					</button>
					<button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
						Demand
					</button>
				</div>

				{/* Main Content */}
				<div className="w-3/4 bg-white p-4">
					<h2 className="text-2xl font-semibold mb-4">Staff</h2>
					<table className="min-w-full border">
						<thead>
							<tr>
								<th className="border px-4 py-2">Name</th>
								<th className="border px-4 py-2">Position</th>
								<th className="border px-4 py-2">Current Hours</th>
								<th className="border px-4 py-2">Total Hours</th>
								<th className="border px-4 py-2">Preferred Time</th>
								<th className="border px-4 py-2">Freeze</th>
							</tr>
							<tr>
								<td className="border px-4 py-2 text-center">"Placeholder"</td>
								<td className="border px-4 py-2 text-center">"Placeholder"</td>
								<td className="border px-4 py-2 text-center">"Placeholder"</td>
								<td className="border px-4 py-2 text-center">"Placeholder"</td>
								<td className="border px-4 py-2 text-center">"Placeholder"</td>
								<td className="border px-4 py-2 text-center">"Placeholder"</td>
							</tr>
						</thead>
						<tbody>{/* Rows can be added here */}</tbody>
					</table>
					<div className="mt-4">
						<div className="mt-4">
							Share Course Id:{" "}
							<input
								className="border rounded px-4 py-2"
								placeholder="xxxxxxxxxxxx"
							/>
						</div>
						<button className="bg-green-400 px-4 py-2 rounded float-right mt-4 hover:bg-green-500">
							+
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Staff;
