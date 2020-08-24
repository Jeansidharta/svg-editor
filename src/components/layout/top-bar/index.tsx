import React from 'react';
import styled from 'styled-components';

import Item from './item';

const Root = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary.lighter};
	border-bottom: 1px solid ${props => props.theme.colors.gray.light};
	display: flex;
	justify-content: space-between;
	padding: 8px;
`;

const LinksContainer = styled.ul`
	padding: 0;
	margin: 0;
	align-items: center;
	display: flex;
`;

type TopBarProps = React.PropsWithoutRef<{}>;

type TopBarComponent = React.FunctionComponent<TopBarProps>;

const TopBar: TopBarComponent = () => {
	return (
		<Root>
			<LinksContainer>
				<Item>File</Item>
				<Item>Tools</Item>
				<Item>About</Item>
			</LinksContainer>
		</Root>
	);
}

export default TopBar;