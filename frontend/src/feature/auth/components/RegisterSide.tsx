import { useNavigate } from "react-router";
import { Heading } from "./Heading";
import { Input } from "./Input";
import { FooterSignUp } from "./FooterSignUp";

export function RegisterSide() {
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Handle login logic here
    }

    function loginRedirect() {
        navigate("/login");
    }

    return (
        <div className="w-[40%] min-h-screen flex flex-col items-center justify-center gap-12 bg-linear-to-br shadow-2xl ">
            <div className="w-full max-w-md flex flex-col items-center justify-center gap-12">
                <Heading heading="Let's Get Started ! " description="Create an account to continue" />
                <form className="flex flex-col items-center justify-center gap-5 w-full">
                    <Input label="Username" type="username" placeholder="Enter Your Username" />
                    <Input label="Email" type="email" placeholder="Enter Your Email" />
                    <Input label="Password" type="password" placeholder="Enter Your Password" />
                    <button onClick={handleSubmit} type="submit" className="bg-blue-500 cursor-pointer text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600 active:scale-90">Login</button>
                    <FooterSignUp detail="Already have an account ? " func={loginRedirect} redirectBtn=" Log-In" />
                </form>
            </div>
        </div>
    )
}