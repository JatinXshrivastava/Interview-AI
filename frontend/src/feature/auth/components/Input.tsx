type InputProps = {
    label: string;  
    type: string;
    placeholder: string;
};


export function Input(props: InputProps) {
    return (
        <div className="flex flex-col justify-center text-white" >
            <label htmlFor="username">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}
                className=" rounded-md py-2 px-4 bg-blue-50 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
    )
}