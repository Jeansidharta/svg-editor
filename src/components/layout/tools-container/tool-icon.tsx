import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
	width: 40px;
	height: 40px;
	padding: 10px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	outline: none;
`;

type ToolIconProps = React.PropsWithoutRef<{
	icon: React.ReactNode,
}>;

type ToolIconComponent = React.FunctionComponent<ToolIconProps>;

const ToolIcon: ToolIconComponent = ({ icon }) => {
	return (
		<Root>
			{icon}
		</Root>
	);
}

export default ToolIcon;