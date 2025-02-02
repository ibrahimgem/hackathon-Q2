import Link from "next/link"

const Footer = () => {
    return (
        <footer className="min-h-[480px] m-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="sm:m-20 flex flex-col gap-4">
                    <div className="sm:mt-0 mt-10 mx-10 text-blue-600 font-bold text-3xl">
                        <Link href="/">
                            MORENT
                        </Link>
                    </div>
                    <p className="ml-10 text-gray-500 sm:max-w-[280px] sm:text-[16px] text-[12px] pr-28 sm:pr-0">Our vision is to provide convenience and help increase your sales business.</p>
                    <div>
                    </div>

                </div>
                <div className="grid grid-cols-2 sm:flex m-10 sm:m-20 sm:gap-24 gap-x-44 gap-y-10 mr-48">
                    <ul className="text-gray-400 flex flex-col gap-6 min-w-36">
                        <li className="text-[16px] sm:text-[18px] font-bold text-gray-800">
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
                            Business Relation
                        </li>
                    </ul>
                    <ul className="sm:hidden text-gray-400 flex flex-col gap-6 min-w-36">
                        <li className="text-[16px] sm:text-[18px] font-bold text-gray-800">
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
                    <ul className="text-gray-400 flex flex-col gap-6 min-w-36">
                        <li className="text-[16px] sm:text-[18px] font-bold text-gray-800">
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
                    <ul className="hidden text-gray-400 sm:flex flex-col gap-6 min-w-36">
                        <li className="text-[16px] sm:text-[18px] font-bold text-gray-800">
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
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-gray-700 sm:border-t-2 sm:py-10 m-auto sm:mx-28 mx-10">
                <div className="hidden sm:block">
                    ©2022 MORENT. All rights reserved
                </div>
                <div className="flex sm:text-[16px] text-[12px] gap-20 sm:gap-12">
                    <div>
                    Privacy & Policy
                    </div>
                    <div>
                    Terms & Condition
                    </div>
                </div>
                <div className="sm:hidden text-[12px] sm:text-[24px] my-6">
                    ©2022 MORENT. All rights reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer