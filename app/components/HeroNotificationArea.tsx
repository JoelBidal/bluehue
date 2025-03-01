import Image from "next/image";
import Notification from "./Notification";
import PixelTrail from "./PixelTrail";

export function HeroNotificationArea() {
    return (
        <div className="relative grow max-w-[100%] min-h-[95vh] md:min-h-[auto] md:max-w-[40%] 2xl:max-w-[45%] max-h-[calc(100vh-100px)] bg-mainBlue rounded-sm overflow-hidden flex items-end justify-center py-[70px]">
          <div className="z-10">
            <Notification />
          </div>
          <Image src="/hero-image.jpg" alt="Hero Image" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          <PixelTrail pixelSize={10} delay={400} fadeDuration={0.5} pixelClassName="bg-white" />
      </div> 
    );
}
export default HeroNotificationArea;
