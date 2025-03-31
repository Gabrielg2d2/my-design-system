import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitleXsProps = TProps

export function SubtitleXs(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="4" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
