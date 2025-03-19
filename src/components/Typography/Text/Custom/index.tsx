import { type TTextRootProps, TextRoot } from '../Root'

type TProps = TTextRootProps

export type TTextCustomProps = TTextRootProps

export function TextCustom(props: TProps) {
	return <TextRoot {...props}>{props.children}</TextRoot>
}
