import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
`;

type CanvasProps = React.PropsWithoutRef<{
}>;

type CanvasComponent = React.FunctionComponent<CanvasProps>;

const Canvas: CanvasComponent = ({  }) => {
	return (
		<Root>
			Canvas
		</Root>
	);
}

export default Canvas;