import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextMdProps = TProps

export function TextMd(props: TProps) {
	const { size, ...rest } = props

	return (
		<TextRoot size="3" {...rest}>
			{props.children}
		</TextRoot>
	)
}
