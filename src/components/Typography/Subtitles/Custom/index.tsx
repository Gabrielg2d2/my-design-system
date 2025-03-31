import { SubtitleRoot, type TSubtitleRootProps } from '../Root'

type TProps = TSubtitleRootProps

export type TSubtitlesCustomProps = TProps

export function SubtitlesCustom(props: TProps) {
	return <SubtitleRoot {...props}>{props.children}</SubtitleRoot>
}
