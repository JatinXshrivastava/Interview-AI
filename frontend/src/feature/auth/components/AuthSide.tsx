import { useNavigate } from "react-router";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FooterSignUp } from "../components/footerSignUp"


export function AuthSide() {
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Handle login logic here
    }

    function signUpPageRedirect() {
        navigate("/register");
    }

    return (
        <div className="w-[40%] min-h-screen flex flex-col items-center justify-center gap-12 bg-linear-to-br shadow-2xl ">
            <div className="w-full max-w-md flex flex-col items-center justify-center gap-12">
                <Heading heading="Welcome Back" description="Login to your account" />
                <form className="flex flex-col items-center justify-center gap-5 w-full">
                    <Input label="Username" type="username" placeholder="Enter Your Username" />
                    <Input label="Password" type="password" placeholder="Enter Your Password" />
                    <button onClick={handleSubmit} type="submit" className="bg-blue-500 cursor-pointer text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 active:scale-90">Login</button>
                    <FooterSignUp detail="don't have an account ? " func={signUpPageRedirect} redirectBtn=" Sign-Up" />
                </form>
            </div>
        </div>
    )
}