type footerSignUpTypes = {
    detail: string;
    redirectBtn: string;
    func: () => void;
}

export function FooterSignUp(props: footerSignUpTypes) {
    return (
        <div className="flex items-center gap-2 text-white">
            <div>{props.detail}</div>
            <button
                type="button"
                onClick={props.func}
                className="cursor-pointer font-semibold text-blue-300 transition hover:text-blue-200 hover:underline"
            >
                {props.redirectBtn}
            </button>
        </div>
    )
}