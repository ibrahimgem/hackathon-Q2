import Image from "next/image"
import Link from "next/link"
import Profil from "@/public/Profil.png"
import SearchSVG from "@/public/icons/search.svg"
import ToggleSVG from "@/public/icons/toggle.svg"
import HeartSVG from "@/public/icons/heart.svg"
import BellSVG from "@/public/icons/bell.svg"
import SettingSVG from "@/public/icons/setting.svg"

export default function Navbar() {
    return (
        <nav className="max-w-[1440px] m-auto flex items-center sm:h-[124px] border flex-col justify-between pb-10 sm:pb-0">
            <div className="flex m-auto w-full items-center justify-between">
                <div className="flex md:justify-start sm:px-6 py-8 sm:py-4 items-center gap-5">
                    <div className="mx-5 sm:mx-10 text-blue-600 font-bold text-3xl">
                        <Link href="/">
                            MORENT
                        </Link>
                    </div>
                    {/* Search */}
                    <div className='hidden sm:flex items-center border max-w-full rounded-3xl px-4 py-2'>
                        <Image
                            src={SearchSVG}
                            width={24}
                            height={24}
                            alt="Search"
                        />

                        <input type="text"
                            className="max-w-full px-80 text-gray-500 text-sm outline-none pl-2"
                            placeholder="Search something here"
                        />
                        <Image
                            src={ToggleSVG}
                            width={24}
                            height={24}
                            alt="Toggle"
                        />

                    </div>
                </div>
                {/*Menu Icons Section */}
                <div className="flex justify-end px-5 sm:px-10 py-4 gap-4 ">
                    {/* Heart */}
                    <div className="hidden sm:block">
                        <Link href="/">
                            <Image
                                src={HeartSVG}
                                width={44}
                                height={44}
                                alt="Heart"
                            />
                        </Link>
                    </div>
                    {/* Bell */}
                    <div className="hidden sm:block">
                        <Link href="/">
                            <Image
                                src={BellSVG}
                                width={44}
                                height={44}
                                alt="Bell"
                            />

                        </Link>
                    </div>

                    {/* Setting */}
                    <div className="hidden sm:block">
                        <Link href="/">
                            <Image
                                src={SettingSVG}
                                width={44}
                                height={44}
                                alt="Setting"
                            />

                        </Link>
                    </div>
                    <div className="w-11 sm:border rounded-full">
                        <Link href="/">
                            <Image
                                src={Profil}
                                width={44}
                                height={44}
                                alt="Profile"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Search Mobile */}
            <div className="flex gap-7">
                <div className='sm:hidden flex items-center border w-[263px] rounded-lg px-4 py-2'>
                    <Image
                        src={SearchSVG}
                        width={24}
                        height={24}
                        alt="Search"
                    />

                    <input type="text"
                        className="max-w-full w-[492px] flex-1 text-gray-500 text-sm outline-none pl-2"
                        placeholder="Search something here"
                    />

                </div>
                <div className="border w-12 rounded-lg flex items-center justify-center md:hidden">
                    <Image
                        src={ToggleSVG}
                        width={24}
                        height={24}
                        alt="Toggle"
                    />
                </div>
            </div>
        </nav>
    )
}