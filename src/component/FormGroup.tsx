export function FormGroup(props: React.ComponentPropsWithoutRef<"div">) {
    return (
    <div {...props}
    className="flex flex-col gap-2 border-8 p-20 border-none"
    >
        {props.children}
    </div>
    )
}