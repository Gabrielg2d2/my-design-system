import { SubtitlesRoot, type TSubtitlesRootProps } from '../Root'

type TProps = TSubtitlesRootProps

export type TTextXsProps = TProps

export function SubtitlesMd(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitlesRoot size="6" {...rest}>
			{props.children}
		</SubtitlesRoot>
	)
}
