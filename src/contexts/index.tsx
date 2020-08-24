import React from 'react';

import SelectedToolProvider from './selected-tool';

/** Place your React's context providers inside this component. They will automatically
* be visible in your whole application. */
const Providers: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
	return <SelectedToolProvider>
		{children}
	</SelectedToolProvider>
}

export default  Providers;