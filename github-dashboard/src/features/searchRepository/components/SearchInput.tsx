import type { SearchInputProps } from "../type";

export default function SearchInput(props: SearchInputProps) {
	return (
		<div className="flex gap-2 items-center">
			<label htmlFor="description">リポジトリー名</label>
			<input
				className="border rounded px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
				type="text"
				name="description"
				id="description"
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
			/>
			<button
				onClick={() => props.onSearch(props.value)}
				className="bg-blue-500 px-5 py-2 rounded-full text-white hover:bg-blue-800"
			>
				検索
			</button>
		</div>
	);
}
