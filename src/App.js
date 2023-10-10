import "./App.css";
import { FaGoogle } from "react-icons/fa";

function App() {
	return (
		<section class="bg-stone-50">
			<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div
					class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
					style={{ backgroundColor: "#0072c1" }}
				>
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
							Sign in to your account
						</h1>
						<form class="space-y-4 md:space-y-6" action="#">
							<div class="flex items-center justify-between"></div>
							<button
								type="submit"
								class="btn w-full bg-slate-100 rounded-xl py-2 flex justify-center items-center align-middle gap-1"
							>
								<FaGoogle /> Sign in With Google
							</button>
							<p class="text-sm font-light text-gray-500 dark:text-gray-400">
								Please only use your UC Berkeley Account
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
