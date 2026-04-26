import { useState } from "react";
import "./App.css";

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className="m-3">
			<h1>UIトレーニング</h1>
			<section className="flex gap-4 mb-5">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
					登録
				</button>
				<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					登録
				</button>
				<button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full font-bold">
					削除
				</button>
			</section>

			<section className="max-w-md mb-3">
				<div className="flex flex-col gap-4 border p-6 shadow-lg hover:bg-gray-50 transition-colors">
					<div>
						<h2>タイトル</h2>
						<p>説明</p>
					</div>
					<div className="flex justify-end">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
							登録
						</button>
					</div>
				</div>
			</section>
			<section className="max-w-md mb-3">
				<div className="flex gap-2">
					<span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
						<span className="h-2 w-2 rounded-full bg-red-500"></span>
						高優先度
					</span>
					<span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">
						<span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
						中優先度
					</span>
					<span className="inline-flex gap-1 items-center py-1 px-2 text-sm font-medium rounded-full bg-green-100 text-green-700">
						<span className="w-2 h-2 bg-green-500 rounded-full"></span>
						低優先度
					</span>
				</div>
			</section>
			<section className="max-w-md mb-3">
				<div className="border p-4">
					<div className="flex flex-col gap-2">
						<h2>タイトル</h2>
						<p>説明</p>
						<p>
							<span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 text-sm font-medium rounded-full">
								<span className="bg-red-500 rounded-full w-2 h-2"></span>
								高優先度
							</span>
						</p>
					</div>
					<div className="flex justify-end">
						<button className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded-full">
							登録
						</button>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-4 mb-3">
				<div className="flex flex-col gap-1">
					<label htmlFor="title">タイトル入力</label>
					<input
						className="border rounded px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
						type="text"
						name="title"
						id="title"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="description">説明入力</label>
					<input
						className="border rounded px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
						type="text"
						name="description"
						id="description"
					/>
				</div>
				<div>
					<button className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded-full">
						登録
					</button>
				</div>
			</section>
			{open && (
				<section className="fixed inset-0 bg-black/50 flex items-center justify-center">
					<div className="bg-white w-80 flex justify-center items-center flex-col p-5 rounded-lg">
						<button
							onClick={() => setOpen(false)}
							className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded-full"
						>
							閉じる
						</button>
					</div>
				</section>
			)}
			<section>
				<button
					onClick={() => setOpen(true)}
					className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-4 py-2 rounded-full"
				>
					開く
				</button>
			</section>
		</div>
	);
}

export default App;
