import { AuthSide } from "../components/AuthSide";
import { BannerSide } from "../components/BannerSide";


export default function Login() {

    return (
        <div className="flex min-h-screen w-full bg-gray-900">
            <BannerSide />
            <AuthSide />
        </div>
    )
}
