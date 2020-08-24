import React from 'react';
import styled from 'styled-components';
import DisplayViewBox from './display-view-box';

const Root = styled.div`
	padding: 4px;
	border-left: 1px solid ${props => props.theme.colors.gray.light};
`;

type InfoDisplayProps = React.PropsWithoutRef<{
}>;

type InfoDisplayComponent = React.FunctionComponent<InfoDisplayProps>;

const InfoDisplay: InfoDisplayComponent = ({  }) => {
	return (
		<Root>
			<DisplayViewBox />
		</Root>
	);
}

export default InfoDisplay;