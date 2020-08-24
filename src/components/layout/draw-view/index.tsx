import React from 'react';
import styled from 'styled-components';
import Canvas from './canvas';

const Root = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.gray.main};

`;

const CameraContainer = styled.div`
	position: relative;

	// This is so the rest of the UI always render on top of this
	// z-index: -1;
`;

type DrawViewProps = React.PropsWithoutRef<{
}>;

type DrawViewComponent = React.FunctionComponent<DrawViewProps>;

type Translation = {
	x: number,
	y: number,
}

const DrawView: DrawViewComponent = ({  }) => {
	const rootRef = React.useRef<HTMLDivElement>(null);
	const cameraContainerRef = React.useRef<HTMLDivElement>(null);

	const isMouseDown = React.useRef<boolean>(false);
	const lastMousePosition = React.useRef<Translation>({ x: 0, y: 0 });

	const zoom = React.useRef<number>(1);
	const rotation = React.useRef<number>(0);
	const translation = React.useRef<Translation>({ x: 0, y: 0 });

	React.useEffect(() => {
		updateTransform();
		const root = rootRef.current!;
		root.addEventListener('mousedown', handleMouseDown);
		root.addEventListener('mouseup', handleMouseUp);
		root.addEventListener('mousemove', handleMouseMove);
		return () => {
			root.removeEventListener('mousedown', handleMouseDown);
			root.removeEventListener('mouseup', handleMouseUp);
			root.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp)
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
		cameraContainerRef.current!.style.transform = `
			translate(${translation.current.x}px, ${translation.current.y}px)
			rotate(${rotation.current}rad)
			scale(${zoom.current})
		`;
	}

	function handleMouseDown (event: MouseEvent) {
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

	return (
		<Root ref={rootRef}>
			<CameraContainer ref={cameraContainerRef}>
				<Canvas />
			</CameraContainer>
		</Root>
	);
}

export default DrawView;