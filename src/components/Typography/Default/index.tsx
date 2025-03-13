import { type TTextRootProps, TextRoot } from '../Root'

export type TTextDefaultProps = TTextRootProps

export function TextDefault(props: TTextDefaultProps) {
	return <TextRoot>{props.children}</TextRoot>
}
