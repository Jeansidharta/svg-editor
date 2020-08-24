import React from 'react';
import styled from 'styled-components';
import ToolIcon from './tool-icon';
import Images from '../../../constants/images';

const Root = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 4px;
	border-right: 1px solid ${props => props.theme.colors.gray.light};
`;

const CircleImage = Images.icons.circle;
const SquareImage = Images.icons.square;

type ToolsContainerProps = React.PropsWithoutRef<{
}>;

type ToolsContainerComponent = React.FunctionComponent<ToolsContainerProps>;

const ToolsContainer: ToolsContainerComponent = ({  }) => {
	return (
		<Root>
			<ToolIcon icon={<CircleImage />} />
			<ToolIcon icon={<SquareImage />} />
		</Root>
	);
}

export default ToolsContainer;