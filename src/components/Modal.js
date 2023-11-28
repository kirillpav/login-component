import React from "react";

function Modal({ rowData, closeModal }) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-xl">
				<h2 className="text-xl font-bold mb-4">Edit Staff Data</h2>
				<form>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Email:
						</label>
						<input
							type="text"
							value={rowData.email}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Role:
						</label>
						<input
							type="text"
							value={rowData.role}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Appointment Hours:
						</label>
						<input
							type="number"
							value={rowData.appointmentHours}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Hours Per Week:
						</label>
						<input
							type="number"
							value={rowData.totalHours}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Preffered Hours:
						</label>
						<input
							type="number"
							value={rowData.preferredContiguousHours}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Hours Left:
						</label>
						<input
							type="number"
							value={rowData.hoursLeft}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Hours Left:
						</label>
						<input
							type="number"
							value={rowData.hoursLeft}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
				</form>
				<button
					onClick={closeModal}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Close
				</button>
			</div>
		</div>
	);
}

export default Modal;
