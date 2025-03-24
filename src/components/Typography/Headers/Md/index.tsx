import { HeaderRoot, type THeaderRootProps } from '../Root'

type TProps = THeaderRootProps

export type THeaderMdProps = TProps

export function HeaderMd(props: TProps) {
	const { size, ...rest } = props

	return (
		<HeaderRoot size="8" {...rest}>
			{props.children}
		</HeaderRoot>
	)
}
