import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextXsProps = TProps

export function TextXs(props: TProps) {
	const { size, ...rest } = props

	return (
		<TextRoot size="1" {...rest}>
			{props.children}
		</TextRoot>
	)
}
