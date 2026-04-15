import { useCallback, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function UseIntersectionObserverDemo() {
	const changeBgColor = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				console.log(
					"isIntersecting:",
					entry.isIntersecting,
					entry.target,
				);
				if (entry.isIntersecting) {
					entry.target.classList.remove("blue");
					entry.target.classList.add("red");
				} else {
					entry.target.classList.remove("red");
					entry.target.classList.add("blue");
				}
			});
		},
		[],
	);

	const ref1 = useRef<HTMLDivElement>(null);

	useIntersectionObserver([ref1], changeBgColor);

	return (
		<div>
			<div style={{ height: "80vh" }}>上の余白</div>

			<div ref={ref1} className="blue">
				ターゲット
			</div>

			<div style={{ height: "150vh" }}>下の余白</div>
		</div>
	);
}
