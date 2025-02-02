import Image from "next/image"
import Link from "next/link"
import Profil from "@/public/Profil.png"

export default function Navbar() {
    return (
        <nav className="max-w-[90rem] m-auto flex items-center sm:h-32 border flex-col justify-between pb-10 sm:pb-0">
            <div className="flex m-auto w-full items-center justify-between">
                <div className="flex md:justify-start sm:px-6 py-8 sm:py-4 items-center gap-5">
                    <div className="mx-5 sm:mx-10 text-blue-600 font-bold text-3xl">
                        <Link href="/">
                            MORENT
                        </Link>
                    </div>
                    {/* Search */}
                    <div className='hidden sm:flex items-center border max-w-full rounded-3xl px-4 py-2'>
                        <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
                        <input type="text"
                            className="max-w-full px-80 text-gray-500 text-sm outline-none pl-2"
                            placeholder="Search something here"
                        />
                        <a href="/car-detail">
                            <img src="/icons/toggle.svg" alt="Toggle" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                {/*Menu Icons Section */}
                <div className="flex justify-end px-5 sm:px-10 py-4 gap-4 ">
                    {/* Heart */}
                    <div className="hidden sm:block">
                        <Link href="/">
                            <img src="/icons/heart.svg" alt="Heart" className="w-11 h-11" />
                        </Link>
                    </div>
                    {/* Bell */}
                    <div className="hidden sm:block">
                        <Link href="/">
                            <img src="/icons/bell.svg" alt="Bell" className="w-11 h-11" />
                        </Link>
                    </div>

                    {/* Setting */}
                    <div className="hidden sm:block">
                        <Link href="/">
                            <img src="/icons/setting.svg" alt="Setting" className="w-11 h-11" />
                        </Link>
                    </div>
                    <div className="w-11 rounded-full">
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
            <div className="flex gap-6">
                <div className='sm:hidden flex items-center border w-60 rounded-lg px-4 py-2'>
                    <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
                    <input type="text"
                        className="max-w-full w-[123rem] flex-1 text-gray-500 text-sm outline-none pl-2"
                        placeholder="Search something here"
                    />

                </div>
                <div className="border w-12 rounded-lg flex items-center justify-center md:hidden">
                    <img src="/icons/toggle.svg" alt="Toggle for Mobile" className="w-6  h-6" />

                </div>
            </div>
        </nav>
    )
}