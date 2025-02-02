import Image from 'next/image';
import ad1 from '@/public//ads/ad1.svg';
import ad2 from '@/public//ads/ad2.svg';
export default function Hero() {
    return (
        <section className='sm:flex flex justify-center sm:mx-0 sm:py-10 sm:px-16 items-center sm:justify-between'>
            <div className='bg-[#54A6FF] w-80 sm:w-[40rem] h-60 sm:h-[22rem] rounded-xl relative'>
                <div className='absolute p-3 sm:p-6 text-base sm:text-3xl text-white w-72 sm:w-[22rem] font-medium sm:font-semibold z-10 top-1 sm:top-0'>The Best Platform for Car Rental</div>
                <div className='absolute p-3 sm:p-6 text-xs sm:text-base text-white sm:w-[22rem] w-60 top-11 sm:top-28 z-10'>Ease of doing a car rental safely and reliably. Of course at a low price.</div>
                <button className='absolute m-3 sm:m-6 bg-[#3563E9] w-32 h-11 text-base top-24 sm:top-44 rounded-md text-white z-10'>Rental Car</button>
                <Image
                    src={ad1}
                    width={640}
                    height={360}
                    alt='ad1'
                    className='w-80 h-60 sm:w-[40rem] sm:h-[22rem] absolute  sm:relative top-6 sm:top-0 right-4 sm:right-0' />
            </div>
            <div className='sm:block hidden bg-[#3563E9] h-[22rem] rounded-xl relative'>
                <div className='absolute p-3 sm:p-6 text-base sm:text-3xl text-white w-72 sm:w-[22rem] font-medium sm:font-semibold z-10 top-1 sm:top-0'>Easy way to rent a car at a low price</div>
                <div className='absolute p-3 sm:p-6 text-xs sm:text-base text-white sm:w-[22rem] w-60 top-11 sm:top-28 z-10'>Providing cheap car rental services and safe and comfortable facilities.</div>
                <button className='absolute m-6 bg-[#54A6FF] w-32 h-11 text-base top-44 rounded-md text-white'>Rental Car</button>
                <Image
                    src={ad2}
                    width={640}
                    height={360}
                    alt='ad2'
                    className='w-80 h-60 sm:w-[40rem] sm:h-[22rem] absolute  sm:relative top-6 sm:top-0 right-4 sm:right-0' />
            </div>
        </section>
    )
}