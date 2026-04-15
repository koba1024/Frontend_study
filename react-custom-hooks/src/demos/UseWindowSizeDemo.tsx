import { useWindowSize } from "../hooks/useWindowSize";

export default function UseWindowSizeDemo() {
	const { width, height } = useWindowSize();

	return (
		<div>
			<p>width: {width}</p>
			<p>height: {height}</p>
		</div>
	);
}
