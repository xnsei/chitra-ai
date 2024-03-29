import Image from "next/image";
import Subtract from "../../public/Subtract.png";
import UsersAvatarPhoto from "../../public/UsersAvatarPhoto.png";
import bgImage from "../../public/bg-image2.png";
import {GoArrowUpRight} from "react-icons/go";
import {SlideDown, SlideLeft, SlideRight, SlideUp} from "@/animations/animations";

export default function Hero2() {
    return (
        <div className="w-full my-16 xl:mt-40">
            <div className="max-w-screen-2xl mx-auto px-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex col-span-2 z-10">
                        <div className="mr-4">
                            <SlideRight delay={0.2}>
                                <Image src={Subtract} alt="parrotEye"/>
                            </SlideRight>
                        </div>
                        <div className="flex-col flex-auto">
                            <SlideDown delay={0.5}>
                                <div
                                    className="h-36 mb-4 px-8 py-4 rounded-3xl text-5xl flex bg-gradient-to-b from-[#D2FF3A] to-[#000000]">
                                    <div className="my-auto">
                                        <h1>300+</h1>
                                        <h1>Creators</h1>
                                    </div>
                                </div>
                            </SlideDown>
                            <div className="-ml-[27%]">
                                <SlideUp delay={0.8}>
                                    <div className="h-40 z-10 bg-[#6843EC] p-4 rounded-3xl">
                                        <h1 className="text-2xl ml-4 mb-4 max-w-[400px]">We have the best AI Image
                                            generator</h1>
                                        <div className="flex items-center ml-4">
                                            <Image className="mr-4" src={UsersAvatarPhoto} alt="UserAvatar"/>
                                            <div className="font-light text-sm">
                                                <p>Join our Community.</p>
                                                <p>We are waiting for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                    <div className="z-10">
                        <SlideLeft delay={1.1}>
                            <div className="h-56 mb-4 rounded-3xl">
                                <Image className="object-cover w-full h-full" src={bgImage} alt="parrotEye"/>
                            </div>
                        </SlideLeft>
                        <SlideUp delay={1.4}>
                            <button className="h-20 text-black text-3xl w-full bg-[#D2FF3A] rounded-3xl">
                                <div className="flex justify-center items-center">
                                    <p className="mr-2">Try Free</p>
                                    <GoArrowUpRight/>
                                </div>
                            </button>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </div>
    )
}