import Link from "next/link"

const Footer = () => {
    return (
        <footer className="min-h-[480px] m-auto">
            <div className="flex  justify-between">
                <div className="m-20 flex flex-col gap-4">
                    <div className="logo">
                        <Link href="/">
                            MORENT
                        </Link>
                    </div>
                    <p className="ml-10 text-gray-500 max-w-[280px] text-[16px]">Our vision is to provide convenience and help increase your sales business.</p>
                    <div>
                    </div>

                </div>
                <div className="flex m-20 gap-24 mr-48">
                    <ul className="text-gray-500 flex flex-col gap-6">
                        <li className="text-[18px] font-bold text-gray-800 ">
                            About
                        </li>
                        <li>
                            How it works
                        </li>
                        <li>
                            Featured
                        </li>
                        <li>
                            Partnership
                        </li>
                        <li>
                            Bussiness Relation
                        </li>
                    </ul>
                    <ul className="text-gray-500 flex flex-col gap-6">
                        <li className="text-[18px] font-bold text-gray-800">
                            Community
                        </li>
                        <li>
                            Events
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Podcast
                        </li>
                        <li>
                            Invite a friend
                        </li>
                    </ul>
                    <ul className="text-gray-500 flex flex-col gap-6">
                        <li className="text-[18px] font-bold text-gray-800">
                            Socials
                        </li>
                        <li>
                            Discord
                        </li>
                        <li>
                            Instagram
                        </li>
                        <li>
                            Twitter
                        </li>
                        <li>
                            Facebook
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between font-bold text-gray-700 border-t-2 py-10 m-auto mx-28">
                <div className="">
                    ©2022 MORENT. All rights reserved
                </div>
                <div className="flex gap-12">
                    <div>
                    Privacy & Policy
                    </div>
                    <div>
                    Terms & Condition
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer