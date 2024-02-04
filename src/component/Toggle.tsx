export function Toggle(props: React.ComponentPropsWithoutRef<"span">) {
    return (
        <label className="relative inline-flex items-center mb-4 cursor-pointer w-60">
            <input type="checkbox" value="" className="sr-only peer"/>
            <div className="w-11 h-6 bg-neutral-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
            <span className="ml-3 font-medium text-neutral-600 flex">{props.children}</span>
        </label>
    )
}