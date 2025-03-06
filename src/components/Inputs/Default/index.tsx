import { InputRoot, type TInputRootProps } from '../Root'

export type TInputDefaultProps = TInputRootProps

export function InputDefault(props: TInputDefaultProps) {
	return <InputRoot {...props} />
}
