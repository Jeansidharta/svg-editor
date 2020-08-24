import React from 'react';

export default function useZoom (
	eventListenerRef: React.RefObject<HTMLDivElement>,
	cameraContainerRef: React.RefObject<HTMLDivElement>
) {
	const zoom = React.useRef<number>(1);

	React.useEffect(() => {
		updateTransform();
		const root = eventListenerRef.current!;
		root.addEventListener('wheel', handleMouseWheel, { passive: true });
		return () => {
			root.removeEventListener('wheel', handleMouseWheel);
		}
	}, []);

	function updateTransform () {
		cameraContainerRef.current!.style.transform = `scale(${zoom.current})`;
	}

	function handleMouseWheel (event: WheelEvent) {
		const { deltaY: dy } = event;

		const direction = dy > 0 ? -1 : dy < 0 ? 1 : 0;

		if (direction > 0) {
			zoom.current *= 1.1;
		} else if (direction < 0) {
			zoom.current /= 1.1;
		} else return;

		updateTransform();
	}
}