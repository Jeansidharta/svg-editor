import React from 'react';
import styled from 'styled-components';
import Canvas from './canvas';

const Root = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.gray.main};
`;

type DrawViewProps = React.PropsWithoutRef<{
}>;

type DrawViewComponent = React.FunctionComponent<DrawViewProps>;

const DrawView: DrawViewComponent = ({  }) => {
	return (
		<Root>
			<Canvas />
		</Root>
	);
}

export default DrawView;