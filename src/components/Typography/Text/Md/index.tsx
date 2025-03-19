import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextMdProps = TProps

export function TextMd(props: TProps) {
	return (
		<TextRoot size="3" {...props}>
			{props.children}
		</TextRoot>
	)
}
