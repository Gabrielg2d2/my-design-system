import { Button, type ButtonProps } from '@radix-ui/themes'

export type TButtonRootProps = ButtonProps & {
	fullWidth?: boolean
	width?: number
	maxWidth?: number
	propsStyle?: React.CSSProperties
}

export function ButtonRoot(props: TButtonRootProps) {
	return (
		<Button
			size="3"
			variant="classic"
			style={{
				width: props.fullWidth ? '100%' : props.width,
				maxWidth: props.fullWidth ? '100%' : props.maxWidth,
				...props.propsStyle,
			}}
			{...props}
		>
			{props.children}
		</Button>
	)
}
