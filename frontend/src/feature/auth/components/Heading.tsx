type HeadingProps = {
    heading : String , 
    description : String 
}

export function Heading(props : HeadingProps) {
    return (
        <div className="flex flex-col text-white items-center justify-center">
            <div className="text-3xl font-semibold">{props.heading}</div>
            <div className="text-sm">{props.description}</div>
        </div>
    )
}