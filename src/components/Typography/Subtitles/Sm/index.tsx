import { SubtitlesRoot, type TSubtitlesRootProps } from '../Root'

type TProps = TSubtitlesRootProps

export type TTextXsProps = TProps

export function SubtitlesSm(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitlesRoot size="5" {...rest}>
			{props.children}
		</SubtitlesRoot>
	)
}
