import React from 'react';
import { ToolName } from '../models/tool';

type SelectedToolContext = {
	selectedTool: ToolName | null,
	setSelectedTool: (newTool: ToolName | null) => void,
};

const context = React.createContext<SelectedToolContext>(null as any);

const SelectedToolProvider = ({ ...props }) => {
	const [selectedTool, setSelectedTool] = React.useState<ToolName | null>(null);

	return <context.Provider value={{
		selectedTool,
		setSelectedTool,
	}} {...props} />;
}

const useSelectedTool = () => {
	return React.useContext(context);
}

export { useSelectedTool };
export default SelectedToolProvider;