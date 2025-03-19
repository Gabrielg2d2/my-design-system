import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextSmProps = TProps

export function TextSm(props: TProps) {
	return (
		<TextRoot size="2" {...props}>
			{props.children}
		</TextRoot>
	)
}
