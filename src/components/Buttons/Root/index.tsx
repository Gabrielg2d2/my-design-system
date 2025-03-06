import { Button, type ButtonProps } from '@radix-ui/themes'

export type TButtonProps = ButtonProps

export function ButtonRoot(props: TButtonProps) {
	return (
		<Button size="3" variant="classic" {...props}>
			{props.children}
		</Button>
	)
}
