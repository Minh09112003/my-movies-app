import React from 'react'
import Layout from './../Layout/Layout'
import Head from '../Components/Head'
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";


const ContactUs = () => {

    const ContactData = [
        {
            id: 1,
            title: 'Email của chúng tôi',
            info: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi, góp ý, hoặc cần sự hỗ trợ nào, đừng ngần ngại liên hệ với chúng tôi',
            icon: FiMail,
            contact: 'diepdaiminh09112003@gmail.com'
        },
        {
            id: 2,
            title: 'Số điện thoại của chúng tôi',
            info: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi, góp ý, hoặc cần sự hỗ trợ nào, đừng ngần ngại liên hệ với chúng tôi',
            icon: FiPhoneCall,
            contact: '0918305220'
        },
        {
            id: 3,
            title: 'Địa chỉ',
            info: '234/55, Đường Lê Đức Thọ, Phường 6, Quận Gò Vấp, Thành Phố Hồ Chí Minh ',
            icon: FiMapPin,
            contact: ''
        },
    ]

  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title='Contact Us'/>
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((item) => (
                <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                    <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                          <item.icon />
                    </span>
                    <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                    <p className='mb-0 text-sm text-text leading-7'>
                        <a href={`mailto:${item.contact}`} className='text-blue-600'>
                            {item.contact}
                        </a> {' '}
                        {item.info}
                    </p>
                </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs