import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className='flex-colo gap-12 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img 
      className='w-full h-96 object-contain' 
      src='/images/404.svg' 
      alt='notfound'/>
      <h1 className='lg:text-4xl font-bold'>Không tìm thấy trang</h1>
      <p className='font-medium text-border italic leading-6'>
      Xin lỗi, trang bạn đang tìm không tồn tại. Vui lòng kiểm tra lại URL hoặc quay lại
      </p>
      <Link 
      to='/' 
      className='bg-subMain transitions text-white flex-rows gap-4 font-medium py-2 hover:text-main px-6 rounded-md'>
        <BiHomeAlt />Quay về trang chủ
      </Link>
    </div>
  )
}

export default NotFound