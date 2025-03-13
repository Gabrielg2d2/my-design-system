import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextMdProps = Omit<TProps, 'size'>

export function TextMd(props: TProps) {
	return (
		<TextRoot size="1" {...props}>
			{props.children}
		</TextRoot>
	)
}
