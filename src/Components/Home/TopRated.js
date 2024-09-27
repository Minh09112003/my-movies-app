import React, { useState } from 'react';
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import Title from '../Title';
import { Navigation, Autoplay } from "swiper/modules";
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from '../Stars';
import Loader from '../Notifications/Loader';
import { Empty } from '../Notifications/Empty';
import { useDispatch, useSelector } from 'react-redux';
import { IfMovieLiked, LikeMovie } from '../../Context/Functionalities';

const SwiperTop = ({ prevEl, nextEl, movies }) => {
  const { isLoading } = useSelector((state) => state.userLikeMovie);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  // if liked function
  const isLiked = (movie) => { return IfMovieLiked(movie); };

  return (
    <Swiper 
      navigation={{ prevEl, nextEl }} 
      autoplay={true} 
      speed={1000}
      loop={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {
        movies?.map((movie, index) => (
          <SwiperSlide key={index}>
          <div className='relative p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
            <img 
              src={movie?.titleImage ? movie.titleImage : "/images/user.png"} 
              alt={movie?.name} 
              className='w-full h-full object-cover rounded-lg'
            />
            <div className='overlay absolute top-0 left-0 right-0 bottom-0 flex-colo gap-6 text-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <button 
                onClick={() => LikeMovie(movie, dispatch, userInfo)}
                disabled={isLiked(movie) || isLoading}
                className={`w-12 h-12 hoveres transitions hover:bg-subMain rounded-full ${isLiked(movie) ? "bg-subMain" : "bg-white bg-opacity-30"} text-white`}>
                <FaHeart />
              </button>
              <Link className='font-semibold text-xl truncated line-clamp-2' to={`/movie/${movie?._id}`}>
                {movie?.name}
              </Link>
              <div className='flex gap-2 text-star'>
                <Rating value={movie?.rate}/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

const TopRated = ({ movies, isLoading }) => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames= 'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white border border-red-500'


  return (
    <div className='my-16'>
      <Title title='Top Đánh Giá' Icon={BsBookmarkStarFill} />
      <div className='mt-10'> 
        {
          isLoading ? <Loader /> :
          movies?.length > 0 ?
          <SwiperTop nextEl={nextEl} prevEl={prevEl} movies={movies} /> :
          <Empty message="Hiện tại không có phim" />
        }
        <div className='w-full px-1 flex-rows gap-6 pt-12'>
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
