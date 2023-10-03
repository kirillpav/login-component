import "./App.css";

function App() {
	return (
		<section class="bg-stone-50">
			<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-amber-200">
					<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 class="text-xl font-bold leading-tight tracking-tight text-slate-800 md:text-2xl">
							Sign in to your account
						</h1>
						<form class="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									for="email"
									class="block mb-2 text-sm font-medium text-slate-800"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required=""
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-sm font-medium text-slate-800"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>
							<div class="flex items-center justify-between">
								<div class="flex items-start">
									<div class="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div class="ml-3 text-sm">
										<label for="remember" class="text-slate-800">
											Remember me
										</label>
									</div>
								</div>
								<a
									href="#"
									class="text-sm font-medium text-slate-800 hover:underline"
								>
									Forgot password?
								</a>
							</div>
							<button
								type="submit"
								class="btn w-full bg-slate-100 rounded py-2"
							>
								Sign in
							</button>
							<p class="text-sm font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet?{" "}
								<a
									href="#"
									class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Sign up
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
