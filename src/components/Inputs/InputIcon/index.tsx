import { TextField } from '@radix-ui/themes'
import { InputRoot, type TInputRootProps } from '../Root'

export type TInputIconProps = TInputRootProps & {
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
}

export function InputIcon(props: TInputIconProps) {
	return (
		<InputRoot {...props}>
			{!props.iconLeft && props.iconRight && <TextField.Slot />}
			{props.iconLeft && <TextField.Slot>{props.iconLeft}</TextField.Slot>}
			{props.iconRight && <TextField.Slot>{props.iconRight}</TextField.Slot>}
		</InputRoot>
	)
}
