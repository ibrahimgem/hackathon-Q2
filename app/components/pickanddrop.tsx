import React from 'react';
import Switch from "@/public/Switch.svg";
import Image from 'next/image';

export const PickAndDrop = () => {
  return (
    <section className='mx-16 flex items-center justify-between'>
      {/* Pickup */}
      <div className='w-[582px] h-[132px] bg-white rounded-[10px]'>
        <div className='mx-10 pt-4'>
          <input type="radio" name="pickup" id="pickup" />
          <span className='px-2'>Pick - Up</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='ml-5 w-[162px] border-r '>
            <label htmlFor="locations" className='font-bold text-[16px]'>Locations</label>
            <select name="locations" id="locations" className='text-[12px] pr-6 text-gray-400' >
              <option value="">Select your city</option>
            </select>
          </div>
          <div className='ml-5 w-[162px] border-r '>
            <label htmlFor="date" className='font-bold text-[16px]'>Date</label>
            <select name="date" id="date" className='text-[12px] pr-6 text-gray-400' >
              <option value="">Select your date</option>
            </select>
          </div>
          <div className='ml-5 w-[162px] '>
            <label htmlFor="time" className='font-bold text-[16px]'>Time</label>
            <select name="time" id="time" className='text-[12px] pr-6  text-gray-400' >
              <option value="">Select your time</option>
            </select>
          </div>
        </div>
      </div>
      {/* Switch */}
      <button>
        <Image
        src={Switch}
        width={120}
        height={120}
        alt="" />
      {/* Drop off */}
      </button>
      <div className='w-[582px] h-[132px] bg-white rounded-[10px]'>
        <div className='mx-10 pt-4'>
          <input type="radio" name="dropoff" id="dropoff" />
          <span className='px-2'>Drop - off</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='ml-5 w-[162px] border-r '>
            <label htmlFor="locations" className='font-bold text-[16px]'>Locations</label>
            <select name="locations" id="locations" className='text-[12px] pr-6 text-gray-400' >
              <option value="">Select your city</option>
            </select>
          </div>
          <div className='ml-5 w-[162px] border-r '>
            <label htmlFor="date" className='font-bold text-[16px]'>Date</label>
            <select name="date" id="date" className='text-[12px] pr-6 text-gray-400' >
              <option value="">Select your date</option>
            </select>
          </div>
          <div className='ml-5 w-[162px] '>
            <label htmlFor="time" className='font-bold text-[16px]'>Time</label>
            <select name="time" id="time" className='text-[12px] pr-6  text-gray-400' >
              <option value="">Select your time</option>
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}
