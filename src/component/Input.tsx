export function Input(props: React.ComponentPropsWithoutRef<"input"> & {
    type?: string
}) {

    return <input {...props}
    className="focus:outline-none border break-words text-neutral-800 px-4 py-2 rounded border-neutral-100 border-b-neutral-400"
    >
    </input>
}

