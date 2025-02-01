import Image from 'next/image';
import ad1 from '@/public//ads/ad1.svg';
import ad2 from '@/public//ads/ad2.svg';
export default function Hero () {
    return (
        <section className='sm:flex flex justify-center sm:mx-0 py-0 sm:py-10 sm:px-16 items-center sm:justify-between'>
            <div className='bg-[#54A6FF] w-[327px] sm:w-[630px] h-[232px] sm:h-[360px] my-1 rounded-[10px] relative'>
                <div className='absolute p-3 sm:p-6 text-[16px] sm:text-[32px] text-white w-[280px] sm:w-[350px] font-medium sm:font-semibold z-10 top-1 sm:top-0'>The Best Platform for Car Rental</div>
                <div className='absolute p-3 sm:p-6 text-[12px] sm:text-[16px] text-white sm:w-[350px] w-[240px] top-11 sm:top-28 z-10'>Ease of doing a car rental safely and reliably. Of course at a low price.</div>
                <button className='absolute m-3 sm:m-6 bg-[#3563E9] w-[120px] h-[44px] text-[16px] top-24 sm:top-44 rounded-[4px] text-white z-10'>Rental Car</button>
                <Image
                src={ad1} 
                width={640}
                height={360}
                alt='' 
                className='w-80 h-60 sm:w-[640px] sm:h-[360px] absolute  sm:relative top-6 sm:top-0 right-4 sm:right-0'/>
            </div>
            <div className='sm:block hidden bg-[#3563E9] h-[360px] rounded-[10px] relative'>
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