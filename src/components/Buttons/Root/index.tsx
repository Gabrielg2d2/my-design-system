import { Button, type ButtonProps } from '@radix-ui/themes'

export type TButtonRootProps = ButtonProps & {
	fullWidth?: boolean
	width?: string
	maxWidth?: string
}

export function ButtonRoot(props: TButtonRootProps) {
	return (
		<Button
			size="3"
			variant="classic"
			style={{
				width: props.fullWidth ? '100%' : props.width,
				maxWidth: props.maxWidth,
			}}
			{...props}
		>
			{props.children}
		</Button>
	)
}
