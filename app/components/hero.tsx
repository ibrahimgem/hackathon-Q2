import Image from 'next/image';
import ad1 from '@/public//ads/ad1.svg';
import ad2 from '@/public//ads/ad2.svg';
export default function Hero () {
    return (
        <section className='mx-16 flex justify-between py-10'>
            <div className='bg-[#54A6FF] w-[640px] h-[360px] rounded-[10px] relative'>
                <div className='absolute p-6 text-[32px] text-white w-[350px] font-semibold'>The Best Platform for Car Rental</div>
                <div className='absolute p-6 text-[16px] text-white w-[350px] top-28 '>Ease of doing a car rental safely and reliably. Of course at a low price.</div>
                <button className='absolute m-6 bg-[#3563E9] w-[120px] h-[44px] text-[16px] top-44 rounded-[4px] text-white'>Rental Car</button>
                <Image
                src={ad1} 
                width={640}
                height={360}
                alt='' />
            </div>
            <div className='bg-[#3563E9] w-[640px] h-[360px] rounded-[10px] relative'>
                <div className='absolute p-6 text-[32px] text-white w-[350px] font-semibold'>Easy way to rent a car at a low price</div>
                <div className='absolute p-6 text-[16px] text-white w-[350px] top-28 '>Providing cheap car rental services and safe and comfortable facilities.</div>
                <button className='absolute m-6 bg-[#54A6FF] w-[120px] h-[44px] text-[16px] top-44 rounded-[4px] text-white'>Rental Car</button>
                <Image
                src={ad2} 
                width={640}
                height={360}
                alt='' />
            </div>
        </section>
    )
}