import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const Links = [
    {
      title:'Công ty',
      links: [
        {
          name:'Trang chủ',
          link:'/'
        },
        {
          name:'Về chúng tôi',
          link:'/about-us'
        },
        {
          name:'Liên lạc',
          link:'/contact-us'
        },
        {
          name:'Phim',
          link:'/movies'
        },
      ]
    },
    {
      title:'Top phim hàng đầu',
      links: [
        {
          name:'Hành động',
          link:'#'
        },
        {
          name:'Lãng mạn',
          link:'#'
        },
        {
          name:'Drama',
          link:'/contact-us'
        },
        {
          name:'Lịch sử',
          link:'#'
        },
      ]
    },
    {
      title:'Tài khoản của tôi',
      links: [
        {
          name:'Bảng điều khiển',
          link:'/dashboard'
        },
        {
          name:'Hồ sơ',
          link:'/profile'
        },
        {
          name:'Đổi mật khẩu',
          link:'/password'
        }
      ]
    }
  ]

  return (
    <div className='bg-dry py-4 bprder=t-2 border-black'>
      <div className='container mx-auto text-center px-2'>
        <div className='grid grid-cols-2 mđ:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
            {Links.map((link, index) => (
              <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>
                  {link.title}
                </h3>
                <ul className='text-sm flex flex-col space-y-3'>
                  {link.links.map((text, index) => (
                    <li key={index} className='flex items-baseline'>
                      <Link 
                      to={text.link} 
                      className='text-border inline-block w-full hover:text-subMain'>
                      {text.name}
                      </Link>
                    </li>
                  ))}

                </ul>
              </div>
            ))}

            <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center'>
              <Link to='/'>
                <img src='/images/logo.png' alt='logo' className='object-contain h-10'/>
              </Link>
              <p className='leading-7 text-sm text-border mt-3'>
                <span>
                    234/55, phường 6, quận Gò Vấp<br/> Thành phố Hồ Chí Minh
                  </span>
                  <br/>
                  <span>Số điện thoại: 0918305220</span>
                  <br/>
                  <span>Email: diepdaiminh09112003@gmail.com</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer