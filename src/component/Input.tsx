export function Input(props: React.ComponentPropsWithoutRef<"input">) {
    return <input {...props}
    type="text"
    className="focus:outline-none border border-gray-800 light:text-gray-800 px-4 py-2 rounded bg-transparent border-b-blue-400"
    >
    </input>
}