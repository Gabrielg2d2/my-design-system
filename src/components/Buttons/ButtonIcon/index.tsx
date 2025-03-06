import { ButtonRoot, type TButtonRootProps } from '../Root'

export type TButtonIconProps = TButtonRootProps & {
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
}

export function ButtonIcon(props: TButtonIconProps) {
	return (
		<ButtonRoot size="3" variant="classic" {...props}>
			{props.children}
		</ButtonRoot>
	)
}
