import { BannerSide } from "../components/BannerSide";
import { RegisterSide } from "../components/RegisterSide";

export default function Register() {
    return (
        <div className="flex min-h-screen w-full bg-gray-900">
            <RegisterSide />
            <BannerSide />
        </div>
    )
}
