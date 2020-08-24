import React from 'react';
import styled from 'styled-components';
import Canvas from './canvas';
import useTranslation from './use-translation';
import useZoom from './use-zoom';

const Root = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.gray.main};
	overflow: hidden;
	cursor: move;
`;

const CameraItem = styled.div`
	width: max-content;
	height: max-content;
`;

const CameraTranslateContainer = styled(CameraItem)``;
const CameraZoomContainer = styled(CameraItem)``;

type DrawViewProps = React.PropsWithoutRef<{
}>;

type DrawViewComponent = React.FunctionComponent<DrawViewProps>;

const DrawView: DrawViewComponent = ({  }) => {
	const rootRef = React.useRef<HTMLDivElement>(null);

	const cameraTranslateRef = React.useRef<HTMLDivElement>(null);
	const cameraZoomRef = React.useRef<HTMLDivElement>(null);

	useTranslation(rootRef, cameraTranslateRef);
	useZoom(rootRef, cameraZoomRef);

	return (
		<Root ref={rootRef}>
			<CameraTranslateContainer ref={cameraTranslateRef}>
				<CameraZoomContainer ref={cameraZoomRef}>
					<Canvas />
				</CameraZoomContainer>
			</CameraTranslateContainer>
		</Root>
	);
}

export default DrawView;