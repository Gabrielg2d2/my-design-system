import { HeaderRoot, type THeaderRootProps } from '../Root'

type TProps = THeaderRootProps

export type THeaderSmProps = TProps

export function HeaderSm(props: TProps) {
	const { size, ...rest } = props

	return (
		<HeaderRoot size="7" {...rest}>
			{props.children}
		</HeaderRoot>
	)
}
