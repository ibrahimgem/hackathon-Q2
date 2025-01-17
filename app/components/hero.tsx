import Image from 'next/image';
import bgad1 from '@/public//ads/bgad1.svg'
export default function Hero () {
    return (
        <section>
        <section className="flex content-center">
            {/* Ads Section */}
            {/* Ad-1 */}
            <div className ="bg-[#54A6FF] rounded-[10px] mt-[32px] ml-[64px]">    
                <h1 className='text-gray-200 text-[32px] w-[272px]'>The Best Platform for Car Rental</h1>
                <h3>Ease of doing a car rental safely and reliably. Of course at a low price.</h3>
                <Image
                src = {bgad1}
                width = {640}
                height = {360}
                alt = "Ad-1"
                />
            </div>
            <div className ="mt-[32px] ml-[32px]">
                {/* <Image
                src = {Ad2}
                width = {640}
                height = {360}
                alt = "Ad-2"
                /> */}
            </div>
        </section>
        {/* Pick up and Drop off */}
        <div>
        {/* Pick Up */}
        <div className="mt-[24px] ml-[64px]">
            <input type="radio" value="Pick-Up"/>
            <div>
                <h2>Locations</h2>
                <input type="dropdown" value="Select your city"/>
            </div>
        </div>
    </div>
    </section>
    )
}