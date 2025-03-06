import { TextField } from '@radix-ui/themes'

export type TInputRootProps = TextField.RootProps

export function InputRoot(props: TInputRootProps) {
	return <TextField.Root radius="large" size="3" {...props} />
}
