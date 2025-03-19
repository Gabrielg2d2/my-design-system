import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextSmProps = TProps

export function TextSm(props: TProps) {
	const { size, ...rest } = props

	return (
		<TextRoot size="2" {...rest}>
			{props.children}
		</TextRoot>
	)
}
