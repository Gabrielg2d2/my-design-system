import { SubtitlesRoot, type TSubtitlesRootProps } from '../Root'

type TProps = TSubtitlesRootProps

export type TTextXsProps = TProps

export function SubtitlesXs(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitlesRoot size="4" {...rest}>
			{props.children}
		</SubtitlesRoot>
	)
}
