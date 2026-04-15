import UseFetchDemo from "./demos/UseFetchDemo";
import UseLocalStorageDemo from "./demos/useLocalStorageDemo";
import UseUndoRedoDemo from "./demos/UseUndoRedoDemo";
import UseIntersectionObserverDemo from "./demos/UseIntersectionObserverDemo";
import UseWindowSizeDemo from "./demos/UseWindowSizeDemo";
import UseDebounceDemo from "./demos/UseDebounceDemo";

function App() {
	return (
		<div style={{ padding: "24px", display: "grid", gap: "24px" }}>
			<section>
				<h2>useFetch</h2>
				<UseFetchDemo />
			</section>

			<section>
				<h2>useLocalStorage</h2>
				<UseLocalStorageDemo />
			</section>

			<section>
				<h2>useDebounce</h2>
				<UseDebounceDemo />
			</section>

			<section>
				<h2>useWindowSize</h2>
				<UseWindowSizeDemo />
			</section>

			<section>
				<h2>useIntersectionObserver</h2>
				<UseIntersectionObserverDemo />
			</section>

			<section>
				<h2>useUndoRedo</h2>
				<UseUndoRedoDemo />
			</section>
		</div>
	);
}

export default App;
