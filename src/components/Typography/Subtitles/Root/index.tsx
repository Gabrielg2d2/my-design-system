import { Text, type TextProps } from '@radix-ui/themes'

export type TSubtitlesRootProps = TextProps

export function SubtitlesRoot(props: TSubtitlesRootProps) {
	return <Text {...props}>{props.children}</Text>
}
