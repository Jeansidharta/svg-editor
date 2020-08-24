import React from 'react';

type PreventContextMenuComponent = React.FunctionComponent<{}>;

const PreventContextMenu: PreventContextMenuComponent = () => {
	function handleContextMenu (event: MouseEvent) {
		event.preventDefault();
	}

	React.useEffect(() => {
		document.body.addEventListener('contextmenu', handleContextMenu);
		return () => document.body.removeEventListener('contextmenu', handleContextMenu);
	}, []);

	return null;
}

export default PreventContextMenu;