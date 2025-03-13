import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextSmProps = Omit<TProps, 'size'>

export function TextSm(props: TProps) {
	return (
		<TextRoot size="2" {...props}>
			{props.children}
		</TextRoot>
	)
}
