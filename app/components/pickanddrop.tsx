export const PickAndDrop = () => {
  return (
    <section className='mx-6 sm:mx-16 flex flex-col sm:flex-row items-center justify-between relative'>
      {/* Pickup */}
      <div className='w-80 sm:w-[145.5rem] h-32 sm:h-32 bg-white rounded-xl mt-10 sm:my-0'>
        <div className='mx-4 sm:mx-10 pt-4 flex items-center'>
          <img src="/icons/pickup.svg" alt="Pickup" className="w-4 h-4" />
          <span className='px-2 font-semibold'>Pick - Up</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='sm:ml-5 sm:w-40 border-r'>
            <label htmlFor="locations" className='font-bold text-base'>Locations</label>
            <select name="locations" id="locations" className='text-xs sm:text-xs sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="">Select city</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-40 border-r '>
            <label htmlFor="date" className='font-bold text-base block'>Date</label>
            <select name="date" id="date" className='text-xs sm:text-xs sm:pr-6 mr-1 sm:mr-0 text-gray-400' >
              <option value="">Select date</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-40'>
            <label htmlFor="time" className='font-bold text-base block'>Time</label>
            <select name="time" id="time" className='text-xs sm:text-xs sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="">Select time</option>
            </select>
          </div>
        </div>
      </div>
      {/* Switch */}
      <div className="relative w-full sm:h-40 flex justify-center items-center">
        <button className="absolute mt-12 sm:mb-10">
          <img src="/Switch.svg" alt="switch" className="sm:w-32 sm:h-32 w-44 h-44" />
        </button>
      </div>
      {/* Drop off */}
      <div className='w-80 sm:w-[145.5rem] h-32 sm:h-32 bg-white rounded-xl my-10 sm:my-0'>
        <div className='mx-4 sm:mx-10 pt-4 flex items-center'>
          <img src="/icons/dropoff.svg" alt="Dropoff" className="w-4 h-4" />
          <span className='px-2 font-semibold'>Drop - Off</span>
        </div>
        <div className='flex mx-5 pt-3'>
          <div className='sm:ml-5 sm:w-40 border-r '>
            <label htmlFor="locations" className='font-bold text-base'>Locations</label>
            <select name="locations" id="locations" className='text-xs sm:text-xs sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="" className='hidden'>Select city</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-40 border-r '>
            <label htmlFor="date" className='font-bold text-base block'>Date</label>
            <select name="date" id="date" className='text-xs sm:text-xs sm:pr-6 mr-1 sm:mr-0 text-gray-400' >
              <option value="">Select date</option>
            </select>
          </div>
          <div className='ml-3 sm:ml-5 sm:w-40'>
            <label htmlFor="time" className='font-bold text-base block'>Time</label>
            <select name="time" id="time" className='text-xs sm:text-xs sm:pr-6 mr-2 sm:mr-0 text-gray-400' >
              <option value="">Select time</option>
            </select>
          </div>
        </div>
      </div>

    </section>
  )
}
