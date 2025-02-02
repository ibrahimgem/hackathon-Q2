export const PickAndDrop = () => {
  return (
    <section className='mx-6 lg:mx-16 flex flex-col lg:flex-row items-center justify-between relative'>
      {/* Pickup */}
      <div className='w-80 lg:w-[145.5rem] h-32 lg:h-32 bg-white rounded-xl mt-10 lg:my-0'>
        <div className='mx-4 lg:mx-10 pt-4 flex items-center'>
          <img src="/icons/pickup.svg" alt="Pickup" className="w-4 h-4" />
          <span className='px-2 font-semibold'>Pick - Up</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='lg:ml-5 lg:w-40 border-r'>
            <label htmlFor="locations" className='font-bold text-base'>Locations</label>
            <select name="locations" id="locations" className='text-xs lg:text-xs lg:pr-6 mr-2 lg:mr-0 text-gray-400' >
              <option value="">Select city</option>
            </select>
          </div>
          <div className='ml-3 lg:ml-5 lg:w-40 border-r '>
            <label htmlFor="date" className='font-bold text-base block'>Date</label>
            <select name="date" id="date" className='text-xs lg:text-xs lg:pr-6 mr-1 lg:mr-0 text-gray-400' >
              <option value="">Select date</option>
            </select>
          </div>
          <div className='ml-3 lg:ml-5 lg:w-40'>
            <label htmlFor="time" className='font-bold text-base block'>Time</label>
            <select name="time" id="time" className='text-xs lg:text-xs lg:pr-6 mr-2 lg:mr-0 text-gray-400' >
              <option value="">Select time</option>
            </select>
          </div>
        </div>
      </div>
      {/* Switch */}
      <div className="relative w-full lg:h-40 flex justify-center items-center">
        <button className="absolute mt-12 lg:mb-10">
          <img src="/Switch.svg" alt="switch" className="lg:w-32 lg:h-32 w-44 h-44" />
        </button>
      </div>
      {/* Drop off */}
      <div className='w-80 lg:w-[145.5rem] h-32 lg:h-32 bg-white rounded-xl my-10 lg:my-0'>
        <div className='mx-4 lg:mx-10 pt-4 flex items-center'>
          <img src="/icons/dropoff.svg" alt="Dropoff" className="w-4 h-4" />
          <span className='px-2 font-semibold'>Drop - Off</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='lg:ml-5 lg:w-40 border-r '>
            <label htmlFor="locations" className='font-bold text-base'>Locations</label>
            <select name="locations" id="locations" className='text-xs lg:text-xs lg:pr-6 mr-2 lg:mr-0 text-gray-400' >
              <option value="" className='hidden'>Select city</option>
            </select>
          </div>
          <div className='ml-3 lg:ml-5 lg:w-40 border-r '>
            <label htmlFor="date" className='font-bold text-base block'>Date</label>
            <select name="date" id="date" className='text-xs lg:text-xs lg:pr-6 mr-1 lg:mr-0 text-gray-400' >
              <option value="">Select date</option>
            </select>
          </div>
          <div className='ml-3 lg:ml-5 lg:w-40'>
            <label htmlFor="time" className='font-bold text-base block'>Time</label>
            <select name="time" id="time" className='text-xs lg:text-xs lg:pr-6 mr-2 lg:mr-0 text-gray-400' >
              <option value="">Select time</option>
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}
