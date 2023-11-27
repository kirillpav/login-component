import React, { useState } from "react";
import Navbar from "./components/Navbar";

import data from "./json/test2.json";

function Staff() {
	const [currHours, setCurrHours] = useState(0);
	const [totalHours, setTotalHours] = useState(0);

	function incrementTotalHours() {
		setTotalHours((prevTotalHours) => {
			return (prevTotalHours += 1);
		});
	}

	function decrementTotalHours() {
		setTotalHours((prevTotalHours) => {
			if (prevTotalHours == 0) {
				return prevTotalHours;
			} else {
				return (prevTotalHours -= 1);
			}
		});
	}

	function incrementCurrHours() {
		setCurrHours((prevCurrHours) => {
			return (prevCurrHours += 1);
		});
	}

	function decrementCurrHours() {
		setCurrHours((prevCurrHours) => {
			if (prevCurrHours == 0) {
				return prevCurrHours;
			} else {
				return (prevCurrHours -= 1);
			}
		});
	}

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
								<th className="border px-4 py-2">Role</th>
								<th className="border px-4 py-2">Appointment Hours</th>
								<th className="border px-4 py-2">Hours Per Weeks</th>
								<th className="border px-4 py-2">Preffered Hours</th>
								<th className="border px-4 py-2">Hours Left</th>
								<th className="border px-4 py-2">Hours Adjustment</th>
								<th className="border px-4 py-2">Availablities Message</th>
								<th className="border px-4 py-2">Preference Message</th>
							</tr>
							{data.data.map((e) => (
								<tr key={e.id}>
									<td className="border px-4 py-2 text-center">{e.email}</td>
									<td className="border px-4 py-2 text-center">{e.role}</td>
									<td className="px-4 py-2 flex items-center justify-center">
										<button
											onClick={decrementCurrHours}
											className="border rounded-sm flex items-center justify-center w-8 h-8"
										>
											-
										</button>
										<span className="mx-2">{e.appointmentHours}</span>
										<button
											onClick={incrementCurrHours}
											className="border rounded-sm flex items-center justify-center w-8 h-8"
										>
											+
										</button>
									</td>
									<td className="border px-4 py-2 text-center ">
										<div className="flex items-center justify-center">
											<button
												onClick={decrementTotalHours}
												className="border rounded-sm flex items-center justify-center w-8 h-8"
											>
												-
											</button>
											<span className="mx-2">{totalHours}</span>
											<button
												onClick={incrementTotalHours}
												className="border rounded-sm flex items-center justify-center w-8 h-8"
											>
												+
											</button>
										</div>
									</td>
									<td className="border px-4 py-2 text-center ">
										{e.preferredContiguousHours}
									</td>
									<td className="border px-4 py-2 text-center ">
										{e.hoursLeft}
									</td>
									<td className="border px-4 py-2 text-center ">
										{e.hoursAdjustment}
									</td>
									{e.availabilitiesValid && (
										<td className="border px-4 py-2 text-center">
											{e.availabilitiesMessage}
										</td>
									)}
									{e.preferencesValid && (
										<td className="border px-4 py-2 text-center">
											{e.perferencesMessage}
										</td>
									)}
								</tr>
							))}
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
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Staff;
