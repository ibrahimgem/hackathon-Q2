import React from 'react';
import Switch from "@/public/Switch.svg";
import Image from 'next/image';
import PickUpSVG from "@/public/icons/pickup.svg"
import DropOffSVG from "@/public/icons/dropoff.svg"

export const PickAndDrop = () => {
  return (
    <section className='mx-6 sm:mx-16 flex flex-col sm:flex-row items-center justify-between relative'>
      {/* Pickup */}
      <div className='w-[327px] sm:w-[582px] h-[120px] sm:h-[132px] bg-white rounded-[10px] my-10 sm:my-0'>
        <div className='mx-4 sm:mx-10 pt-4 flex'>
          <Image
            src={PickUpSVG}
            width={16}
            height={16}
            alt='Pickup'
          />
          <span className='px-2 font-semibold'>Pick - Up</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='sm:ml-5 sm:w-[162px] border-r '>
            <label htmlFor="locations" className='font-bold text-[16px]'>Locations</label>
            <select name="locations" id="locations" className='text-[10px] sm:text-[12px] sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="">Select your city</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-[162px] border-r '>
            <label htmlFor="date" className='font-bold text-[16px] block'>Date</label>
            <select name="date" id="date" className='text-[10px] sm:text-[12px] sm:pr-6 mr-1 sm:mr-0 text-gray-400' >
              <option value="">Select date</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-[162px]'>
            <label htmlFor="time" className='font-bold text-[16px] block'>Time</label>
            <select name="time" id="time" className='text-[10px] sm:text-[12px] sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="">Select time</option>
            </select>
          </div>
        </div>
      </div>
      {/* Switch */}
      <button className='sm:relative sm:bottom-0 absolute top-28'>
        <Image
          src={Switch}
          width={120}
          height={120}
          alt="Switch"
          className='w-40'
        />
      </button>
      {/* Drop off */}
      <div className='w-[327px] sm:w-[582px] h-[120px] sm:h-[132px] bg-white rounded-[10px]'>
        <div className='mx-4 sm:mx-10 pt-4 flex'>
          <Image
            src={PickUpSVG}
            width={16}
            height={16}
            alt='Pickup'
          />
          <span className='px-2 font-semibold'>Drop - Off</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='sm:ml-5 sm:w-[162px] border-r '>
            <label htmlFor="locations" className='font-bold text-[16px]'>Locations</label>
            <select name="locations" id="locations" className='text-[10px] sm:text-[12px] sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="" className='hidden'>Select your city</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-[162px] border-r '>
            <label htmlFor="date" className='font-bold text-[16px] block'>Date</label>
            <select name="date" id="date" className='text-[10px] sm:text-[12px] sm:pr-6 mr-1 sm:mr-0 text-gray-400' >
              <option value="">Select date</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-[162px]'>
            <label htmlFor="time" className='font-bold text-[16px] block'>Time</label>
            <select name="time" id="time" className='text-[10px] sm:text-[12px] sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="">Select time</option>
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}
