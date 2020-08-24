import Head from 'next/head'
import styled from 'styled-components';

import TopBar from '../../components/layout/top-bar';
import ToolsContainer from '../../components/layout/tools-container';
import InfoDisplay from '../../components/layout/info-display';
import DrawView from '../../components/layout/draw-view';

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>My Home Page Title</title>
			</Head>
			<TopBar />
			<MainContainer>
				<ToolsContainer />
				<DrawView />
				<InfoDisplay />
			</MainContainer>
		</>
	)
}
