import { ButtonRoot, type TButtonRootProps } from '../Root'

export type TButtonProps = TButtonRootProps

export function ButtonDefault(props: TButtonProps) {
	return (
		<ButtonRoot size="3" variant="classic" {...props}>
			{props.children}
		</ButtonRoot>
	)
}
