import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 100px;
	height: 100px;
	background-color: white;
`;

type CanvasProps = React.PropsWithoutRef<{
}>;

type CanvasComponent = React.FunctionComponent<CanvasProps>;

const Canvas: CanvasComponent = ({  }) => {
	return (
		<Root>
			<svg viewBox='0 0 100 100'>
				<circle cx='50' cy='50' r='10' />
			</svg>
		</Root>
	);
}

export default Canvas;