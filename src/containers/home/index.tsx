import Head from 'next/head'
import styled from 'styled-components';
import TopBar from '../../components/layout/top-bar';
import ToolsContainer from '../../components/layout/tools-container';
import InfoDisplay from '../../components/layout/info-display';

const Canvas = styled.div`
	width: 100%;
	height: 100%;
	font-size: 32px;
	overflow-y: auto;
`;

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
				<Canvas />
				<InfoDisplay />
			</MainContainer>
		</>
	)
}
