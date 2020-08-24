import React from 'react';

type ViewBox = {
	x: number,
	y: number,
	width: number,
	height: number,
};

type CanvasViewBoxContext = {
	viewBox: ViewBox,
	setViewBox: (newViewBox: ViewBox) => void,
};

const context = React.createContext<CanvasViewBoxContext>(null as any);

const CanvasViewBoxProvider = ({ ...props }) => {
	const [viewBox, setViewBox] = React.useState<ViewBox>({ x: 0, y: 0, width: 100, height: 100, });

	return <context.Provider value={{
		viewBox,
		setViewBox,
	}} {...props} />;
}

const useCanvasViewBox = () => {
	return React.useContext(context);
}

export { useCanvasViewBox };
export default CanvasViewBoxProvider;