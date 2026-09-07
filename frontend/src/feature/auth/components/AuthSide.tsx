import { useNavigate } from "react-router";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FooterSignUp } from "../components/FooterSignUp"
import { Title } from "./Title";
import { OAuthBlock } from "./OAuthBlock";
import { useState } from "react"; 
import { useAuth } from "../hooks/useAuth";


export function AuthSide() {
    const navigate = useNavigate();

    const { loading, handleLogin } = useAuth() 

    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("")



    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle login logic here
        handleLogin({username , password})
        navigate("/")
    }

    if(loading) {
        return (<main><h1>Loading......</h1></main>)
    }

    function signUpPageRedirect() {
        navigate("/register");
    }

    return (
        <div className="w-[40%] min-h-screen flex flex-col items-center justify-center gap-12 bg-linear-to-br shadow-2xl ">
            <div className="w-full max-w-md flex flex-col items-center justify-center gap-12">
                <Title />
                <Heading heading="Welcome Back" description="Login to your account" />
                <div className="grid grid-cols-2 gap-x-10    gap-y-5">
                    <OAuthBlock imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" providerName="Google" />
                    <OAuthBlock imgUrl="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" providerName="Github" />
                    <OAuthBlock imgUrl="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" providerName="Discord" />
                    <OAuthBlock imgUrl="https://s3-alpha.figma.com/hub/file/2216033911640032635/d70c21b8-4584-4ace-8bb8-4066dc87a2d6-cover.png" providerName="Apple-ID" />
                </div>
                <div className="flex flex-col gap-7  rounded-md bg-blend-darken shadow-2xl bg-gray-800/30 px-14 py-7" >
                    <form className="flex flex-col items-center justify-center gap-5 w-full">
                        <Input change={(e) => setUsername(e.target.value)} label="Username" type="username" placeholder="Enter Your Username" />
                        <Input change={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Enter Your Password" />
                        <button onClick={handleSubmit} type="submit" className="bg-blue-500 cursor-pointer text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 active:scale-90">Login</button>
                    </form>
                </div>
                <FooterSignUp detail="Don't have an account ? " func={signUpPageRedirect} redirectBtn=" Sign-Up" />
            </div>
        </div>
    )
}