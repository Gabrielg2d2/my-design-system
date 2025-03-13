import { Text, type TextProps } from '@radix-ui/themes'

export type TTextRootProps = TextProps

export function TextRoot(props: TTextRootProps) {
	return <Text {...props}>{props.children}</Text>
}
