export function FormGroup(props: React.ComponentPropsWithoutRef<"div">) {
    return (
    <div {...props}
    className="flex flex-col gap-2 border-8 border-gray-700 p-20"
    >
        {props.children}
    </div>
    )
}