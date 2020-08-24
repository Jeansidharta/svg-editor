import React from 'react';
import styled from 'styled-components';

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
			Info
		</Root>
	);
}

export default InfoDisplay;