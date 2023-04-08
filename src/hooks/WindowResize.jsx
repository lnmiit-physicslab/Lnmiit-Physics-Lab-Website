export default function useIsMobile() {
	let screenSize = 0;
	useEffect(() => {
		window.addEventListener("resize", () => {
			screenSize = window.innerWidth;
		});
		return () => {
			window.removeEventListener("resize", () => {
				screenSize = window.innerWidth;
			});
		};
	}, [screenSize]);

	return screenSize <= 768;
}
