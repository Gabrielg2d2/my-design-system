import { HeaderRoot, type THeaderRootProps } from '../Root'

type TProps = THeaderRootProps

export type THeaderLgProps = TProps

export function HeaderLg(props: TProps) {
	const { size, ...rest } = props

	return (
		<HeaderRoot size="9" {...rest}>
			{props.children}
		</HeaderRoot>
	)
}
