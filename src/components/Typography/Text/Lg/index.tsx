import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextLgProps = TProps

export function TextLg(props: TProps) {
	const { size, ...rest } = props

	return (
		<TextRoot size="4" {...rest}>
			{props.children}
		</TextRoot>
	)
}
