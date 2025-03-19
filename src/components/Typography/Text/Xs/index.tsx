import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextXsProps = TProps

export function TextXs(props: TProps) {
	return (
		<TextRoot size="1" {...props}>
			{props.children}
		</TextRoot>
	)
}
