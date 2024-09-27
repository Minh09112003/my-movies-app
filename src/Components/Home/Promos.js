import React from 'react'
import { FiUser } from "react-icons/fi";

const Promos = () => {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed'>
            Tải Phim Về & Xem Offline <br/> Thưởng thức phim trên Mobile
            </h1>
            <p className='text=text text-sm xl:text-base leading-6 xl:leading-8'>
            **Tải Phim Về & Xem Offline**  
            Thưởng thức những bộ phim yêu thích mọi lúc, mọi nơi trên thiết bị di động của bạn. Không cần lo lắng về kết nối internet, chỉ cần tải phim về máy và tận hưởng trải nghiệm xem phim mượt mà, không gián đoạn.
            </p>
            <div className='flex gap-4 md:text-sm'>
              <div className='flex colo bg-black text-subMain px-6 py-3 rounded-md font-bold'>
                HD 4K
              </div>
              <div className='flex items-center rows gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold'>
                <FiUser className='text-2xl' style={{ fontSize: '18px' }}/> 2K
              </div>
            </div>
        </div>
          <div className='flex'>
            <img src='/images/movies/mobile.png' alt='Moble-app' className='h-[450px] w-auto object-contain'/>
            <img src='/images/movies/mobile2.png' alt='Moble-app' className='h-[450px] w-auto object-contain'/>
          </div>
      </div>
    </div>
  )
}

export default Promos