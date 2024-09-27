import React, { useEffect, useMemo, useState} from 'react'
import Layout from './../Layout/Layout'
import Filters from '../Components/Filters'
import Movie from '../Components/Movie'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import Loader from '../Components/Notifications/Loader'
import { RiMovie2Line } from "react-icons/ri";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { getAllMoviesAction } from '../Redux/Actions/MoviesActions'
import { LanguageData, RatesData, TimesData, YearData } from '../Data/FilterData';
import { useParams } from 'react-router-dom'

const MoviesPage = () => {
const {search} = useParams()
const dispatch = useDispatch()
const [category, setCategory] = useState({title:'Tất cả thể loại'});
const [year, setYear] = useState(YearData[0]);
const [times, setTimes] = useState(TimesData[0]);
const [rates, setRates] = useState(RatesData[0]);
const [language, setLanguage] = useState(LanguageData[0]); 
const sameClass = 'text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
//all movies
const { isLoading, isError, movies, pages, page } = useSelector((state) => state.getAllMovies)

// get all categories 
const {categories} = useSelector(
  (state) => state.categoryGetAll
);

// queries
const queries = useMemo(() => {
  const query = {
    category: category?.title === "Tất cả thể loại" ? "": category?.title,
    time: times?.title.replace(/\D/g, ""),
    language: language?.title === "Lọc theo ngôn ngữ" ? "": language?.title,
    rate: rates?.title.replace(/\D/g, ""),
    year: year?.title.replace(/\D/g, ""),
    search: search ? search : "",
  }
  return query;
}, [category, times, language, rates, year, search])


useEffect (() => {
  // errors
  if(isError) {
    toast.error(isError)
  }
  // get all movies
  dispatch(getAllMoviesAction(queries))
}, [dispatch, isError, queries])

// pagination next and pev pages
const nextPage = () => {
  dispatch(getAllMoviesAction({
    ...queries,
    pageNumber: page+1
  }))
}

const prevPage = () => {
  dispatch(getAllMoviesAction({
    ...queries,
    pageNumber: page-1
  }))
}

const datas = {
  categories: categories,
  category: category,
  setCategory: setCategory,
  language: language,
  setLanguage: setLanguage,
  rates: rates,
  setRates: setRates,
  times: times,
  setTimes: setTimes,
  year: year,
  setYear: setYear
}

console.log(search);

  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Filters data={datas}/>
        <p className='text-lg font-medium my-6'>
          Tổng <span className='font-bold text-subMain'>
            {movies ? movies?.length : 0}
          </span> {' '} kết quả {
            search &&  `về "${search}"`
          }
        </p>
        {
          isLoading ? (
            <div className="w-full gap-6 flex-colo min-h-screen">
              <Loader />
            </div>
          ) : (
            movies?.length > 0 ? (
              <>
              <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
              {
                movies.map((movie, index) => (
                  <Movie key={index} movie={movie}/>
                ))
              }
              </div>
              { /* Loading More*/ }
              <div className='w-full flex-rows gap-6 md:my-20 my-10'>
                <button
                onClick={prevPage}
                disabled={page === 1} className={sameClass}
                >
                  <TbPlayerTrackPrev className="text-xl"/>
                </button>
                <button
                onClick={nextPage}
                disabled={page === pages} className={sameClass}
                >
                  <TbPlayerTrackNext className="text-xl"/>
                </button>
              </div>
              </>
            ) : (
              <div className="w-full gap-6 flex-colo min-h-screen">
                <div className='w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo'>
                  <RiMovie2Line />
                </div>
                <p className='text-border text-sm'>Hiện tại chưa có phim nào cả, chúng tôi sẽ cố gắng cập nhật sớm nhất</p>
              </div>
            )
          )
        }
         
        </div>
    </Layout>
  )
}

export default MoviesPage