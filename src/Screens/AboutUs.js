import React from 'react'
import Layout from './../Layout/Layout'
import Head from '../Components/Head'

const AboutUs = () => {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title='About Us'/>
        <div className='xl:py-20 py-10 px-4'>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Chào mừng tới Website xem phim của chúng tôi
              </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
                <p>
                Chào mừng bạn đến với [Tên Website] – điểm đến lý tưởng cho những tín đồ yêu thích điện ảnh! Tại đây, chúng tôi mang đến cho bạn một kho tàng phim đa dạng, từ những bộ phim bom tấn Hollywood, phim hành động, kinh dị đến những bộ phim tâm lý, tình cảm đầy xúc động.
                </p>
                <p>
                Với sứ mệnh mang lại trải nghiệm xem phim tốt nhất, chúng tôi không ngừng cập nhật những bộ phim mới nhất, chất lượng hình ảnh sắc nét và âm thanh sống động. Dù bạn đang tìm kiếm những giây phút giải trí thú vị hay muốn đắm mình vào những câu chuyện đầy cảm hứng, [Tên Website] luôn sẵn sàng đồng hành cùng bạn.
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    10K
                  </span>
                  <h4 className='text-lg font-semibold my-2 '>Danh Sách Phim</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                  Chúng tôi cam kết mang lại dịch vụ tốt nhất, giúp bạn dễ dàng tìm kiếm và tận hưởng những bộ phim yêu thích mọi lúc, mọi nơi. 
                  </p>
                </div>

                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    8K
                  </span>
                  <h4 className='text-lg font-semibold my-2 '>Người Dùng Yêu Thích</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                  Hãy cùng chúng tôi khám phá thế giới điện ảnh đầy màu sắc và đắm chìm trong những thước phim tuyệt vời ngay hôm nay!
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0'>
              <img 
              src='/images/about2.jpg' 
              alt='aboutus' 
              className='w-full xl:block hidden h-header rounded-lg object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
