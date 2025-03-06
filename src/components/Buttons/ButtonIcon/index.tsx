import { Spinner } from '@radix-ui/themes'
import { ButtonRoot, type TButtonRootProps } from '../Root'

export type TButtonIconProps = TButtonRootProps & {
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	loadingIcon?: boolean
}

export function ButtonIcon(props: TButtonIconProps) {
	return (
		<ButtonRoot size="3" variant="classic" {...props}>
			{props.iconLeft && (
				<Spinner loading={props.loadingIcon}>{props.iconLeft}</Spinner>
			)}
			{props.children}
			{props.iconRight && (
				<Spinner loading={props.loadingIcon}>{props.iconRight}</Spinner>
			)}
		</ButtonRoot>
	)
}
