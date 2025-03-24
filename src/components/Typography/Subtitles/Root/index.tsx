import { Text, type TextProps } from '@radix-ui/themes'

export type TSubtitleRootProps = TextProps

export function SubtitleRoot(props: TSubtitleRootProps) {
	return <Text {...props}>{props.children}</Text>
}
