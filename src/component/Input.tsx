export function Input(props: React.ComponentPropsWithoutRef<"input"> & {
    type?: string
}) {

    return <input {...props}
    className="focus:outline-none border break-words text-stone-800 px-4 py-2 rounded bg-transparent border-stone-100 border-b-stone-400"
    >
    </input>
}

