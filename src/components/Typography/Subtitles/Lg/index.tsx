import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitleLgProps = TProps

export function SubtitleLg(props: TProps) {
	const { size, ...rest } = props

	return (
		<SubtitleRoot size="7" {...rest}>
			{props.children}
		</SubtitleRoot>
	)
}
