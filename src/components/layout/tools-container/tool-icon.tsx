import React from 'react';
import styled from 'styled-components';
import { ToolName } from '../../../models/tool';
import { useSelectedTool } from '../../../contexts/selected-tool';

const Root = styled.button<{ selected: boolean }>`
	width: 40px;
	height: 40px;
	padding: 10px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	transition-duration: 200ms;
	transition-properties: background-color;
	border-radius: 4px;

	${({ selected, theme }) => selected ? `
		background-color: ${theme.colors.gray.main};
	` : `
		:hover, :focus {
			background-color: ${theme.colors.gray.main};
		}`
	}
`;

type ToolIconProps = React.PropsWithoutRef<{
	icon: React.ReactNode,
	tool: ToolName,
}>;

type ToolIconComponent = React.FunctionComponent<ToolIconProps>;

const ToolIcon: ToolIconComponent = ({ icon, tool }) => {
	const { selectedTool, setSelectedTool } = useSelectedTool();

	const isThisToolSelected = selectedTool === tool;

	function handleClick () {
		if (isThisToolSelected) setSelectedTool(null);
		else setSelectedTool(tool);
	}

	return (
		<Root selected={isThisToolSelected} onClick={handleClick}>
			{icon}
		</Root>
	);
}

export default ToolIcon;