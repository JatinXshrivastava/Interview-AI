import { MeshGradientBackground } from "./MeshGradientBackground";

export function BannerSide() {
    return (
        <div className="relative w-[60%] min-h-screen overflow-hidden">
            <MeshGradientBackground className="absolute inset-0" />
        </div>
    )
}