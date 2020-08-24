import React from 'react';

type Translation = {
	x: number,
	y: number,
}

const MOUSE_RIGHT_CLICK_BUTTON = 2;

export default function useTranslation (
	eventListenerRef: React.RefObject<HTMLDivElement>,
	cameraContainerRef: React.RefObject<HTMLDivElement>
) {
	const translation = React.useRef<Translation>({ x: 0, y: 0 });

	const isMouseDown = React.useRef<boolean>(false);
	const lastMousePosition = React.useRef<Translation>({ x: 0, y: 0 });

	React.useEffect(() => {
		updateTransform();
		const root = eventListenerRef.current!;
		root.addEventListener('mousedown', handleMouseDown);
		root.addEventListener('mouseup', handleMouseUp);
		root.addEventListener('mousemove', handleMouseMove);
		return () => {
			root.removeEventListener('mousedown', handleMouseDown);
			root.removeEventListener('mouseup', handleMouseUp);
			root.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		}
	}, []);

	function updateLastMousePosition (event: MouseEvent) {
		const { clientX, clientY } = event;
		const x = clientX;
		const y = clientY;
		lastMousePosition.current = { x, y };
	}

	function deltaMousePosition (event: MouseEvent) {
		const { clientX, clientY } = event;
		const x = clientX;
		const y = clientY;
		const dx = x - lastMousePosition.current.x;
		const dy = y - lastMousePosition.current.y;
		return { x: dx, y: dy };
	}

	function updateTransform () {
		const x = translation.current.x + eventListenerRef.current!.clientWidth / 2;
		const y = translation.current.y + eventListenerRef.current!.clientHeight / 2;

		cameraContainerRef.current!.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
	}

	function handleMouseDown (event: MouseEvent) {
		if (event.button !== MOUSE_RIGHT_CLICK_BUTTON) return;

		updateLastMousePosition(event);
		isMouseDown.current = true;
		document.addEventListener('mouseup', handleMouseUp);
	}

	function handleMouseUp () {
		isMouseDown.current = false;
		document.removeEventListener('mouseup', handleMouseUp)
	}

	function handleMouseMove (event: MouseEvent) {
		if (!isMouseDown.current) return;
		const delta = deltaMousePosition(event);
		translation.current.x += delta.x;
		translation.current.y += delta.y;
		updateTransform();
		updateLastMousePosition(event);
	}
}