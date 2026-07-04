type OAuthBlockTypes = {
    imgUrl : string , 
    providerName : string 
}

export function OAuthBlock(props : OAuthBlockTypes) {
    return (
        <div className="flex items-center gap-2 border rounded-xl px-4 py-2 shadow-md shadow-gray-700 bg-gray-900 active:scale-95 cursor-pointer">
            <img src={props.imgUrl} width="20" alt="img" /> 
            <div className="text-gray-200">{props.providerName}</div>
        </div>
    )
}