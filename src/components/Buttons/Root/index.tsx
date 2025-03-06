import { Button, type ButtonProps } from '@radix-ui/themes'

export type TButtonRootProps = ButtonProps

export function ButtonRoot(props: TButtonRootProps) {
	return (
		<Button size="3" variant="classic" {...props}>
			{props.children}
		</Button>
	)
}
