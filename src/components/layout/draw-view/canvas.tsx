import React from 'react';
import styled from 'styled-components';
import { useCanvasViewBox } from '../../../contexts/canvas-view-box';

const Root = styled.div<{ width: number, height: number }>`
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	background-color: white;
	cursor: crosshair;
`;

type CanvasProps = React.PropsWithoutRef<{
}>;

type CanvasComponent = React.FunctionComponent<CanvasProps>;

const Canvas: CanvasComponent = ({ }) => {
	const { viewBox } = useCanvasViewBox();

	const viewBoxString = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;

	return (
		<Root width={viewBox.width} height={viewBox.height}>
			<svg viewBox={viewBoxString} height={viewBox.height} width={viewBox.width}>
				<circle cx='50' cy='50' r='10' />
			</svg>
		</Root>
	);
}

export default Canvas;