import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitleMdProps = TProps

export function SubtitleMd(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="6" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
