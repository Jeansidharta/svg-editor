import React from 'react';
import styled from 'styled-components';
import Canvas from './canvas';
import useTranslation from './use-translation';

const Root = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.gray.main};
	overflow: hidden;
`;

const CameraTranslateContainer = styled.div``;
const CameraRotateContainer = styled.div``;
const CameraZoomContainer = styled.div``;

type DrawViewProps = React.PropsWithoutRef<{
}>;

type DrawViewComponent = React.FunctionComponent<DrawViewProps>;

const DrawView: DrawViewComponent = ({  }) => {
	const rootRef = React.useRef<HTMLDivElement>(null);

	const cameraTranslateRef = React.useRef<HTMLDivElement>(null);
	const cameraRotateRef = React.useRef<HTMLDivElement>(null);
	const cameraZoomRef = React.useRef<HTMLDivElement>(null);

	useTranslation(rootRef, cameraTranslateRef);

	return (
		<Root ref={rootRef}>
			<CameraTranslateContainer ref={cameraTranslateRef}>
				<CameraRotateContainer ref={cameraRotateRef}>
					<CameraZoomContainer ref={cameraZoomRef}>
						<Canvas />
					</CameraZoomContainer>
				</CameraRotateContainer>
			</CameraTranslateContainer>
		</Root>
	);
}

export default DrawView;