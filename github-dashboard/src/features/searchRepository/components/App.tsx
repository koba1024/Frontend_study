import { useState } from "react";
import "../../../App.css";
import SearchInput from "./SearchInput";
import RepositoryList from "./RepositoryList";
import useSearchRepositories from "../hooks/useSearchRepositories";

function App() {
	const [input, setInput] = useState("");
	const onSearch = () => {
		setInput("");
	};

	const res = useSearchRepositories(input);

	return (
		<div>
			<SearchInput
				onSearch={onSearch}
				value={input}
				onChange={setInput}
			/>
			{res.isLoading && <div>Now Loading</div>}
			{res.error && <div>{res.error.message}</div>}
			{res.data?.total_count === 0 && <div>0件</div>}
			{input !== "" && <RepositoryList items={res.data?.items ?? []} />}
		</div>
	);
}

export default App;
