import { HeaderRoot, type THeaderRootProps } from '../Root'

type TProps = THeaderRootProps

export type THeaderXsProps = TProps

export function HeaderXs(props: TProps) {
	const { size, ...rest } = props

	return (
		<HeaderRoot size="6" {...rest}>
			{props.children}
		</HeaderRoot>
	)
}
