import React, { useEffect } from 'react'
import SideBar from './SideBar'
import Table from '../../Components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavoriteMoviesAction, getFavoriteMoviesAction } from '../../Redux/Actions/userAction'
import toast from 'react-hot-toast'
import Loader from '../../Components/Notifications/Loader'
import { Empty } from '../../Components/Notifications/Empty'

const FavoritesMovies = () => {
  const dispatch = useDispatch()

  const {
    isLoading,
    isError,
    likedMovies
  } = useSelector((state) => state.userGetFavoriteMovies)

  // delete
  const {
    isLoading:deleteLoading,
    isError:deleteError,
    isSuccess
  } = useSelector((state) => state.userDeleteFavoriteMovies)

  // delete movies from handler
  const deleteMoviesHandler = () => {
    window.confirm("Bạn có chắc muốn xóa tất cả các phim không?") && 
    dispatch(deleteFavoriteMoviesAction())
  }

  // useEffect
  useEffect(() => {
    dispatch(getFavoriteMoviesAction())
    if (isError || deleteError) {
      toast.error(isError || deleteError)
      dispatch({type:isError ? "GET_FAVORITE_MOVIES_RESET" : "DELETE_FAVORITE_MOVIES_RESET"})
    }
  }, [dispatch, isError, deleteError, isSuccess])

  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Phim yêu thích</h2>
                {
                  likedMovies?.length > 0 && 
                  <button 
                  disabled={deleteLoading}
                  onClick={deleteMoviesHandler}
                  className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                    {
                      deleteLoading ? "Đang xóa..." : "Xóa tất cả"
                    }
                </button>
                }
                
            </div>
            {
              isLoading ? 
                (
                  <Loader /> 
                ) :  likedMovies.length > 0 ? (
                  <Table data={likedMovies} admin={false}/> 
                ) : (
                  <Empty message="Không có phim trong mục yêu thích"/>
                )
            }
        </div>
    </SideBar>
  )
}

export default FavoritesMovies