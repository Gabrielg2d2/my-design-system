import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitlesXsProps = TProps

export function SubtitlesXs(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="4" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
