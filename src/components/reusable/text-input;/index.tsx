import React from 'react';
import styled from 'styled-components';

const Root = styled.label`
	display: flex;
	flex-direction: column;
	margin: 8px 0px;
`;

const Input = styled.input`
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
`;

type TextInputProps = React.PropsWithoutRef<{
	label: string,
	numberOfLines?: number,
	inputRef?: React.RefObject<HTMLInputElement>,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
	defaultValue?: string | number,
}> & React.ComponentProps<'label'>;

type TextInputComponent = React.FunctionComponent<TextInputProps>;

const TextInput: TextInputComponent = ({
	label,
	ref,
	numberOfLines = 1,
	inputRef,
	onChange,
	defaultValue,
	...props
}) => {
	return (
		<Root {...props}>
			{label}
			{ numberOfLines === 1
				? <Input ref={inputRef} onChange={onChange} defaultValue={defaultValue} />
				: <TextArea />
			}
		</Root>
	);
}

export default TextInput;