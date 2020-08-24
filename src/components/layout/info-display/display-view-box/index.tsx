import React from 'react';
import styled from 'styled-components';
import TextInput from '../../../reusable/text-input;';
import { useCanvasViewBox } from '../../../../contexts/canvas-view-box';

const Root = styled.div`
`;

const Form = styled.form`
`;

type DisplayViewBoxProps = React.PropsWithoutRef<{
}>;

type DisplayViewBoxComponent = React.FunctionComponent<DisplayViewBoxProps>;

const DisplayViewBox: DisplayViewBoxComponent = ({  }) => {
	const { setViewBox, viewBox } = useCanvasViewBox();

	const xInputRef = React.useRef<HTMLInputElement>(null);
	const yInputRef = React.useRef<HTMLInputElement>(null);
	const widthInputRef = React.useRef<HTMLInputElement>(null);
	const heightInputRef = React.useRef<HTMLInputElement>(null);

	function getInputValues () {
		const x = xInputRef.current!.value;
		const y = yInputRef.current!.value;
		const width = widthInputRef.current!.value;
		const height = heightInputRef.current!.value;

		try {
			return {
				x: Number(x.trim()),
				y: Number(y.trim()),
				width: Number(width.trim()),
				height: Number(height.trim()),
			};
		} catch (e) {
			console.error(e);
		}
	}

	function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log('submited!');

		const values = getInputValues();

		// Error
		if (!values) return;

		setViewBox(values);
	}

	return (
		<Root>
			<Form onSubmit={handleSubmit}>
				<TextInput defaultValue={viewBox.x} label='x' inputRef={xInputRef} />
				<TextInput defaultValue={viewBox.y} label='y' inputRef={yInputRef} />
				<TextInput defaultValue={viewBox.width} label='width' inputRef={widthInputRef} />
				<TextInput defaultValue={viewBox.height} label='height' inputRef={heightInputRef} />

				{/* This button is to allow for the form element to send the "submit" event */}
				<button style={{ display: 'none' }} type='submit' />
			</Form>
		</Root>
	);
}

export default DisplayViewBox;