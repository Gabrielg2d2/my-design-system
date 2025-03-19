import { type TTextRootProps, TextRoot } from '../Root'

export type TTextCustomProps = TTextRootProps

export function TextCustom(props: TTextCustomProps) {
	return <TextRoot {...props}>{props.children}</TextRoot>
}
